import HeaderDashBoard from '@/components/app/Header/HeaderDashBoard';
import React from 'react';

export default function UserPage() {
	return (
		<div className="container mx-auto mt-10">
			<HeaderDashBoard />
			<div className="w-full my-5 flex justify-start items-center gap-10 hover:bg-slate-200 transition-all dark:hover:bg-slate-800">
				<div className="w-20 h-20 rounded-md bg-blue-500 dark:to-blue-600 "></div>
				<div className="flex flex-col">
					<h1 className="text-xl font-montserrat font-bold">Ultimos Pedidos</h1>
					<p className="text-gray-600 dark:text-gray-400 font-montserrat">
						Revisa el estado de tus pedidos
					</p>
				</div>
			</div>
			<div className="w-full my-5 flex justify-start items-center gap-10 hover:bg-slate-200 transition-all dark:hover:bg-slate-800">
				<div className="w-20 h-20 rounded-md bg-green-500 dark:bg-green-600"></div>
				<div className="flex flex-col">
					<h1 className="text-xl font-montserrat font-bold">Ultimos Pedidos</h1>
					<p className="text-gray-600 dark:text-gray-400 font-montserrat">
						Revisa el estado de tus pedidos
					</p>
				</div>
			</div>
			<div className="w-full my-5 flex justify-start items-center gap-10 hover:bg-slate-200 transition-all dark:hover:bg-slate-800">
				<div className="w-20 h-20 rounded-md bg-purple-500 dark:bg-purple-600"></div>
				<div className="flex flex-col">
					<h1 className="text-xl font-montserrat font-bold">Ultimos Pedidos</h1>
					<p className="text-gray-600 dark:text-gray-400 font-montserrat">
						Revisa el estado de tus pedidos
					</p>
				</div>
			</div>
			<div className="w-full my-5 flex justify-start items-center gap-10 hover:bg-slate-200 transition-all dark:hover:bg-slate-800">
				<div className="w-20 h-20 rounded-md bg-gray-300 dark:bg-gray-600"></div>
				<div className="flex flex-col">
					<h1 className="text-xl font-montserrat font-bold">Ultimos Pedidos</h1>
					<p className="text-gray-600 dark:text-gray-400 font-montserrat">
						Revisa el estado de tus pedidos
					</p>
				</div>
			</div>
		</div>
	);
}
