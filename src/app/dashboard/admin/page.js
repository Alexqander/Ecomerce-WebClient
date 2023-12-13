import HeaderDashBoard from '@/components/app/Header/HeaderDashBoard';
import ChartsAdmin from '@/components/app/admin/ChartsAdmin';
import SectionStats from '@/components/app/admin/SectionStats';
import SectionData from '@/components/app/admin/sections/SectionData';
import SectionsDashboard from '@/components/app/user/SectionsDashboard';
import ResumeStats from '@/components/app/vendedor/dashboard/ResumeStats';
import { AdminService } from '@/services/admin.service';
import {
	HeartIcon,
	TruckIcon,
	BuildingLibraryIcon,
	UsersIcon,
	ListBulletIcon,
} from '@heroicons/react/24/outline';
import { cookies } from 'next/headers';
import React from 'react';

async function getDashboardStats() {
	const cookiesStore = cookies();
	const token = cookiesStore.get('NEXT_JS_AUTH_TOKENS')
		? JSON.parse(cookiesStore.get('NEXT_JS_AUTH_TOKENS').value)
		: null;

	const { data } = await AdminService.getStats(token.token);
	const stats = data;
	return stats;
}

export default async function AdminPage() {
	const stats = await getDashboardStats();
	console.log('✅Info stats', stats);
	const options = [
		{
			title: 'Ventas',
			data: stats.data.transactions,
			color: 'green',
			icon: <TruckIcon className="w-10 h-10 text-green-700" />,
			url: '/dashboard/user/orders',
		},
		{
			title: 'Productos',
			data: stats.data.products,
			color: 'indigo',
			icon: <ListBulletIcon className="w-10 h-10 text-indigo-700" />,
			url: '/dashboard/user/orders',
		},
		{
			title: 'Usuarios ',
			data: stats.data.users,
			color: 'cyan',
			icon: <UsersIcon className="w-10 h-10 text-cyan-700" />,
			url: '/dashboard/user/orders',
		},
		{
			title: 'Ordenes',
			data: stats.data.orders,
			color: 'blue',
			icon: <TruckIcon className="w-10 h-10 text-blue-700" />,
			url: '/dashboard/user/orders',
		},
	];
	return (
		<div className="container mx-auto mt-10">
			<HeaderDashBoard />
			<SectionStats options={options} />
			<SectionData />
		</div>
	);
}
