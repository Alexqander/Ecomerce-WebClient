'use client';
import React from 'react';
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
} from '@nextui-org/react';
import { SearchIcon } from '../icons/SearchIcon';
import EcomerceLogo from '../icons/brand/EcomerceLogo';
import EcomerceTextLogo from '../icons/brand/EcomerceTextLogo';
import ThemeSwitch from '../app/ThemeSwitch';

export default function NavBarEcomerce() {
	return (
		<Navbar isBordered>
			<NavbarContent justify="start">
				<NavbarBrand className="mr-4 gap-2 py-2">
					<EcomerceLogo width="8em" height="8em" />
					<EcomerceTextLogo className="hidden sm:block " />
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
							Provedores
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
							<p className="font-semibold">Sesion iniciada con</p>
							<p className="font-semibold">zoey@example.com</p>
						</DropdownItem>
						<DropdownItem key="settings">Configuracion</DropdownItem>
						<DropdownItem key="team_settings">Team Settings</DropdownItem>
						<DropdownItem key="analytics">Analiticas</DropdownItem>
						<DropdownItem key="system">System</DropdownItem>
						<DropdownItem key="configurations">Configurations</DropdownItem>
						<DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
						<DropdownItem key="logout" color="danger">
							Log Out
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<ThemeSwitch />
			</NavbarContent>
		</Navbar>
	);
}
