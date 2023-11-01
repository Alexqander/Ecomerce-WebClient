'use client';
import EcomerceLogo from '@/components/icons/brand/EcomerceLogo';
import { GoogleIcon } from '@/components/icons/google/GoogleIcon';
import { EyeFilledIcon } from '@/components/icons/input/EyeFilledIcon';
import { EyeSlashFilledIcon } from '@/components/icons/input/EyeSlashFilledIcon';
import { Button, Input } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function FormLogin() {
	const [isVisible, setIsVisible] = React.useState(false);

	const toggleVisibility = () => setIsVisible(!isVisible);
	return (
		<>
			<div className="container my-10 md:w-3/6 w-5/6">
				<div className="flex flex-col gap-10 justify-center">
					<div>
						<EcomerceLogo width={'6em'} height={'6em'} className="mx-auto" />
						<div className="flex flex-row justify-center content-center">
							<p className="font-montserrat font-semibold text-[40px]">Fast</p>
							<p className="font-extralight text-[40px]">Shop</p>
						</div>
						<p className="text-center text-base">Fast and Easy</p>
					</div>
					<div className="flex justify-center">
						<h2 className=" text-base font-montserrat font-normal text-gray-600 dark:text-gray-300 ">
							Inicia Session para acceder a tu cuenta
						</h2>
					</div>

					<form action="" className="flex flex-col gap-10 justify-center">
						<Input
							isClearable
							size="lg"
							type="email"
							label="Email"
							variant="bordered"
							placeholder="Enter your email"
							onClear={() => console.log('input cleared')}
							className="w-full"
						/>
						<Input
							label="Password"
							variant="bordered"
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
						<div className="flex gap-2 justify-end">
							<Link href="/auth/recovery">
								<p className="text-sm font-montserrat font-normal text-blue-500">
									¿Olvidaste tu contraseña?
								</p>
							</Link>
						</div>
						<Button variant="solid" size="lg" color="secondary">
							Iniciar Sesion
						</Button>
					</form>
					<div className="flex justify-center gap-2">
						<h4>Si aun no tienes cuenta</h4>
						<Link href="/auth/register">
							<p className="text-blue-500"> Registrarte aqui</p>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
