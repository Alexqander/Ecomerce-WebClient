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

export default function layout({ children }) {
	const links = {
		1: {
			admin: [
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
								icon: <CreditCardIcon className="h-5 w-5" />,
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
			],
		},
		2: {
			vendedor: [],
		},
		3: {
			usuario: [
				{
					grupo: {
						name: 'Mi cuenta',
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
								icon: <CreditCardIcon className="h-5 w-5" />,
							},
						],
					},
				},
				{
					grupo: {
						name: 'Mis pedidos',
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
						name: 'Mis listas',
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
			],
		},
	};

	const linksAdmin = [
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
						icon: <CreditCardIcon className="h-5 w-5" />,
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

	const linksVendedor = [
		{
			grupo: {
				name: 'Mi negocio',
				routes: [
					{
						label: 'Configuracion',
						path: '/dashboard',
						icon: <PresentationChartLineIcon className="h-5 w-5" />,
					},
					{
						label: 'Paqueterias',
						path: '/dashboard/ordenes',
						icon: <BookOpenIcon className="h-5 w-5" />,
					},
					{
						label: 'Transacciones',
						path: '/dashboard/clientes',
						icon: <UserGroupIcon className="h-5 w-5" />,
					},
					{
						label: 'Ingresos',
						path: '/dashboard/categorias',
						icon: <RectangleStackIcon className="h-5 w-5" />,
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
				name: 'Pedidos',
				routes: [
					{
						label: 'Historial',
						path: '/dashboard/administracion',
						icon: <UserCircleIcon className="h-5 w-5" />,
					},
					{
						label: 'Nuevo pedidos',
						path: '/dashboard/roles',
						icon: <AdjustmentsHorizontalIcon className="h-5 w-5" />,
					},
				],
			},
		},
	];
	const linksUsuario = [
		{
			grupo: {
				name: 'Mi cuenta',
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
						icon: <CreditCardIcon className="h-5 w-5" />,
					},
				],
			},
		},
		{
			grupo: {
				name: 'Mis pedidos',
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
				name: 'Mis listas',
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
		<div className="flex h-scren">
			<SideBarEcomerce options={linksAdmin} />
			<main className="container-fluid w-full ml-64 px-10">{children}</main>
		</div>
	);
}
