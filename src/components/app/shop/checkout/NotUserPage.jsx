import PleaseLoginImage from '@/components/icons/shop/checkOut/PleaseLoginImage';
import React from 'react';
import { Button } from '@nextui-org/button';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export default function NotUserPage() {
	const router = useRouter();
	return (
		<div className="flex flex-col gap-5 items-center justify-center">
			<PleaseLoginImage />
			<h2 className="font-montserrat font-semibold text-3xl">
				Debes iniciar sesion para poder comprar
			</h2>
			<div className="flex gap-5 justify-center items-center">
				<Button
					variant="flat"
					size="lg"
					color="secondary"
					onClick={() => router.push('/auth')}>
					Iniciar sesion
				</Button>
				ó
				<Button
					variant="flat"
					size="lg"
					color="success"
					onClick={() => router.push('/auth/register')}>
					Registrate ahora
				</Button>
			</div>
			<Button
				startContent={<ArrowLeftIcon className="h-5 w-5" />}
				variant="flat"
				size="lg"
				color="primary"
				onClick={() => router.back()}>
				Regresar a la tienda
			</Button>
		</div>
	);
}
