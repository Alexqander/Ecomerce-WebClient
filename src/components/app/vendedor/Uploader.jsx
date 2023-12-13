'use client';
import { useCallback, useEffect, useState } from 'react';
import {
	CloudArrowUpIcon,
	TrashIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productSchema } from '@/validations/productSchema';
import { useAuthContext } from '@/context/authContext';
import { toast } from 'sonner';
import { CategoriesService } from '@/services/categories.service';
import { removeSubstringAndGetNumber } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import { ProductsService } from '@/services/products.service';
export default function Uploader({ className }) {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(productSchema),
	});
	const router = useRouter();
	const { user } = useAuthContext();
	const [files, setFiles] = useState([]);
	const [rejectedFiles, setRejectedFiles] = useState([]);
	const [categories, setCategories] = useState([]);
	const [subcategories, setSubcategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(0);
	const [selectedSubCategory, setSelectedSubCategory] = useState(0);

	const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
		if (acceptedFiles?.length) {
			setFiles((previousFiles) => [...previousFiles, ...acceptedFiles]);
		}

		if (rejectedFiles?.length) {
			setRejectedFiles((previousFiles) => [...previousFiles, ...rejectedFiles]);
		}
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: { 'image/*': [] },
		maxSize: 1024 * 1000,
		onDrop,
	});

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const { data } = await CategoriesService.getAllCategories();
				if (data) {
					setCategories(data.data);
				}
			} catch (error) {
				toast.error('Error al obtener las categorias');
			}
		};

		fetchCategories();
		// revoke the data uris to avoid memory leaks
		register('files');
		return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
	}, [files, rejectedFiles, register]);

	const removeFile = (name) => {
		setFiles(files.filter((file) => file.name !== name));
	};

	const removeAll = () => {
		setFiles([]);
		setRejectedFiles([]);
	};

	const removeRejected = (name) => {
		setRejectedFiles((files) => files.filter(({ file }) => file.name !== name));
	};

	const handleChange = (e) => {
		const subCategoryId = removeSubstringAndGetNumber(
			e.target.value,
			'ssbgrt-'
		);
		setSelectedCategory(subCategoryId);

		setValue('subCategoryId', subCategoryId);
	};

	const handleCategoryChange = (e) => {
		const substringToRemove = 'slgfr-';
		const categoryId = removeSubstringAndGetNumber(
			e.target.value,
			substringToRemove
		);
		setValue('category', categoryId);
		setSelectedCategory(categoryId);
		fetchSubcategories(categoryId);
	};

	const fetchSubcategories = async (categoryId) => {
		try {
			const { data } = await CategoriesService.getSubcategoriesByCategory(
				categoryId
			);
			if (data) {
				setSubcategories(data.data);
			}
		} catch (error) {
			toast.error('Error al obtener las subcategorias');
		}
	};

	const onSubmit = async (data) => {
		try {
			const { category, ...formDataValues } = data; // Excluye 'category'
			const formData = new FormData();
			// Agregar los datos del formulario al FormData
			for (const [key, value] of Object.entries(formDataValues)) {
				console.log(key, value);
				if (key !== 'files') {
					formData.append(key, value);
				}
			}
			// Agregar archivos al FormData
			files.forEach((file) => formData.append('files', file));
			const storeId = user.sellerProfile.store[0].id;
			formData.append('storeId', storeId);

			// Realizar solicitud a la API
			const { data: response } = await ProductsService.createProduct(formData);
			console.log('response');
			console.log(response);
			if (response) {
				toast.success('Producto creado exitosamente');
				console.log('entre al if');
				// Redireccionar a la pagina de productos
				router.push('/dashboard/vendedor/products');
			} else {
				toast.error('Error al crear el producto');
			}
		} catch (error) {
			// Manejo de excepciones
			console.log(error);
			toast.error('Error al crear el producto');
		}
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="grid grid-cols-1 lg:grid-cols-2">
			<div className="flex flex-col px-10">
				<h2 className="title text-3xl font-semibold">
					Información del producto
				</h2>
				<Input
					variant="bordered"
					size="lg"
					labelPlacement="outside"
					label="Nombre"
					{...register('name')}
					color={errors.name ? 'danger' : 'success'}
					isInvalid={errors.name}
					errorMessage={errors.name?.message}
					description="Nombre del producto"
				/>
				<Input
					variant="bordered"
					{...register('description')}
					color={errors.description ? 'danger' : 'success'}
					isInvalid={errors.description}
					errorMessage={errors.description?.message}
					size="lg"
					labelPlacement="outside"
					label="Descripción"
					description="Descripción del producto"
				/>
				<div className="flex flex-col lg:flex-row gap-4 my-5">
					<Input
						type="number"
						label="Precio"
						{...register('price')}
						variant="bordered"
						color={errors.price ? 'danger' : 'success'}
						isInvalid={errors.price}
						errorMessage={errors.price?.message}
						size="lg"
						placeholder="0.00"
						labelPlacement="outside"
						startContent={
							<div className="pointer-events-none flex items-center">
								<span className="text-default-400 text-small">$</span>
							</div>
						}
					/>
					<Input
						type="number"
						variant="bordered"
						{...register('stock')}
						label="Stock"
						size="lg"
						color={errors.stock ? 'danger' : 'success'}
						isInvalid={errors.stock}
						errorMessage={errors.stock?.message}
						placeholder="0"
						labelPlacement="outside"
						startContent={
							<div className="pointer-events-none flex items-center">
								<span className="text-default-400 text-small">Cant</span>
							</div>
						}
					/>
				</div>
				<div className="flex flex-col lg:flex-row gap-4 my-5">
					<Select
						{...register('category')}
						color={errors.category ? 'danger' : 'success'}
						isInvalid={errors.category}
						errorMessage={errors.category?.message}
						value={selectedCategory}
						onChange={handleCategoryChange}
						label="Categoria"
						placeholder="Selecciona una categoria"
						size="lg"
						variant="bordered"
						className="">
						{categories.map((category) => (
							<SelectItem
								key={`slgfr-${category.id}`}
								value={`slgfr-${category.id}`}>
								{category.name}
							</SelectItem>
						))}
					</Select>
					<Select
						label="Subcategoria"
						{...register('subCategoryId')}
						color={errors.subCategoryId ? 'danger' : 'success'}
						isInvalid={errors.subCategoryId}
						errorMessage={errors.subCategoryId?.message}
						placeholder="Selecciona una subcategoria"
						value={selectedSubCategory}
						onChange={handleChange}
						size="lg"
						variant="bordered"
						className="">
						{subcategories.map((subcategory) => (
							<SelectItem
								key={`ssbgrt-${subcategory.id}`}
								value={subcategory.id}>
								{subcategory.name}
							</SelectItem>
						))}
					</Select>
				</div>
				<Button
					size="lg"
					color="secondary"
					variant="solid"
					className=" mt-24"
					type="submit">
					Guardar
				</Button>
			</div>
			<div className="px-10">
				<div
					{...getRootProps({
						className: className,
					})}>
					<input {...getInputProps()} />
					<div className="flex flex-col items-center justify-center gap-4">
						<CloudArrowUpIcon className="w-12 h-12 text-success-600" />
						{isDragActive ? (
							<p className="font-montserrat font-light text-sm">
								Suelta los archivos aquí ...
							</p>
						) : (
							<p className="font-montserrat font-light text-sm">
								Arrastre y suelte archivos aquí, o haga clic para seleccionar
								archivos
							</p>
						)}
					</div>
				</div>

				{/* Preview */}
				<section className="mt-10">
					<div className="flex gap-4 items-center">
						<h2 className="title text-2xl font-semibold">Preview</h2>
						<Button
							type="button"
							onClick={removeAll}
							endContent={<TrashIcon className="w-5 h-5" />}
							color="danger">
							Remover todos
						</Button>
					</div>

					{/* Accepted files */}
					<h3 className="title text-lg font-semibold text-neutral-600 mt-10 border-b pb-3">
						Archivos Aceptados
					</h3>
					<ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
						{files.map((file) => (
							<li
								key={file.name}
								className="relative h-32 rounded-md shadow-lg">
								<Image
									src={file.preview}
									alt={file.name}
									width={100}
									height={100}
									onLoad={() => {
										URL.revokeObjectURL(file.preview);
									}}
									className="h-full w-full object-contain rounded-md"
								/>
								<button
									type="button"
									className="w-7 h-7 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transition-colors"
									onClick={() => removeFile(file.name)}>
									<XMarkIcon className="w-5 h-5 fill-white hover:fill-secondary-400 transition-colors" />
								</button>
								<p className="mt-2 text-neutral-500 text-[12px] font-medium">
									{file.name}
								</p>
							</li>
						))}
					</ul>

					{/* Rejected Files */}
					<h3 className="title text-lg font-semibold text-neutral-600 mt-24 border-b pb-3">
						Archivos Rechazados
					</h3>
					<ul className="mt-6 flex flex-col">
						{rejectedFiles.map(({ file, errors }) => (
							<li key={file.name} className="flex items-start justify-between">
								<div>
									<p className="mt-2 text-neutral-500 text-sm font-medium">
										{file.name}
									</p>
									<ul className="text-[12px] text-red-400">
										{errors.map((error) => (
											<li key={error.code}>{error.message}</li>
										))}
									</ul>
								</div>
								<Button
									type="button"
									color="danger"
									isIconOnly
									isLoading={isSubmitting}
									onClick={() => removeRejected(file.name)}>
									<TrashIcon className="w-5 h-5" />
								</Button>
							</li>
						))}
					</ul>
				</section>
			</div>
		</form>
	);
}
