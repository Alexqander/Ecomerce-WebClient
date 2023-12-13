'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { TrashIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import useCartStore from '@/states/shoppingCartStore';
import { useAuthContext } from '@/context/authContext';
import { toast } from 'sonner';
import { buyerProfileService } from '@/services/buyerProfile.service';
import useWishListStore from '@/states/wishListStore';

export default function WishList({ WishList }) {
	const { cart, addToCart, removeFromCart } = useCartStore();
	useCartStore();
	const { removeFromWishList } = useWishListStore();
	const { user } = useAuthContext();
	const { buyerProfile } = user;

	const handleAddToCart = async (product) => {
		try {
			if (!buyerProfile || !buyerProfile.id) {
				// * Si el usuario no ha iniciado sesión, agregamos el producto al carrito local
				addToCart(product);
				toast.success('Producto agregado al carrito');
				return;
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
			toast.success('Producto agregado al carrito');

			addToCart(product);
		} catch (error) {
			toast.error('No se pudo agregar el producto al carrito');
		}
	};

	const handleRemoveFromCart = async (productId) => {
		try {
			if (!buyerProfile || !buyerProfile.id) {
				// * Si el usuario no ha iniciado sesión, eliminamos el producto del carrito local
				removeFromCart(productId);
				toast.success('Producto eliminado del carrito');
				return;
			}
			const cartId = localStorage.getItem('cartId');
			const productSendToApi = {
				productId: productId,
			};
			const savedProduct = await buyerProfileService.deleteProductCart(
				cartId,
				productSendToApi
			);
			const { data } = savedProduct.data;
			toast.success('Producto eliminado del carrito');
			removeFromCart(productId);
		} catch (error) {
			toast.error('No se pudo eliminar el producto del carrito');
		}
	};

	const handleRemoveFromWishList = async (productId) => {
		try {
			if (!buyerProfile || !buyerProfile.id) {
				// * Si el usuario no ha iniciado sesión, eliminamos el producto del wishList local
				removeFromWishList(productId);
				toast.success('Producto eliminado de la lista de deseos');
				return;
			}
			const wishListId = localStorage.getItem('wishListId');
			const productSendToApi = {
				productId: productId,
			};
			const savedProduct = await buyerProfileService.deleteProductToWishList(
				wishListId,
				productSendToApi
			);
			const { data } = savedProduct.data;
			toast.success('Producto eliminado de la lista de deseos');
			removeFromWishList(productId);
		} catch (error) {
			console.log(error);
			toast.error('No se pudo eliminar el producto de la lista de deseos');
		}
	};

	const checkProductInCart = (product) => {
		const isProductInCart = cart.some((item) => item.id === product.Product.id);
		return isProductInCart;
	};

	return (
		<div className="flex flex-col gap-4 mt-10">
			<h4 className=" font-montserrat font-medium text-xl ">{WishList.name}</h4>
			<div className="flex flex-col gap-4">
				{WishList.wishListItems &&
					WishList.wishListItems.map((product) => (
						<div
							className="flex flex-row-reverse justify-between gap-4"
							key={product.Product.id}>
							<div className="flex flex-col justify-center items-end">
								<h4 className=" font-montserrat font-medium text-lg">
									{product.Product.name}
								</h4>
								<span className="font-montserrat font-medium text-base text-secondary">
									{' '}
									$ {product.Product.price}.00
								</span>
								<div className="flex gap-2 mt-5">
									<Button
										variant="flat"
										color={checkProductInCart(product) ? 'danger' : 'primary'}
										startContent={
											checkProductInCart(product) ? (
												<TrashIcon className="w-5 h-5" />
											) : (
												<ShoppingCartIcon className="w-5 h-5" />
											)
										}
										onClick={
											checkProductInCart(product)
												? () => handleRemoveFromCart(product.Product.id)
												: () =>
														handleAddToCart({
															id: product.Product.id,
															price: product.Product.price,
															name: product.Product.name,
															Images: product.Product.Images,
														})
										}>
										{checkProductInCart(product)
											? 'Eliminar del carrito'
											: 'Agregar al carrito'}
									</Button>
									<Button
										variant="flat"
										color="danger"
										onClick={() => handleRemoveFromWishList(product.Product.id)}
										startContent={<TrashIcon className="w-5 h-5" />}>
										Eliminar
									</Button>
								</div>
							</div>
							<div className="flex gap-4">
								<Image
									src={product.Product.Images[0].url || ''}
									alt={product.Product.id}
									width={100}
									height={100}
								/>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
