'use client';
import { Button } from '@nextui-org/button';
import React from 'react';
import {
	BuildingStorefrontIcon,
	UserIcon,
	ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { EyeFilledIcon } from '@/components/icons/input/EyeFilledIcon';
import { EyeSlashFilledIcon } from '@/components/icons/input/EyeSlashFilledIcon';
import { Input } from '@nextui-org/react';
export default function FormRegister() {
	const [isVisible, setIsVisible] = React.useState(false);

	const toggleVisibility = () => setIsVisible(!isVisible);
	return (
		<div className="container-fluid my-10  w-full">
			<div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12">
				<div className="w-full">
					<h1 className="text-2xl font-montserrat font-semibold tracking-wider text-yellow-400 capitalize">
						Obten tu cuenta gratuita.
					</h1>
					<p class="my-4 text-gray-500 dark:text-gray-400">
						Vamos a configurarlo todo para que pueda verificar su cuenta
						personal y comenzar a configurar su perfil.
					</p>
					<div>
						<p>Seleccione su tipo de cuenta</p>
						<div className="flex flex-col lg:flex-row gap-3 my-5">
							<Button
								size="lg"
								color="secondary"
								startContent={<UserIcon className="w-5 h-5" />}>
								Cliente
							</Button>
							<Button
								size="lg"
								color="secondary"
								variant="bordered"
								startContent={<BuildingStorefrontIcon className="w-5 h-5" />}>
								Empresa
							</Button>
						</div>
						<form className="grid grid-cols-1 lg:grid-cols-2 gap-3">
							<div className="flex flex-col w-full gap-3">
								<Input type="text" variant="flat" label="Nombre" />
								<Input type="email" variant="flat" label="Email" />
								<Input
									label="Contraseña"
									variant="flat"
									size="lg"
									placeholder="Enter your password"
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
								/>
							</div>
							<div className="flex flex-col w-full gap-3">
								<Input type="text" variant="flat" label="Apellidos" />
								<Input type="text" variant="flat" label="Numero de telefono" />
								<Input
									label="Confirmar contraseña"
									variant="flat"
									size="lg"
									placeholder="Enter your password"
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
								/>
							</div>
							<Button
								variant="solid"
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
