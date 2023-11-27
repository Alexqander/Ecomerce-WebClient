import React from 'react';
import NotUserPage from '@/components/app/shop/checkout/NotUserPage';
import { cookies } from 'next/headers';
import { buyerProfileService } from '@/services/buyerProfile.service';
import DetailsCheckOut from '@/components/app/shop/checkout/DetailsCheckOut';

async function getInfoCart(idCart) {
	const cookiesStore = cookies();
	const token = cookiesStore.get('NEXT_JS_AUTH_TOKENS')
		? JSON.parse(cookiesStore.get('NEXT_JS_AUTH_TOKENS').value)
		: null;
	try {
		const response = await buyerProfileService.getCartDetail(
			idCart,
			token.token
		);
		const { data } = response;
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
}

export default async function CheckOutPage({ params }) {
	const cookiesStore = cookies();
	const isLogged = cookiesStore.get('NEXT_JS_AUTH_TOKENS') ? true : false;
	const cart = await getInfoCart(params.id);
	return (
		<div className="px-10 mt-10 md:px-0">
			{isLogged ? <DetailsCheckOut cart={cart.data} /> : <NotUserPage />}
		</div>
	);
}
