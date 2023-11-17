'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/react';
import { useDashboardOptions } from '../LinksDashboard';

export default function SideBarEcomerce() {
	const { links } = useDashboardOptions();

	return (
		<>
			<div className="top-16 h-[calc(100vh-65px)] inset-y-0 left-0 hidden lg:block lg:fixed">
				<aside className="md:flex h-[100%] flex-col w-64 px-5 py-8 overflow-y-auto bg-background border-r rtl:border-r-0 rtl:border-l dark:bg-background dark:border-slate-700">
					<h2 className="font-montserrat font-semibold text-3xl">Mi cuenta</h2>

					<div className="flex flex-col justify-between flex-1 mt-6">
						<nav className="-mx-3 space-y-6 ">
							{links &&
								links.map(({ grupo }) => (
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
												<span className="mx-2 text-sm font-medium">
													{label}
												</span>
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
