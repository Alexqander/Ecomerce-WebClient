'use client';
import React from 'react';
import Image from 'next/image';
import { formatDate } from '@/utils/utils';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function CardOrderSeller({ item }) {
	const router = useRouter();
	return (
		<div
			key={item.id}
			className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-12 my-4 md:items-center shadow-md p-10 rounded-sm dark:border dark:border-gray-800">
			<div className="flex gap-10">
				<Image
					src={item.Product.Images[0].url}
					alt={item.Product.id}
					width={100}
					height={100}
					style={{ objectFit: 'contain', borderRadius: '5px' }}
				/>
				<div className="flex flex-col max-w-[430px]">
					<span className="font-montserrat font-semibold">
						{item.Product.name}
					</span>
					<div className="flex flex-col">
						<span className="font-montserrat font-semibold">Precio</span>
						<span className="font-montserrat font-normal text-success my-2">
							${item.Product.price}.00 MXN
						</span>
					</div>
					<div className="flex flex-col">
						<span className="font-montserrat font-semibold">Cantidad</span>
						<span className="font-montserrat font-normal text-success">
							{item.quantity} PZA
						</span>
					</div>
				</div>
			</div>
			<div className="max-w-[800px] flex flex-col lg:flex-row gap-8">
				<div className="flex flex-col">
					<span className="font-montserrat font-normal text-base">
						Detalles del Envio
					</span>
					<span className="font-montserrat font-normal text-sm text-primary">
						{item.Order.id}
					</span>
				</div>
				<div className="flex flex-col">
					<span className="font-montserrat font-normal text-base">
						Destinatario
					</span>
					<span className="font-montserrat font-normal text-sm text-gray-500">
						{item.Order.buyer.user.name} {item.Order.buyer.user.lastName}
					</span>
					<span className="font-montserrat font-normal text-sm text-gray-500">
						{item.Order.buyer.user.phoneNumber}
					</span>

					{item.Order.buyer.shippingAddresses.length > 0 ? (
						<div className="flex flex-col gap-1 font-montserrat font-normal text-sm text-gray-500">
							<p>{item.Order.buyer.shippingAddresses[0].street}</p>
							<p>
								{item.Order.buyer.shippingAddresses[0].city}{' '}
								{item.Order.buyer.shippingAddresses[0].state}{' '}
								{item.Order.buyer.shippingAddresses[0].country}
							</p>

							<p>{item.Order.buyer.shippingAddresses[0].postalCode}</p>
						</div>
					) : (
						<span className="font-montserrat font-normal text-sm text-gray-500">
							No hay dirección de envío
						</span>
					)}
				</div>
				<div className="flex flex-col">
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
				</div>
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
