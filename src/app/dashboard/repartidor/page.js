import HeaderDashBoard from '@/components/app/Header/HeaderDashBoard';
import React from 'react';
import {
	ArchiveBoxIcon,
	TruckIcon,
	UserIcon,
} from '@heroicons/react/24/outline';
import SectionsDashboard from '@/components/app/user/SectionsDashboard';

export default function RepartidorPage() {
	const options = [
		{
			title: 'Pedidos por Entregar',
			label: 'Revisa tus pedidos por entregar',
			color: 'green-500',
			icon: <TruckIcon className="w-10 h-10 text-green-700" />,
			url: '/dashboard/repartidor/orders',
		},
		{
			title: 'Perfil',
			label: 'Revisa tu perfil',
			color: 'blue-500',
			icon: <UserIcon className="w-10 h-10 text-blue-700" />,
			url: '/dashboard/repartidor/profile',
		},
		{
			title: 'Historial de Pedidos',
			label: 'Revisa los pedidos que has entregado',
			color: 'purple-500',
			icon: <ArchiveBoxIcon className="w-10 h-10 text-purple-700" />,
			url: '/dashboard/repartidor/orders/history',
		},
	];

	return (
		<div className="container mx-auto mt-10">
			<HeaderDashBoard />
			<SectionsDashboard options={options} />
		</div>
	);
}
