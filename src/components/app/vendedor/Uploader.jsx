'use client';
import { useCallback, useEffect, useState } from 'react';
import {
	ArrowUpTrayIcon,
	CloudArrowUpIcon,
	TrashIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import { Button, Input, Select, SelectItem } from '@nextui-org/react';
export default function Uploader({ className }) {
	const [files, setFiles] = useState([]);
	const [rejectedFiles, setRejectedFiles] = useState([]);

	const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
		if (acceptedFiles?.length) {
			setFiles((previousFiles) => [
				...previousFiles,
				...acceptedFiles.map((file) =>
					Object.assign(file, { preview: URL.createObjectURL(file) })
				),
			]);
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
		// revoke the data uris to avoid memory leaks
		return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
	}, [files, rejectedFiles]);

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

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (files.length === 0) return;
		const formData = new FormData();
		files.forEach((file) => {
			formData.append('files', file);
		});
		formData.append('upload_preset', 'products');

		// aqui mando el formulario para subir las imagenes

		const res = await fetch(
			'https://api.cloudinary.com/v1_1/dqf2smlu2/image/upload',
			{
				method: 'POST',
				body: formData,
			}
		);
	};

	return (
		<form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2">
			<div className="flex flex-col px-10">
				<h2 className="title text-3xl font-semibold">
					Información del producto
				</h2>
				<Input
					variant="bordered"
					color="success"
					size="lg"
					labelPlacement="outside"
					label="Nombre"
					description="Nombre del producto"
				/>
				<Input
					variant="bordered"
					color="success"
					size="lg"
					labelPlacement="outside"
					label="Descripción"
					description="Descripción del producto"
				/>
				<div className="flex flex-col lg:flex-row gap-4 my-5">
					<Input
						type="number"
						label="Precio"
						variant="bordered"
						color="success"
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
						label="Stock"
						size="lg"
						color="success"
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
						label="Categoria"
						placeholder="Selecciona una categoria"
						size="lg"
						color="success"
						variant="bordered"
						className="">
						<SelectItem value={1}>Accesorios</SelectItem>
						<SelectItem value={1}>Belleza</SelectItem>
						<SelectItem value={1}>Deportes</SelectItem>
					</Select>
					<Select
						label="Subcategoria"
						placeholder="Selecciona una subcategoria"
						size="lg"
						color="success"
						variant="bordered"
						className="">
						<SelectItem value={1}>Accesorios</SelectItem>
						<SelectItem value={1}>Belleza</SelectItem>
						<SelectItem value={1}>Deportes</SelectItem>
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
