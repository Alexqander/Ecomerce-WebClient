'use client';
import React, { useState } from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Input,
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
import { SearchIcon } from '../icons/SearchIcon';
import EcomerceLogo from '../icons/brand/EcomerceLogo';
import ThemeSwitch from '../app/ThemeSwitch';
import { useRouter } from 'next/navigation';
export default function NavBarEcomerce() {
	const menuItemsUser = ['Mi perfil', 'Configuración', 'Compras', 'Ventas'];

	const menuItemsAdmin = [
		'Dashboard',
		'Usuarios',
		'Productos',
		'Ventas',
		'Vendedores',
	];

	const menuItemsVendor = [
		'Mi perfil',
		'Configuración',
		'Ventas',
		'Productos',
		'Envíos',
	];

	const menuItemsGuest = ['Inicio', 'Productos', 'Vender', 'Iniciar sesión'];

	const [menuItems, setMenuItems] = useState(menuItemsGuest);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const router = useRouter();
	const isLogged = false;
	return (
		<Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				/>
			</NavbarContent>
			<NavbarContent justify="start">
				<NavbarBrand className="mr-4 gap-2 py-2">
					<EcomerceLogo width="50px" height="50px" />
					<div className="flex flex-col justify-start">
						<div className="flex flex-row">
							<p className="font-montserrat font-semibold text-[16px]">Fast</p>
							<p className="font-extralight text-[16px] ">Shop</p>
						</div>
						<p className="text-center text-xs">Fast and Easy</p>
					</div>
				</NavbarBrand>
				<NavbarContent className="hidden sm:flex gap-3">
					<NavbarItem>
						<Link color="foreground" href="#">
							Actualizaciones
						</Link>
					</NavbarItem>
					<NavbarItem isActive>
						<Link href="#" aria-current="page" className="text-refgold-600">
							Clientes
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="foreground" href="#">
							Proveedores
						</Link>
					</NavbarItem>
				</NavbarContent>
			</NavbarContent>

			<NavbarContent as="div" className="items-center" justify="end">
				<Input
					classNames={{
						base: 'max-w-full sm:max-w-[10rem] h-10',
						mainWrapper: 'h-full',
						input: 'text-small',
						inputWrapper:
							'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
					}}
					placeholder="Type to search..."
					size="sm"
					startContent={<SearchIcon size={18} />}
					type="search"
				/>
				{isLogged ? (
					<>
						<Dropdown placement="bottom-end">
							<DropdownTrigger>
								<Avatar
									isBordered
									as="button"
									className="transition-transform"
									color="secondary"
									name="Jason Hughes"
									size="sm"
									src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
								/>
							</DropdownTrigger>
							<DropdownMenu aria-label="Profile Actions" variant="flat">
								<DropdownItem key="profile" className="h-14 gap-2">
									<p className="font-semibold">Sesión iniciada con</p>
									<p className="font-semibold">zoey@example.com</p>
								</DropdownItem>
								<DropdownItem key="settings">Configuración</DropdownItem>
								<DropdownItem key="team_settings">Team Settings</DropdownItem>
								<DropdownItem key="analytics">Analíticas</DropdownItem>
								<DropdownItem key="system">System</DropdownItem>
								<DropdownItem key="configurations">Configurations</DropdownItem>
								<DropdownItem key="help_and_feedback">
									Help & Feedback
								</DropdownItem>
								<DropdownItem key="logout" color="danger">
									Log Out
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</>
				) : (
					<>
						<Button
							variant="solid"
							color="warning"
							onClick={() => router.push('/auth')}>
							Login
						</Button>
					</>
				)}

				<ThemeSwitch />
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
