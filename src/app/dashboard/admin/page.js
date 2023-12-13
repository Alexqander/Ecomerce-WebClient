import HeaderDashBoard from '@/components/app/Header/HeaderDashBoard';
import ChartsAdmin from '@/components/app/admin/ChartsAdmin';
import SectionStats from '@/components/app/admin/SectionStats';
import SectionData from '@/components/app/admin/sections/SectionData';
import SectionsDashboard from '@/components/app/user/SectionsDashboard';
import ResumeStats from '@/components/app/vendedor/dashboard/ResumeStats';
import {
	HeartIcon,
	TruckIcon,
	BuildingLibraryIcon,
	UsersIcon,
	ListBulletIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

export default function AdminPage() {
	const options = [
		{
			title: 'Ventas',
			data: '32',
			color: 'green',
			icon: <TruckIcon className="w-10 h-10 text-green-700" />,
			url: '/dashboard/user/orders',
		},
		{
			title: 'Productos',
			data: '3',
			color: 'indigo',
			icon: <ListBulletIcon className="w-10 h-10 text-indigo-700" />,
			url: '/dashboard/user/orders',
		},
		{
			title: 'Usuarios ',
			data: '32',
			color: 'cyan',
			icon: <UsersIcon className="w-10 h-10 text-cyan-700" />,
			url: '/dashboard/user/orders',
		},
		{
			title: 'Ordenes',
			data: '32',
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
