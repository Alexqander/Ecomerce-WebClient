import HeaderDashBoard from '@/components/app/Header/HeaderDashBoard';
import SectionsDashboard from '@/components/app/user/SectionsDashboard';
import { ProfileSellerService } from '@/services/profileSeller.service';
import {
	HeartIcon,
	TruckIcon,
	BuildingLibraryIcon,
} from '@heroicons/react/24/outline';
import { cookies } from 'next/headers';
import React from 'react';

async function getStats() {
	const cookiesStore = cookies();
	const token = cookiesStore.get('NEXT_JS_AUTH_TOKENS')
		? JSON.parse(cookiesStore.get('NEXT_JS_AUTH_TOKENS').value)
		: null;
	const userData = cookiesStore.get('user')
		? JSON.parse(cookiesStore.get('user').value)
		: null;
	try {
		const { data } = await ProfileSellerService.getStatsSeller(
			token.token,
			userData.sellerProfile.id
		);
		const stats = data.data;
		return stats;
	} catch (error) {
		console.log(error);
	}
}

export default async function VendedorPage() {
	const stats = await getStats();

	const options = [
		{
			title: 'Pedidos',
			label: stats.totalOrders,
			color: 'green-500',
			textStyle: 'text-xl',
			icon: <TruckIcon className="w-10 h-10 text-green-700" />,
			url: '/dashboard/vendedor/orders',
		},
		{
			title: 'Productos',
			label: stats.totalProducts,
			color: 'blue-500',
			textStyle: 'text-xl',
			icon: <BuildingLibraryIcon className="w-10 h-10 text-blue-700" />,
			url: '/dashboard/vendedor/products',
		},
		{
			title: 'Reviews',
			label: stats.totalReviews,
			color: 'purple-500',
			textStyle: 'text-xl',
			icon: <HeartIcon className="w-10 h-10 text-purple-700" />,
			url: '/dashboard/user/reviews',
		},
	];
	return (
		<div className="container mx-auto mt-10">
			<HeaderDashBoard />
			<SectionsDashboard options={options} />
		</div>
	);
}
