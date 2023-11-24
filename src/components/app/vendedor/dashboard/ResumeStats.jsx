import React from 'react';
import {
	WalletIcon,
	TruckIcon,
	CubeIcon,
	ChatBubbleLeftIcon,
} from '@heroicons/react/24/outline';
export default function ResumeStats({ stats }) {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10">
			{stats &&
				stats.map((stat, index) => (
					<>
						<div className="bg-background rounded-lg shadow-lg p-4 flex gap-5 items-center dark:border border-gray-800">
							<div
								className={`${stat.style}} opacity-70 w-14 h-14 rounded-md flex justify-center items-center`}>
								{stat.icon}
							</div>
							<div>
								<h4 className="text-lg font-montserrat font-medium">
									{stat.name}
								</h4>
								<p className="text-4xl font-montserrat font-medium">
									{stats.value}
								</p>
							</div>
						</div>
					</>
				))}
			<div className="bg-background rounded-lg shadow-lg p-4 flex gap-5 items-center dark:border border-gray-800">
				<div className=" bg-red-300 opacity-70 w-14 h-14 rounded-md flex justify-center items-center">
					<TruckIcon className="w-8 h-8 text-red-600" />
				</div>
				<div>
					<h4 className="text-lg font-montserrat font-medium">Pedidos</h4>
					<p className="text-4xl font-montserrat font-medium">0</p>
				</div>
			</div>
			<div className="bg-background rounded-lg shadow-lg p-4 flex gap-5 items-center dark:border border-gray-800">
				<div className="  bg-orange-300 opacity-70 w-14 h-14 rounded-md flex justify-center items-center">
					<CubeIcon className="w-8 h-8 text-orange-600" />
				</div>
				<div>
					<h4 className="text-lg font-montserrat font-medium">Productos</h4>
					<p className="text-4xl font-montserrat font-medium">0</p>
				</div>
			</div>
			<div className="bg-background rounded-lg shadow-lg p-4 flex gap-5 items-center dark:border border-gray-800">
				<div className=" bg-indigo-300 opacity-70 w-14 h-14 rounded-md flex justify-center items-center">
					<ChatBubbleLeftIcon className="w-8 h-8 text-indigo-600" />
				</div>
				<div>
					<h4 className="text-lg font-montserrat font-medium">Reviews</h4>
					<p className="text-4xl font-montserrat font-medium">0</p>
				</div>
			</div>
		</div>
	);
}
