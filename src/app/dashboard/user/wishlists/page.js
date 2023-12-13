import HeaderDashBoard from '@/components/app/Header/HeaderDashBoard';
import WishList from '@/components/app/lists/WishList';
import { buyerProfileService } from '@/services/buyerProfile.service';
import { cookies } from 'next/headers';
import React from 'react';

async function getWishLists() {
	const cookiesStore = cookies();
	const token = cookiesStore.get('NEXT_JS_AUTH_TOKENS')
		? JSON.parse(cookiesStore.get('NEXT_JS_AUTH_TOKENS').value)
		: null;
	console.log(token);
	const user = cookiesStore.get('user')
		? JSON.parse(cookiesStore.get('user').value)
		: null;
	try {
		const response = await buyerProfileService.getWishList(
			user.buyerProfile.id,
			token.token
		);
		const { data } = response;
		return data;
	} catch (error) {
		console.log(error);
	}
}

export default async function WishListsPage() {
	const wishLists = await getWishLists();
	return (
		<div className="container mx-auto mt-10">
			<HeaderDashBoard title="📒 Wishlists" />
			<WishList WishList={wishLists.data} />
		</div>
	);
}
