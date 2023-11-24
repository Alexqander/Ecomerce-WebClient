'use client';
import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/button';
import useCartStore from '@/states/shoppingCartStore';
import { useAuthContext } from '@/context/authContext';
import React, { useEffect } from 'react';
import { toast } from 'sonner';
import { buyerProfileService } from '@/services/buyerProfile.service';

export default function ProductDetails({ product }) {
	const { cart, addToCart, removeFromCart } = useCartStore();
	useCartStore();
	const { user } = useAuthContext();
	const { buyerProfile } = user;

	const handleAddToCart = async (product) => {
		try {
			if (!buyerProfile || !buyerProfile.id) {
				throw new Error('No se ha iniciado sesión');
			}
			const cartId = localStorage.getItem('cartId');
			const productSendToApi = {
				products: [
					{
						productId: product.id,
						quantity: 1,
					},
				],
			};
			const savedProduct = await buyerProfileService.saveCart(
				cartId,
				productSendToApi
			);
			console.log('Producto guardado', savedProduct);
			toast.success('Producto agregado al carrito');

			addToCart(product);
		} catch (error) {
			toast.error('No se pudo agregar el producto al carrito');
		}
	};

	const handleRemoveFromCart = async (productId) => {
		try {
			if (!buyerProfile || !buyerProfile.id) {
				throw new Error('No se ha iniciado sesión');
			}
			console.log('se elimino del carrito');
			const cartId = localStorage.getItem('cartId');
			const productSendToApi = {
				productId: productId,
			};
			const savedProduct = await buyerProfileService.deleteProductCart(
				cartId,
				productSendToApi
			);
			const { data } = savedProduct.data;
			console.log('Producto eliminado', data);
			toast.success('Producto eliminado del carrito');
			removeFromCart(productId);
		} catch (error) {
			toast.error('No se pudo eliminar el producto del carrito');
		}
	};

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
						? () => handleRemoveFromCart(product.id)
						: () =>
								handleAddToCart({
									id: product.id,
									price: product.price,
									name: product.name,
									Images: product.Images,
								})
				}>
				{isProductInCart ? 'Eliminar del carrito' : 'Agregar al carrito'}
			</Button>
		</div>
	);
}
