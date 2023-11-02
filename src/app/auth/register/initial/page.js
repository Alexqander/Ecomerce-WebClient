'use client';
import ProgressBar from '@/components/app/loader/ProgressBar';
import LoadingImage from '@/components/icons/register/LoadingImage';
import { AuthService } from '@/services/auth.service';
import { useAuthContext } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useEffect } from 'react';
export default function InitialPage() {
	const { login } = useAuthContext();
	const router = useRouter();
	const dataUser = JSON.parse(localStorage.getItem('user'));
	const { email, password } = dataUser;
	const tryLogin = async () => {
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
			router.push('/dashboard');
			toast.success('Inicio de sesión exitoso');
		} catch (error) {
			toast.error('Error al iniciar sesión', 'intentelo mas tarde');
			router.push('/auth/');
		}
	};
	useEffect(() => {
		const timer = setTimeout(() => {
			tryLogin();
		}, 5000);
		return () => {
			clearTimeout(timer);
		};
	}, []);
	return (
		<section className="container-fluid w-full h-[calc(100vh-65px)] mx-auto flex items-center justify-center">
			<div className="">
				<LoadingImage />
				<ProgressBar />
				<h2>....Un momento estamos configurando tu cuenta</h2>
			</div>
		</section>
	);
}
