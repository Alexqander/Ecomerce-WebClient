import HeaderDashBoard from '@/components/app/Header/HeaderDashBoard';
import OrderSellerList from '@/components/app/lists/OrderSellerList';
import { ProfileSellerService } from '@/services/profileSeller.service';
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
		const response = await ProfileSellerService.getOrdersPending(
			token.token,
			user.sellerProfile.id
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
			<HeaderDashBoard title=" 📦 Pedidos " />
			<OrderSellerList orderItems={orders.data} />
		</div>
	);
}
