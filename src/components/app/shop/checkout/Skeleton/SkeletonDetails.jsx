import React from 'react';
import { Skeleton } from '@nextui-org/react';

export default function SkeletonDetails() {
	return (
		<div className="w-full">
			<div className="flex flex-col gap-2 w-full">
				{/* Repetir varias veces para simular múltiples productos */}
				{[...Array(3)].map((_, index) => (
					<div
						key={index}
						className="flex flex-row justify-between items-center py-5 w-full border-b-1 border-gray-300 dark:border-gray-600">
						<div className="flex flex-row items-start gap-10">
							{/* Esqueleto para la imagen */}
							<Skeleton.Rectangle width={100} height={100} />

							<div className="flex flex-col gap-5">
								{/* Esqueletos para el texto */}
								<Skeleton.Text />
								<Skeleton.Text />
								<Skeleton.Text />
							</div>
						</div>
						<div className="flex flex-row gap-2">
							{/* Esqueleto para el precio */}
							<Skeleton.Text />
						</div>
					</div>
				))}

				{/* Esqueleto para el total */}
				<div className="flex justify-end gap-10 my-5">
					<Skeleton.Text />
					<Skeleton.Text />
				</div>

				{/* Botones esqueleto */}
				<div className="flex gap-4 justify-between my-5">
					<Skeleton.Button />
					<Skeleton.Button />
				</div>
			</div>
		</div>
	);
}
