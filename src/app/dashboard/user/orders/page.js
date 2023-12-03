import HeaderDashBoard from '@/components/app/Header/HeaderDashBoard';
import OrdersUserList from '@/components/app/lists/OrdersUserList';
import NotOrders from '@/components/app/orders/NotOrders';
import { buyerProfileService } from '@/services/buyerProfile.service';
import { cookies } from 'next/headers';
import React from 'react';

async function getUserOrders() {
	const cookiesStore = cookies();
	const token = cookiesStore.get('NEXT_JS_AUTH_TOKENS')
		? JSON.parse(cookiesStore.get('NEXT_JS_AUTH_TOKENS').value)
		: null;
	const user = cookiesStore.get('user')
		? JSON.parse(cookiesStore.get('user').value)
		: null;
	try {
		const response = await buyerProfileService.getOrders(
			user.buyerProfile.id,
			token.token
		);
		const { data } = response;
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
}

export default async function OrdersPage() {
	const orders = await getUserOrders();
	return (
		<div className="container mx-auto mt-10">
			<HeaderDashBoard title="📦 Ordenes" />
			{orders.data.length === 0 ? (
				<NotOrders />
			) : (
				<OrdersUserList orders={orders.data} />
			)}
		</div>
	);
}
