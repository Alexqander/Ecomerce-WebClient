import HeaderDashBoard from '@/components/app/Header/HeaderDashBoard';
import OrdersRepartidorList from '@/components/app/lists/OrdersRepartidorList';
import { repartidorService } from '@/services/repartidor.service';
import { cookies } from 'next/headers';
import React from 'react';

async function getSellerOrders() {
	const cookiesStore = cookies();
	const token = cookiesStore.get('NEXT_JS_AUTH_TOKENS')
		? JSON.parse(cookiesStore.get('NEXT_JS_AUTH_TOKENS').value)
		: null;
	const user = cookiesStore.get('user')
		? JSON.parse(cookiesStore.get('user').value)
		: null;
	try {
		const response = await repartidorService.getOrdersToDeliver(
			token.token,
			user.courierProfile.id
		);
		const { data } = response;
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
}

export default async function OrdersPage() {
	const orders = await getSellerOrders();
	return (
		<div className="container mx-auto mt-10">
			<HeaderDashBoard title="📦 Pedidos por repartir" />
			<OrdersRepartidorList orders={orders.data} />
		</div>
	);
}
