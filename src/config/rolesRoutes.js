import {
	AdjustmentsHorizontalIcon,
	ArchiveBoxIcon,
	ArrowTrendingUpIcon,
	CreditCardIcon,
	PresentationChartBarIcon,
	PresentationChartLineIcon,
	RectangleStackIcon,
	UserCircleIcon,
	UserGroupIcon,
	ShoppingBagIcon,
	TagIcon,
	ReceiptPercentIcon,
	TruckIcon,
	Cog6ToothIcon,
	UserIcon,
} from '@heroicons/react/24/outline';

export const directRoles = {
	1: '/dashboard/admin',
	2: '/dashboard/vendedor',
	3: '/dashboard/repartidor',
	4: '/dashboard/user',
};

export const LinksDashboard = {
	1: [
		{
			grupo: {
				name: 'Dashboard',
				routes: [
					{
						label: 'Dashboard',
						path: '/dashboard/admin',
						icon: <PresentationChartLineIcon className="h-5 w-5" />,
					},
					{
						label: 'Analiticas',
						path: '/dashboard/admin/analytics',
						icon: <ArrowTrendingUpIcon className="h-5 w-5" />,
					},
					{
						label: 'Usuarios',
						path: '/dashboard/admin/users',
						icon: <UserGroupIcon className="h-5 w-5" />,
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
						path: '/dashboard/admin/products',
						icon: <ShoppingBagIcon className="h-5 w-5" />,
					},
					{
						label: 'Categorias',
						path: '/dashboard/admin/categories',
						icon: <TagIcon className="h-5 w-5" />,
					},
				],
			},
		},
		{
			grupo: {
				name: 'VENTAS',
				routes: [
					{
						label: 'Ventas',
						path: '/dashboard/admin/sales',
						icon: <CreditCardIcon className="h-5 w-5" />,
					},
					{
						label: 'Pedidos',
						path: '/dashboard/orders',
						icon: <TruckIcon className="h-5 w-5" />,
					},
					{
						label: 'Transacciones',
						path: '/dashboard/admin/transactions',
						icon: <ReceiptPercentIcon className="h-5 w-5" />,
					},
				],
			},
			grupo: {
				name: 'CONFIGURACION',
				routes: [
					{
						label: 'Configuracion',
						path: '/dashboard/admin/settings',
						icon: <Cog6ToothIcon className="h-5 w-5" />,
					},
					{
						label: 'Perfil',
						path: '/dashboard/admin/profile',
						icon: <UserIcon className="h-5 w-5" />,
					},
				],
			},
		},
	],

	2: [
		{
			grupo: {
				name: 'MI NEGOCIO',
				routes: [
					{
						label: 'Dashboard',
						path: '/dashboard/vendedor',
						icon: <PresentationChartLineIcon className="h-5 w-5" />,
					},
					{
						label: 'Perfil',
						path: '/dashboard/vendedor/profile',
						icon: <UserIcon className="h-5 w-5" />,
					},
				],
			},
		},
		{
			grupo: {
				name: 'Administracion',
				routes: [
					{
						label: 'Productos',
						path: '/dashboard/vendedor/products',
						icon: <RectangleStackIcon className="h-5 w-5" />,
					},
					{
						label: 'Inventario',
						path: '/dashboard/inventario',
						icon: <ArchiveBoxIcon className="h-5 w-5" />,
					},
					{
						label: 'Pedidos',
						path: '/dashboard/vendedor/orders',
						icon: <UserCircleIcon className="h-5 w-5" />,
					},
				],
			},
		},
		{
			grupo: {
				name: 'Configuracion',
				routes: [
					{
						label: 'Configuracion',
						path: '/dashboard/vendedor/settings',
						icon: <AdjustmentsHorizontalIcon className="h-5 w-5" />,
					},
				],
			},
		},
	],
	3: [
		{
			grupo: {
				name: 'DASHBOARD',
				routes: [
					{
						label: 'Dashboard',
						path: '/dashboard/repartidor',
						icon: <PresentationChartLineIcon className="h-5 w-5" />,
					},
					{
						label: 'Perfil',
						path: '/dashboard/repartidor/profile',
						icon: <UserIcon className="h-5 w-5" />,
					},
					{
						label: 'Configuracion',
						path: '/dashboard/repartidor/settings',
						icon: <Cog6ToothIcon className="h-5 w-5" />,
					},
				],
			},
		},
		{
			grupo: {
				name: 'ACTIVIDAD',
				routes: [
					{
						label: 'Envios',
						path: '/dashboard/repartidor/orders',
						icon: <PresentationChartBarIcon className="h-5 w-5" />,
					},
					{
						label: 'Historial',
						path: '/dashboard/repartidor/orders/history',
						icon: <ArchiveBoxIcon className="h-5 w-5" />,
					},
				],
			},
		},
	],
	4: [
		{
			grupo: {
				name: 'Mi cuenta',
				routes: [
					{
						label: 'Dashboard',
						path: '/dashboard/user',
						icon: <PresentationChartLineIcon className="h-5 w-5" />,
					},
					{
						label: 'Perfil',
						path: '/dashboard/user/profile',
						icon: <UserIcon className="h-5 w-5" />,
					},
				],
			},
		},
		{
			grupo: {
				name: 'Actividad',
				routes: [
					{
						label: 'Ordenes',
						path: '/dashboard/user/orders',
						icon: <TruckIcon className="h-5 w-5" />,
					},
					{
						label: 'Wishlists',
						path: '/dashboard/user/wishlists',
						icon: <CreditCardIcon className="h-5 w-5" />,
					},
				],
			},
		},
	],
};

