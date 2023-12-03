import HeaderDashBoard from '@/components/app/Header/HeaderDashBoard';
import OrderItemList from '@/components/app/lists/OrderItemList';
import { buyerProfileService } from '@/services/buyerProfile.service';
import Link from 'next/link';
import { cookies } from 'next/headers';
import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { formatDate } from '@/utils/utils';

async function getOrderDetails(orderId) {
	const cookiesStore = cookies();
	const token = cookiesStore.get('NEXT_JS_AUTH_TOKENS')
		? JSON.parse(cookiesStore.get('NEXT_JS_AUTH_TOKENS').value)
		: null;
	const user = cookiesStore.get('user')
		? JSON.parse(cookiesStore.get('user').value)
		: null;
	try {
		const response = await buyerProfileService.getOrder(orderId, token.token);
		const { data } = response;
		console.log('📦 Detalles del pedido', data);
		return data;
	} catch (error) {
		console.log(error);
	}
}

export default async function OrderDetailsPage({ params }) {
	const { id } = params;
	const order = await getOrderDetails(id);
	const totalOrder = order.data.orderItems.reduce((acc, item) => {
		return acc + item.price * item.quantity;
	}, 0);
	const address = order.data.buyer.shippingAddresses[0];
	console.log(order.data.orderItems);
	return (
		<div className="container mx-auto mt-10">
			<Link
				className="flex w-36 gap-3 items-center bg-primary-300 bg-opacity-50 px-5 py-2 rounded-lg mb-10 hover:bg-opacity-30 transition-all"
				href="/dashboard/user/orders">
				<ArrowLeftIcon className="w-5 h-5 text-primary" />
				<p className="font-montserrat font-normal text-base text-primary">
					Regresar
				</p>
			</Link>
			<HeaderDashBoard title="📦 Detalles de la Orden" />
			<p className="my-5 font-montserrat font-semibold text-base text-primary">
				{' '}
				{id}
			</p>
			<OrderItemList orderItems={order.data.orderItems} />
			<div className="flex justify-end">
				<p className="font-montserrat font-semibold text-xl text-primary">
					Total : ${totalOrder} MXN
				</p>
			</div>
			<div className="flex">
				<p className="font-montserrat font-semibold text-xl my-5">
					Informacion del Envio
				</p>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
				<div className="flex flex-col">
					<h4 className="font font-medium text-base mb-5">Direccion</h4>
					<div className="font-montserrat font-normal text-base text-gray-400">
						<p>{address.street}</p>
						<p>{address.city}</p>
						<p>{address.postalCode}</p>
					</div>
					<div className="flex gap-2 font-montserrat font-normal text-base text-gray-400">
						<p>{address.state}</p>
						<p>{address.country}</p>
					</div>
				</div>
				<div className="flex flex-col">
					<h4 className="font font-medium text-base">Detalles del envio</h4>
					<div className="my-5">
						<p className="font-montserrat font-semibold">Numero de guia</p>
						<p className="font-montserrat font-normal text-primary">
							{order.data.id}
						</p>
					</div>
					<div className="my-5">
						<p className="font-montserrat font-semibold">Fecha de creacion</p>
						<p className="font-montserrat font-normal text-secondary">
							{formatDate(order.data.orderedAt)}
						</p>
					</div>
					<div className="my-5">
						<p className="font-montserrat font-semibold">Estado del envio</p>
						<p className="font-montserrat font-normal text-secondary">
							{order.data.orderStatus}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
