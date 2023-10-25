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
	CreditCardIcon,
	UserCircleIcon,
} from '@heroicons/react/24/outline';
import EcomerceLogo from '@/components/icons/brand/EcomerceLogo';

export default function layout({ children }) {
	const links = [
		{
			grupo: {
				name: 'Analiticas',
				routes: [
					{
						label: 'Dashboard',
						path: '/dashboard',
						icon: <PresentationChartLineIcon className="h-5 w-5" />,
					},
					{
						label: 'Ordenes',
						path: '/dashboard/ordenes',
						icon: <BookOpenIcon className="h-5 w-5" />,
					},
					{
						label: 'Clientes',
						path: '/dashboard/clientes',
						icon: <UserGroupIcon className="h-5 w-5" />,
					},
					{
						label: 'Categorias',
						path: '/dashboard/categorias',
						icon: <RectangleStackIcon className="h-5 w-5" />,
					},
					{
						label: 'Transacciones',
						path: '/dashboard/transacciones',
						icon: <CreditCardIcon class="h-5 w-5"/>,

					},
				],
			},
		},
		{
			grupo: {
				name: 'PRODUCTOS',
				routes: [
					{
						label: 'Productos',
						path: '/dashboard/productos',
						icon: <PresentationChartBarIcon className="h-5 w-5" />,
					},
					{
						label: 'Inventario',
						path: '/dashboard/inventario',
						icon: <ArchiveBoxIcon className="h-5 w-5" />,
					},
				],
			},
		},
		{
			grupo: {
				name: 'admin',
				routes: [
					{
						label: 'Administracion',
						path: '/dashboard/administracion',
						icon: <UserCircleIcon className="h-5 w-5" />,
					},
					{
						label: 'Roles',
						path: '/dashboard/roles',
						icon: <AdjustmentsHorizontalIcon className="h-5 w-5" />,
					},
				],
			},
		},
	];
	return (
		<div className="container-fluid h-scren">
			<SideBarEcomerce options={links} />
			{children}
		</div>
	);
}
