'use client';
import React from 'react';
import Image from 'next/image';

export default function OrderItemList({ orderItems }) {
	return (
		<div className="w-full">
			{orderItems &&
				orderItems.map((item) => (
					<div
						key={item.id}
						className="flex justify-start gap-12 my-4 items-center shadow-md p-10 rounded-sm dark:border dark:border-gray-800">
						<Image
							src={item.Product.Images[0].url}
							alt={item.Product.id}
							width={100}
							height={100}
						/>
						<div className="flex flex-col w-[430px]">
							<span className="font-montserrat font-semibold">
								{item.Product.name}
							</span>
							<span className="my-5">{item.Product.id}</span>
						</div>
						<div className="w-[500px]">
							<div className="flex flex-col">
								<span className="font-montserrat font-semibold">Precio</span>
								<span className="font-montserrat font-normal text-success my-2">
									${item.Product.price}.00 MXN
								</span>
							</div>
							<div className="flex flex-col">
								<span className="font-montserrat font-semibold">Cantidad</span>
								<span className="font-montserrat font-normal text-success">
									{item.quantity} PZA
								</span>
							</div>
						</div>
						<span className="font-montserrat font-semibold my-2">
							Vendedor
							<p className="font-montserrat font-normal text-secondary">
								{item.Product.store.name}
							</p>
						</span>
					</div>
				))}
		</div>
	);
}
