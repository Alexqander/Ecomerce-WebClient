import { useAuthContext } from '@/context/authContext';
import { LinksDashboard, LinksNavBar } from '@/config/rolesRoutes';
import {
	BuildingStorefrontIcon,
	HomeIcon,
	QueueListIcon,
	RocketLaunchIcon,
} from '@heroicons/react/24/outline';
export const useDashboardOptions = () => {
	const { user } = useAuthContext();
	const { roleId } = user;
	const links = LinksDashboard[roleId];
	let menuLinks = LinksNavBar[roleId];
	if (menuLinks === undefined) {
		menuLinks = [
			{
				label: 'Inicio',
				path: '/',
				icon: <HomeIcon className="h-5 w-5" />,
			},
			{
				label: 'Tienda',
				path: '/shop',
				icon: <BuildingStorefrontIcon className="h-5 w-5" />,
			},

			{
				label: 'Categorias',
				path: '/shop/categories',
				icon: <QueueListIcon className="h-5 w-5" />,
			},
			{
				label: 'Iniciar sesion',
				path: '/auth',
				icon: <RocketLaunchIcon className="h-5 w-5" />,
			},
		];
	}
	return { links, menuLinks };
};
