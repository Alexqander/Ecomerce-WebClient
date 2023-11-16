'use client';
import React, { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	DropdownItem,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	Avatar,
	Button,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from '@nextui-org/react';

import EcomerceLogo from '../icons/brand/EcomerceLogo';
import ThemeSwitch from '../app/ThemeSwitch';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/authContext';
import { AuthService } from '@/services/auth.service';
import Cookies from 'js-cookie';
import { toast } from 'sonner';
import { directRoles } from '@/config/rolesRoutes';
import ShoppingCart from '../app/shop/ShoppingCart/ShoppingCart';
import { getInitials } from '@/utils/utils';
import { useDashboardOptions } from './LinksDashboard';
export default function NavBarEcomerce() {
	const { menuLinks } = useDashboardOptions();
	const menuItemsUser = ['Mi perfil', 'Configuracion', 'Compras', 'Ventas'];

	const menuItemsAdmin = [
		'Dashboard',
		'Usuarios',
		'Productos',
		'Ventas',
		'Vendedores',
	];

	const menuItemsVendor = [
		'Mi perfil',
		'Configuracion',
		'Ventas',
		'Productos',
		'Envios',
	];

	const menuItemsGuest = ['Inicio', 'Productos', 'Vender', 'Iniciar sesion'];

	const [menuItems, setMenuItems] = useState(menuLinks);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { isLogged, logout, user } = useAuthContext();
	console.log(user);
	const { roleId } = user;
	const router = useRouter();
	const handleLogOut = async () => {
		try {
			const authtoken = JSON.parse(Cookies.get('NEXT_JS_AUTH_TOKENS'));
			const data = await AuthService.logOut(authtoken.token);
			console.log(data);
			logout();
			toast.success('Sesion cerrada correctamente');
			router.push('/auth');
		} catch (error) {
			if (error.response.status === 401) {
				toast.error('Sesion expirada');
				logout();
				router.push('/auth');
			} else {
				console.log(error.response.status);
				toast.error('Error al cerrar sesion');
			}
		}
	};

	return (
		<Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				/>
			</NavbarContent>
			<NavbarContent justify="start">
				<NavbarBrand className="mr-4 gap-2 py-2">
					<Link color="foreground" href="/">
						<EcomerceLogo width="50px" height="50px" />
						<div className="flex flex-col justify-start">
							<div className="flex flex-row">
								<p className="font-montserrat font-semibold text-[16px]">
									Fast
								</p>
								<p className="font-extralight text-[16px] ">Shop</p>
							</div>
							<p className="text-center text-xs">Fast and Easy</p>
						</div>
					</Link>
				</NavbarBrand>
				<NavbarContent className="hidden sm:flex gap-3">
					<NavbarItem>
						<Link color="foreground" href="/">
							Inicio
						</Link>
					</NavbarItem>
					<NavbarItem isActive>
						<Link href="/shop" aria-current="page" className="text-refgold-600">
							Tienda
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" href="/shop/categories">
							Categorias
						</Link>
					</NavbarItem>
				</NavbarContent>
			</NavbarContent>

			<NavbarContent as="div" className="items-center" justify="end">
				<ThemeSwitch />
				{isLogged ? (
					<>
						<Dropdown placement="bottom-end">
							<DropdownTrigger>
								<Avatar
									isBordered
									as="button"
									className="transition-transform"
									color="secondary"
									src={user?.profilePicture}
									name={getInitials(user?.name, user?.lastName)}
									size="sm"
								/>
							</DropdownTrigger>
							<DropdownMenu aria-label="Profile Actions" variant="flat">
								<DropdownItem key="profile" className="h-14 gap-2">
									<p className="font-semibold">Sesion iniciada con</p>
									<p className="font-semibold">{user.email}</p>
								</DropdownItem>
								<DropdownItem key="perfil">
									<Link href={`${directRoles[roleId]}/profile`}>Mi perfil</Link>
								</DropdownItem>
								<DropdownItem key="dashboard">
									<Link href={`${directRoles[roleId]}`}>Dashboard</Link>
								</DropdownItem>
								<DropdownItem key="settings">
									<Link href={`${directRoles[roleId]}/settings`}>
										Configuracion
									</Link>
								</DropdownItem>
								<DropdownItem
									key="logout"
									color="danger"
									onClick={handleLogOut}>
									Log Out
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</>
				) : (
					<>
						<Button
							variant="bordered"
							color="secondary"
							onClick={() => router.push('/auth')}>
							Iniciar sesion
						</Button>
					</>
				)}
			</NavbarContent>
			<NavbarContent className="flex flex-row gap-3" justify="end">
				<ShoppingCart />
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							className="w-full"
							color={
								index === 2
									? 'warning'
									: index === menuItems.length - 1
									? 'danger'
									: 'foreground'
							}
							href="#"
							size="lg">
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
