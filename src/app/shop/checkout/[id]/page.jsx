'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/authContext';
import { Button } from '@nextui-org/button';
import PleaseLoginImage from '@/components/icons/shop/checkOut/PleaseLoginImage';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
export default function CheckOutPage({ params }) {
	const router = useRouter();
	const { isLogged, user } = useAuthContext();
	return (
		<div className="px-10 mt-36 md:px-0">
			{isLogged ? (
				<> Id del Carrito de compras : {params.id} </>
			) : (
				<div className="flex flex-col gap-10 items-center justify-center">
					<PleaseLoginImage />
					<h2 className="font-montserrat font-semibold text-3xl">
						Debes iniciar sesion para poder comprar
					</h2>
					<Button
						variant="flat"
						size="lg"
						color="secondary"
						onClick={() => router.push('/auth')}>
						Iniciar sesion
					</Button>
					<Button
						startContent={<ArrowLeftIcon className="h-5 w-5" />}
						variant="flat"
						size="lg"
						color="primary"
						onClick={() => router.back()}>
						Regresar a la tienda
					</Button>
				</div>
			)}
		</div>
	);
}
