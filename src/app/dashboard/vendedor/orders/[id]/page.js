import HeaderDashBoard from '@/components/app/Header/HeaderDashBoard';
import FormPedido from '@/components/app/vendedor/forms/FormPedido';
import { orderService } from '@/services/order.service';
import { cookies } from 'next/headers';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
async function getOrderItem(itemId) {
	const cookiesStore = cookies();
	const token = cookiesStore.get('NEXT_JS_AUTH_TOKENS')
		? JSON.parse(cookiesStore.get('NEXT_JS_AUTH_TOKENS').value)
		: null;
	const user = cookiesStore.get('user')
		? JSON.parse(cookiesStore.get('user').value)
		: null;
	try {
		const response = await orderService.getOrderItem(token.token, itemId);
		const { data } = response;
		return data;
	} catch (error) {
		console.log(error);
	}
}

export default async function page({ params }) {
	const orderItem = await getOrderItem(params.id);
	return (
		<div className="container mx-auto mt-10">
			<Link
				className="flex w-36 gap-3 items-center bg-primary-300 bg-opacity-50 px-5 py-2 rounded-lg mb-10 hover:bg-opacity-30 transition-all"
				href="/dashboard/vendedor/orders">
				<ArrowLeftIcon className="w-5 h-5 text-primary" />
				<p className="font-montserrat font-normal text-base text-primary">
					Regresar
				</p>
			</Link>
			<HeaderDashBoard title=" 📦 Acciones del Pedido" />
			<h4 className="font-montserrat font-semibold text-lg text-primary">
				{' '}
				{params.id}{' '}
			</h4>
			<div className="flex flex-col mt-10">
				<h4 className="font-montserrat font-semibold text-lg">
					Enviar Producto
				</h4>
				<div className="flex my-10 gap-5">
					<div className="w-44 h-44">
						<Image
							src={orderItem.data.Product.Images[0].url}
							width={160}
							height={160}
							alt={orderItem.data.Product.id}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<h4 className="font-montserrat font-bold text-lg">
							Detalles del Producto
						</h4>
						<span className="font-montserrat font-medium text-gray-500">
							{orderItem.data.Product.name}
						</span>
						<span className="font-montserrat font-medium">
							$ {orderItem.data.Product.price}
						</span>
						<span className="font-montserrat font-medium text-base text-primary">
							Cantidad
						</span>
						<span className="font-montserrat font-medium">
							{orderItem.data.quantity}
						</span>
						<span className="font-montserrat font-medium text-base text-primary">
							Pedido
						</span>
						<span className="font-montserrat font-semibold text-base text-gray-500">
							{orderItem.data.Order.id}
						</span>
					</div>
				</div>
				<FormPedido idOrder={orderItem.data.Order.id} />
			</div>
		</div>
	);
}
