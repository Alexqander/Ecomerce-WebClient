'use client';
import ProgressBar from '@/components/app/loader/ProgressBar';
import LoadingImage from '@/components/icons/register/LoadingImage';
import { useAuthContext } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useEffect } from 'react';
import { directRoles } from '@/config/rolesRoutes';

export default function InitialPage() {
	const router = useRouter();
	const { user } = useAuthContext();
	const { roleId } = user;

	const tryLogin = async () => {
		router.push(directRoles[roleId]);
		toast.success(`Bienvenido ${user.name} ${user.lastName}`);
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
				<h2>....Un momento estamos configurando tu cuenta {user.name}</h2>
			</div>
		</section>
	);
}
