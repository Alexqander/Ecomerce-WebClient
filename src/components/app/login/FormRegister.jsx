'use client';
import { Button } from '@nextui-org/button';
import { useState } from 'react';
import {
	BuildingStorefrontIcon,
	UserIcon,
	ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { EyeFilledIcon } from '@/components/icons/input/EyeFilledIcon';
import { EyeSlashFilledIcon } from '@/components/icons/input/EyeSlashFilledIcon';
import { Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '@/validations/loginSchema';
import { AuthService } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
export default function FormRegister() {
	const [isVisible, setIsVisible] = useState(false);
	const [tipoCuenta, setTipoCuenta] = useState(null);
	const [selected, setSelected] = useState(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(registerSchema),
	});
	const handleSelected = (id) => {
		setSelected(!selected);
		setTipoCuenta(id);
	};
	console.log(errors);
	const onSubmit = async (data) => {
		console.log('Iniciando peticion');
		localStorage.setItem('user', JSON.stringify(data));
		const newUser = {
			user: {
				...data,
			},
			role: tipoCuenta,
		};
		try {
			const data = await AuthService.register(newUser);
			console.log(data);
			router.push('/auth/register/initial');
		} catch (error) {
			toast.error('Error al crear el usuario', error);
			console.log(error);
		}
	};

	const toggleVisibility = () => setIsVisible(!isVisible);
	return (
		<div className="container-fluid my-10  w-full">
			<div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12">
				<div className="w-full">
					<h1 className="text-2xl font-montserrat font-semibold tracking-wider text-yellow-400 capitalize">
						Obten tu cuenta gratuita.
					</h1>
					<p className="my-4 text-gray-500 dark:text-gray-300">
						Vamos a configurarlo todo para que pueda verificar su cuenta
						personal y comenzar a configurar su perfil.
					</p>
					<div>
						<p>Seleccione su tipo de cuenta</p>
						<div className="flex flex-col lg:flex-row gap-3 my-5">
							<Button
								size="lg"
								color="secondary"
								onClick={() => handleSelected(4)}
								variant={selected ? 'solid' : 'bordered'}
								startContent={<UserIcon className="w-5 h-5" />}>
								Cliente
							</Button>
							<Button
								size="lg"
								color="secondary"
								onClick={() => handleSelected(2)}
								variant={selected ? 'bordered' : 'solid'}
								startContent={<BuildingStorefrontIcon className="w-5 h-5" />}>
								Empresa
							</Button>
						</div>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="grid grid-cols-1 lg:grid-cols-2 gap-3">
							<div className="flex flex-col w-full gap-3">
								<Input
									type="text"
									variant="bordered"
									label="Nombre *"
									placeholder="Ingrese su nombre"
									{...register('name')}
									color={errors.name ? 'danger' : 'success'}
									isInvalid={errors.name}
									errorMessage={errors.name?.message}
								/>
								<Input
									type="email"
									variant="bordered"
									label="Email *"
									placeholder="Ingrese su email"
									{...register('email')}
									color={errors.email ? 'danger' : 'success'}
									isInvalid={errors.email}
									errorMessage={errors.email?.message}
								/>
								<Input
									label="Contraseña *"
									variant="bordered"
									size="md"
									placeholder="Ingrese su contraseña"
									endContent={
										<button
											className="focus:outline-none"
											type="button"
											onClick={toggleVisibility}>
											{isVisible ? (
												<EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
											) : (
												<EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
											)}
										</button>
									}
									type={isVisible ? 'text' : 'password'}
									className="w-full"
									{...register('password')}
									color={errors.password ? 'danger' : 'success'}
									isInvalid={errors.password}
									errorMessage={errors.password?.message}
								/>
							</div>
							<div className="flex flex-col w-full gap-3">
								<Input
									type="text"
									variant="bordered"
									label="Apellidos *"
									placeholder="Ingrese sus apellidos"
									{...register('lastName')}
									color={errors.lastName ? 'danger' : 'success'}
									isInvalid={errors.lastName}
									errorMessage={errors.lastName?.message}
								/>
								<Input
									type="text"
									variant="bordered"
									label="Numero de telefono *"
									placeholder="xxx-xxx-xxxx"
									{...register('phoneNumber')}
									color={errors.phoneNumber ? 'danger' : 'success'}
									isInvalid={errors.phoneNumber}
									errorMessage={errors.phoneNumber?.message}
								/>
								<Input
									label="Confirmar contraseña *"
									variant="bordered"
									size="md"
									placeholder="Confirme su contraseña"
									endContent={
										<button
											className="focus:outline-none"
											type="button"
											onClick={toggleVisibility}>
											{isVisible ? (
												<EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
											) : (
												<EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
											)}
										</button>
									}
									type={isVisible ? 'text' : 'password'}
									className="w-full"
									{...register('confirmPassword')}
									color={errors.confirmPassword ? 'danger' : 'success'}
									isInvalid={errors.confirmPassword}
									errorMessage={errors.confirmPassword?.message}
								/>
							</div>
							<Button
								variant="solid"
								isLoading={isSubmitting}
								type="submit"
								size="lg"
								endContent={<ArrowRightIcon className="w-5 h-5" />}
								className="bg-success text-white my-5">
								Registrarse
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
