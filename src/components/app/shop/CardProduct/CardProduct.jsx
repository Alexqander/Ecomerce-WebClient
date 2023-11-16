import { HeartIcon } from '@/components/icons/cardProduct/HeartIcon';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import React from 'react';

export default function CardProduct({ product }) {
	return (
		<div className="group relative block overflow-hidden">
			<Button
				isIconOnly
				variant="ghost"
				color="danger"
				aria-label="Like"
				className="absolute end-4 top-4 z-10">
				<span className="sr-only">Wishlist</span>
				<HeartIcon />
			</Button>

			<Image
				width={300}
				height={300}
				src="https://res.cloudinary.com/did389u6j/image/upload/v1699142798/asoeuxrt0meual5zqp9y.jpg"
				alt="Robot Toy"
			/>
			<div className="bg-background relative border border-gray-100 dark:border-slate-800 p-6">
				<span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
					New
				</span>
				<h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-50">
					Iphone 15
				</h3>
				<p className="mt-1.5 text-sm text-gray-700 dark:text-gray-200">
					$29,899.00
				</p>
				<form className="mt-4">
					<Button
						size="lg"
						className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
						Agregar al carrito
					</Button>
				</form>
			</div>
		</div>
	);
}
