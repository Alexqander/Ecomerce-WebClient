'use client';
import EcomerceLogo from '@/components/icons/brand/EcomerceLogo';
import { EyeFilledIcon } from '@/components/icons/input/EyeFilledIcon';
import { EyeSlashFilledIcon } from '@/components/icons/input/EyeSlashFilledIcon';
import { Button, Input } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useAuthContext } from '@/context/authContext';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/validations/loginSchema';
import { AuthService } from '@/services/auth.service';
import { toast } from 'sonner';

const directRoles = {
	1: '/dashboard/admin',
	2: '/dashboard/vendedor',
	3: '/dashboard/repartidor',
	4: '/dashboard/user',
};

export default function FormLogin() {
	const [isVisible, setIsVisible] = React.useState(false);
	const router = useRouter();
	const { login } = useAuthContext();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(loginSchema),
	});

	const onSubmit = async (data) => {
		const { email, password } = data;
		try {
			const { data } = await AuthService.login({ email, password });
			const { token } = data.data;
			const authTokens = {
				token: token.token,
				expiresAt: token.expiresAt,
				userId: token.userId,
				tokenId: token.id,
			};
			const user = {
				email: data.data.email,
				roleId: data.data.roleId,
				phoneNumber: data.data.phoneNumber,
				userId: data.data.userId,
				name: data.data.name,
				lastName: data.data.lastName,
			};
			login({ authTokens, user });
			console.log(user.roleId);
			router.push(directRoles[user.roleId]);
			toast.success(`Bienvenido ${user.name}`);
		} catch (error) {
			toast.error('Usuario o contraseña incorrectos');
			console.log(error);
		}
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
					<div className="flex justify-center">
						<h2 className=" text-base font-montserrat font-normal text-gray-600 dark:text-gray-300 ">
							Inicia Session para acceder a tu cuenta
						</h2>
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-10 justify-center">
						<Input
							isClearable
							size="lg"
							type="email"
							label="Email"
							variant="bordered"
							placeholder="Enter your email"
							onClear={() => console.log('input cleared')}
							className="w-full"
							{...register('email')}
							color={errors.email ? 'danger' : 'success'}
							isInvalid={errors.email}
							errorMessage={errors.email?.message}
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
							color={errors.password ? 'danger' : 'success'}
							{...register('password')}
							isInvalid={errors.password}
							errorMessage={errors.password?.message}
						/>
						<div className="flex gap-2 justify-end">
							<Link href="/auth/recovery">
								<p className="text-sm font-montserrat font-normal text-blue-500">
									¿Olvidaste tu contraseña?
								</p>
							</Link>
						</div>
						<Button
							type="submit"
							variant="solid"
							size="lg"
							color="secondary"
							isLoading={isSubmitting}>
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
