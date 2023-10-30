'use client';
import EcomerceLogo from '@/components/icons/brand/EcomerceLogo';
import { GoogleIcon } from '@/components/icons/google/GoogleIcon';
import { EyeFilledIcon } from '@/components/icons/input/EyeFilledIcon';
import { EyeSlashFilledIcon } from '@/components/icons/input/EyeSlashFilledIcon';
import { Button, Input } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import axios from 'axios';

export default function FormLogin() {
	const [isVisible, setIsVisible] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const router = useRouter();
	const handleLogin = async () => {
		// * Redirect to google auth
		window.location.href = 'http://localhost:3000/apiEcomerce/1.0/auth/google';
		// ! comienzo de la autenticacion
	};

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
					<div>
						<Button
							className="w-full py-10"
							size="lg"
							variant="bordered"
							startContent={<GoogleIcon />}
							onClick={handleLogin}>
							<p className="font-montserrat font-normal md:text-base text-xs">
								Iniciar con Google
							</p>
						</Button>
						{loading && <p>Esperando autenticación...</p>}
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
						<Button variant="solid" size="lg" color="secondary">
							Iniciar Sesion
						</Button>
					</form>
				</div>
			</div>
		</>
	);
}
