import HeaderDashBoard from '@/components/app/Header/HeaderDashBoard';
import React from 'react';
import {
	HeartIcon,
	TruckIcon,
	BuildingLibraryIcon,
} from '@heroicons/react/24/outline';
import SectionsDashboard from '@/components/app/user/SectionsDashboard';

export default function UserPage() {
	const options = [
		{
			title: 'Ultimos Pedidos',
			label: 'Revisa el estado de tus pedidos',
			color: 'green-500',
			icon: <TruckIcon className="w-10 h-10 text-green-700" />,
			url: '/dashboard/user/orders',
		},
		{
			title: 'Transacciones',
			label: 'Revisa tu historial de transacciones',
			color: 'blue-500',
			icon: <BuildingLibraryIcon className="w-10 h-10 text-blue-700" />,
			url: '/dashboard/user/transactions',
		},
		{
			title: 'Lista de Deseos',
			label: 'Revisa tu lista de deseos',
			color: 'purple-500',
			icon: <HeartIcon className="w-10 h-10 text-purple-700" />,
			url: '/dashboard/user/wishlists',
		},
	];

	return (
		<div className="container mx-auto mt-10">
			<HeaderDashBoard />
			<SectionsDashboard options={options} />
		</div>
	);
}
