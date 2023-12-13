'use client';
import React from 'react';
import Image from 'next/image';
import { formatDate } from '@/utils/utils';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function CardOrderRepartidor({ item }) {
	console.log('📦 Ordenes', item);
	const router = useRouter();
	return (
		<div
			key={item.id}
			className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-12 my-4 md:items-center shadow-md p-10 rounded-sm dark:border dark:border-gray-800">
			<div className="max-w-[800px] flex flex-col lg:flex-row gap-8">
				<div className="flex flex-col">
					<span className="font-montserrat font-normal text-base">Orden</span>
					<span className="font-montserrat font-normal text-sm text-primary">
						{item.id}
					</span>
					<span className="font-montserrat font-normal text-base">
						Detalles
					</span>
					<span className="font-montserrat font-normal text-sm text-gray-500">
						{formatDate(item.orderedAt)}
					</span>
					<span className="font-montserrat font-normal text-sm text-gray-500">
						{formatDate(item.deliverDate)}
					</span>
				</div>
				<div className="flex flex-col">
					<span className="font-montserrat font-normal text-base">
						Destinatario
					</span>
					<span className="font-montserrat font-normal text-sm text-gray-500">
						{item.buyer.user.name}
					</span>
					<span className="font-montserrat font-normal text-sm text-gray-500">
						{item.buyer.user.lastName}
					</span>
					<span className="font-montserrat font-normal text-sm text-gray-500">
						{item.buyer.user.phoneNumber}
					</span>
				</div>
				<div className="flex flex-col">
					<span className="font-montserrat font-normal text-base">
						Direccion de Envio
					</span>
					{item.buyer.shippingAddresses.length > 0 ? (
						<div className="flex flex-col gap-1 font-montserrat font-normal text-sm text-gray-500">
							<p>{item.buyer.shippingAddresses[0].street}</p>
							<p>
								{item.buyer.shippingAddresses[0].city}{' '}
								{item.buyer.shippingAddresses[0].state}{' '}
								{item.buyer.shippingAddresses[0].country}
							</p>

							<p>{item.buyer.shippingAddresses[0].postalCode}</p>
						</div>
					) : (
						<span className="font-montserrat font-normal text-sm text-gray-500">
							No hay dirección de envío
						</span>
					)}
				</div>
				{/* <div className="flex flex-col">
					<span className="font-montserrat font-normal text-base">
						Fecha del Pedido
					</span>
					<span className="font-montserrat font-normal text-sm text-secondary">
						{formatDate(item.Order.orderedAt)}
					</span>
					<span className="font-montserrat font-normal text-base">
						Estatus del Pedido
					</span>
					<span className="font-montserrat font-normal text-sm text-gray-400">
						{item.Order.orderStatus}
					</span>
				</div> */}
			</div>
			<Button
				variant="faded"
				size="lg"
				color="success"
				onClick={() => router.push(`/dashboard/vendedor/orders/${item.id}`)}>
				Acciones
			</Button>
		</div>
	);
}
