'use client';
import EcomerceLogo from '@/components/icons/brand/EcomerceLogo';
import { GoogleIcon } from '@/components/icons/google/GoogleIcon';
import { EyeFilledIcon } from '@/components/icons/input/EyeFilledIcon';
import { EyeSlashFilledIcon } from '@/components/icons/input/EyeSlashFilledIcon';
import { Button, Input } from '@nextui-org/react';
import React from 'react';

export default function FormLogin() {
	const [isVisible, setIsVisible] = React.useState(false);

	const toggleVisibility = () => setIsVisible(!isVisible);
	return (
		<>
			<form className="container my-10 w-1/3">
				<div className="flex flex-col gap-10 justify-center">
					<div>
						<EcomerceLogo width={180} height={180} className="mx-auto" />
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
							startContent={<GoogleIcon className=" w-28 h-28 " />}>
							<p className="font-montserrat font-normal text-base">
								Iniciar con Google
							</p>
						</Button>
					</div>
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
				</div>
			</form>
		</>
	);
}
