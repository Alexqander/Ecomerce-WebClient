'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export default function DetailsCheckOut({ cart }) {
	const total = cart.cartItems.reduce(
		(acc, item) => acc + item.Product.price * item.quantity,
		0
	);
	const router = useRouter();

	console.log(cart.cartItems);
	return (
		<div className="w-full">
			<div className="flex flex-col gap-2 w-full">
				{cart &&
					cart.cartItems.map((product) => (
						<div
							key={product.Product.id}
							className="flex flex-row justify-between items-center py-5 w-full border-b-1 border-gray-300 dark:border-gray-600">
							<div className="flex flex-row items-start gap-10">
								<Image
									src={product.Product.Images[0].url}
									width={100}
									height={100}
									alt={product.Product.name}
									className="object-cover rounded"
								/>

								<div className="flex flex-col gap-5">
									<span className="font-montserrat font-medium text-xl text-secondary">
										{product.Product.name}
									</span>
									<span className="font-montserrat font-normal text-base dark:text-gray-300">
										$ {product.Product.price}
									</span>
									<span className="font-montserrat font-bold text-sm text-primary">
										{product.quantity}
									</span>
								</div>
							</div>
							<div className="flex flex-row gap-2">
								<span className="font-montserrat font-semibold text-base">
									$ {product.quantity * product.Product.price}
								</span>
							</div>
						</div>
					))}
				<div className="flex justify-end gap-10 my-5">
					<span className="font-montserrat font-normal text-lg text-gray-500 dark:text-gray-400">
						Total
					</span>
					<span className="font-montserrat font-semibold text-lg text-success">
						$ {total}
					</span>
				</div>
				<div className="flex flex-col lg:flex-row gap-4 justify-between my-5">
					<Button
						startContent={<ArrowLeftIcon className="w-5 h-5" />}
						variant="flat"
						color="primary"
						size="lg"
						onClick={() => router.back()}>
						Regresar
					</Button>
					<Button
						endContent={<ArrowRightIcon className="w-5 h-5" />}
						variant="flat"
						color="success"
						size="lg">
						Continuar
					</Button>
				</div>
			</div>
		</div>
	);
}