export const LinksNavBar = {
	1: [
		{
			label: 'Dashboard',
			path: '/dashboard/admin',
			icon: <PresentationChartLineIcon className="h-5 w-5" />,
		},
		{
			label: 'Analiticas',
			path: '/dashboard/admin/analytics',
			icon: <ArrowTrendingUpIcon className="h-5 w-5" />,
		},
		{
			label: 'Usuarios',
			path: '/dashboard/admin/users',
			icon: <UserGroupIcon className="h-5 w-5" />,
		},
		{
			label: 'Productos',
			path: '/dashboard/admin/products',
			icon: <ShoppingBagIcon className="h-5 w-5" />,
		},
		{
			label: 'Categorias',
			path: '/dashboard/admin/categories',
			icon: <TagIcon className="h-5 w-5" />,
		},
		{
			label: 'Ventas',
			path: '/dashboard/admin/sales',
			icon: <CreditCardIcon className="h-5 w-5" />,
		},
		{
			label: 'Pedidos',
			path: '/dashboard/orders',
			icon: <TruckIcon className="h-5 w-5" />,
		},
		{
			label: 'Transacciones',
			path: '/dashboard/admin/transactions',
			icon: <ReceiptPercentIcon className="h-5 w-5" />,
		},
		{
			label: 'Configuracion',
			path: '/dashboard/admin/settings',
			icon: <Cog6ToothIcon className="h-5 w-5" />,
		},
		{
			label: 'Perfil',
			path: '/dashboard/admin/profile',
			icon: <UserIcon className="h-5 w-5" />,
		},
	],

	2: [
		{
			label: 'Dashboard',
			path: '/dashboard/vendedor',
			icon: <PresentationChartLineIcon className="h-5 w-5" />,
		},
		{
			label: 'Perfil',
			path: '/dashboard/vendedor/profile',
			icon: <UserIcon className="h-5 w-5" />,
		},
		{
			label: 'Productos',
			path: '/dashboard/vendedor/products',
			icon: <RectangleStackIcon className="h-5 w-5" />,
		},
		{
			label: 'Inventario',
			path: '/dashboard/inventario',
			icon: <ArchiveBoxIcon className="h-5 w-5" />,
		},
		{
			label: 'Pedidos',
			path: '/dashboard/vendedor/orders',
			icon: <UserCircleIcon className="h-5 w-5" />,
		},
		{
			label: 'Configuracion',
			path: '/dashboard/vendedor/settings',
			icon: <AdjustmentsHorizontalIcon className="h-5 w-5" />,
		},
	],
	3: [
		{
			label: 'Dashboard',
			path: '/dashboard/repartidor',
			icon: <PresentationChartLineIcon className="h-5 w-5" />,
		},
		{
			label: 'Perfil',
			path: '/dashboard/repartidor/profile',
			icon: <UserIcon className="h-5 w-5" />,
		},
		{
			label: 'Configuracion',
			path: '/dashboard/repartidor/settings',
			icon: <Cog6ToothIcon className="h-5 w-5" />,
		},
		{
			label: 'Envios',
			path: '/dashboard/repartidor/orders',
			icon: <PresentationChartBarIcon className="h-5 w-5" />,
		},
		{
			label: 'Historial',
			path: '/dashboard/repartidor/orders/history',
			icon: <ArchiveBoxIcon className="h-5 w-5" />,
		},
	],
	4: [
		{
			label: 'Dashboard',
			path: '/dashboard/user',
			icon: <PresentationChartLineIcon className="h-5 w-5" />,
		},
		{
			label: 'Perfil',
			path: '/dashboard/user/profile',
			icon: <UserIcon className="h-5 w-5" />,
		},

		{
			label: 'Ordenes',
			path: '/dashboard/user/orders',
			icon: <TruckIcon className="h-5 w-5" />,
		},
		{
			label: 'Wishlists',
			path: '/dashboard/user/wishlists',
			icon: <CreditCardIcon className="h-5 w-5" />,
		},
	],
};
