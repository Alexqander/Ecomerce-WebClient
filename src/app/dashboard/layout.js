import SideBarEcomerce from '@/components/navigation/sideBar/SideBarEcomerce';
import React from 'react';
import {
	PresentationChartLineIcon,
	PresentationChartBarIcon,
	UserGroupIcon,
	QueueListIcon,
	WrenchIcon,
	RectangleStackIcon,
	BookOpenIcon,
	TruckIcon,
	ArchiveBoxIcon,
	Cog6ToothIcon,
	AdjustmentsHorizontalIcon,
	ListBulletIcon,
	WindowIcon,
} from '@heroicons/react/24/outline';

export default function layout({ children }) {
	const links = [
		{
			grupo: {
				name: 'Dashboard',
				routes: [
					{
						label: 'Dashboard',
						path: '/dashboard',
						icon: <PresentationChartLineIcon className="h-5 w-5" />,
					},
					{
						label: 'Performance',
						path: '/dashboard/performance',
						icon: <PresentationChartBarIcon className="h-5 w-5" />,
					},
				],
			},
		},
		{
			grupo: {
				name: 'Gestion',
				routes: [
					{
						label: 'Usuarios',
						path: '/dashboard/users',
						icon: <UserGroupIcon className="h-5 w-5" />,
					},
					{
						label: 'Servicios',
						path: '/dashboard/servicios',
						icon: <QueueListIcon className="h-5 w-5" />,
					},
					{
						label: 'Tecnicos',
						path: '/dashboard/tecnicos',
						icon: <WrenchIcon className="h-5 w-5" />,
					},
					{
						label: 'Electrodomesticos',
						path: '/dashboard/electrodomesticos',
						icon: <RectangleStackIcon className="h-5 w-5" />,
					},
				],
			},
		},
		{
			grupo: {
				name: 'Mercancia',
				routes: [
					{
						label: 'Catalogo',
						path: '/dashboard/catalogo',
						icon: <BookOpenIcon className="h-5 w-5" />,
					},
					{
						label: 'Provedores',
						path: '/dashboard/provedores',
						icon: <TruckIcon className="h-5 w-5" />,
					},
					{
						label: 'Historial',
						path: '/dashboard/historial',
						icon: <ArchiveBoxIcon className="h-5 w-5" />,
					},
				],
			},
		},
		{
			grupo: {
				name: 'Configuracion',
				routes: [
					{
						label: 'Cuenta',
						path: '/configuracion/account',
						icon: <Cog6ToothIcon className="h-5 w-5" />,
					},
					{
						label: 'Preferencias',
						path: '/configuracion/preferences',
						icon: <AdjustmentsHorizontalIcon className="h-5 w-5" />,
					},
					{
						label: 'Historial',
						path: '/configuracion/history',
						icon: <ListBulletIcon className="h-5 w-5" />,
					},
				],
			},
		},
	];

	return (
		<div className="flex h-scren">
			<SideBarEcomerce options={links} />
			<main className="container-fluid w-full ml-64 px-10">{children}</main>
		</div>
	);
}
