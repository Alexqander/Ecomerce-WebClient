import React from 'react';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/react';
export default function SideBarEcomerce({ options }) {
	const [isMenuOpen, setIsMenuOpen] = useState(true);
	const changeIsMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<>
			<div className="fixed top-16 h-[calc(100vh-60px)] inset-y-0 left-0">
				<div className="flex justify-end px-5 pt-5 sm:hidden">
					<Button isIconOnly color="background" onClick={changeIsMenuOpen}>
						<Bars3Icon className="h-8 w-8" />
					</Button>
				</div>
				<aside
					className={`
					 md:flex
					${
						isMenuOpen ? 'hidden' : 'flex'
					} flex-col w-64 px-5 py-8 overflow-y-auto bg-background border-r rtl:border-r-0 rtl:border-l dark:bg-background dark:border-slate-700`}>
					<h2 className="font-montserrat font-semibold text-3xl">Mi cuenta</h2>
					{/* <Link href="#" className="flex flex-col items-center justify-center">
				<EcomerceLogo width={60} height={60} className="mx-auto" />
				<div className="flex flex-row justify-center content-center">
					<p className="font-montserrat font-semibold text-[40px]">Fast</p>
					<p className="font-extralight text-[40px]">Shop</p>
				</div>
				<p className="text-center text-base">Fast and Easy</p>
			</Link> */}
					<div className="flex flex-col justify-between flex-1 mt-6">
						<nav className="-mx-3 space-y-6 ">
							{options.map(({ grupo }) => (
								<div key={grupo.name} className="space-y-3 ">
									<label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
										{grupo.name}
									</label>
									{grupo.routes.map(({ label, path, icon }) => (
										<Link
											key={path}
											className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
											href={path}>
											{icon}
											<span className="mx-2 text-sm font-medium">{label}</span>
										</Link>
									))}
								</div>
							))}
						</nav>
					</div>
				</aside>
			</div>
		</>
	);
}
