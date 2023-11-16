import { useAuthContext } from '@/context/authContext';
import { LinksDashboard, LinksNavBar } from '@/config/rolesRoutes';
export const useDashboardOptions = () => {
	const { user } = useAuthContext();
	const { roleId } = user;
	const links = LinksDashboard[roleId];
	const menuLinks = LinksNavBar[roleId];
	return { links, menuLinks };
};
