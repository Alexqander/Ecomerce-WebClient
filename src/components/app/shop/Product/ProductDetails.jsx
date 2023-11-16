'use client';
import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/button';
import useCartStore from '@/states/shoppingCartStore';
import React from 'react';

export default function ProductDetails({ product }) {
	const { cart, addToCart, removeFromCart } = useCartStore();
	const checkProductInCart = (product) => {
		return cart.some((item) => item.id === product.id);
	};
	const isProductInCart = checkProductInCart(product);
	const numbersStock = Array.from({ length: product.stock }, (_, i) => i + 1);
	return (
		<div className="flex flex-col justify-between h-full mb-10">
			<div>
				<h1 className=" text-5xl font-montserrat font-bold mb-10">
					{product.name}
				</h1>
				<p className="text-gray-600 text-xl dark:text-gray-400 font-montserrat">
					{product.description}
				</p>
				<p className="text-gray-600 text-xl dark:text-gray-400 font-montserrat mb-10">
					{product.SubCategory.name}
				</p>
				<p className=" text-success-400 text-xl font-montserrat mb-10">
					{product.store.name}
				</p>
				<p className=" text-blue-600 text-2xl  dark:text-blue-500 font-montserrat font-semibold mb-12">
					${product.price}
				</p>

				<p className="font-montserrat font-normal text-sm text-gray-600 dark:text-gray-400 mt-6">
					Stock
				</p>
				<p className="font-montserrat font-medium text-base">{product.stock}</p>
			</div>

			<Button
				startContent={
					isProductInCart ? (
						<TrashIcon className="w-5 h-5" />
					) : (
						<ShoppingCartIcon className="w-5 h-5" />
					)
				}
				variant="solid"
				size="lg"
				color={isProductInCart ? 'danger' : 'primary'}
				onClick={
					isProductInCart
						? () => removeFromCart(product.id)
						: () => addToCart(product)
				}>
				{isProductInCart ? 'Eliminar del carrito' : 'Agregar al carrito'}
			</Button>
		</div>
	);
}
