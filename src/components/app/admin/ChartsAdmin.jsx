'use client';
import { ArrowUpIcon, UserIcon } from '@heroicons/react/24/outline';
import { Chip } from '@nextui-org/react';
import React from 'react';

export default function ChartsAdmin() {
	return (
		<div className="container mx-auto mt-10">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
				<div className="flex gap-8 justify-evenly items-center shadow-md rounded-md p-4 w-full h-[150px] dark:border-gray-800 border">
					<UserIcon className="w-12 text-gray-500 my-auto" />
					<div>
						<h4 className="font-normal text-xl mb-4">Total de Usuarios</h4>
						<div className="flex justify-between items-center">
							<h4 className="font-montserrat font-bold text-4xl text-indigo-600">
								50
							</h4>
							<Chip variant="flat" size="md" color="success">
								<div className="flex justify-between items-center">
									<ArrowUpIcon className="w-4 h-4" />
									<span>10%</span>
								</div>
							</Chip>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
