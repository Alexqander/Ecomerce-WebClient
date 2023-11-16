'use client';
import { HeartIcon } from '@/components/icons/cardProduct/HeartIcon';
import useCartStore from '@/states/shoppingCartStore';
import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FooterDev from '../../dev/FooterDev';

export default function CardProduct2({ product }) {
	const { cart, addToCart, removeFromCart } = useCartStore();
	const router = useRouter();
	const checkProductInCart = (product) => {
		return cart.some((item) => item.id === product.id);
	};
	const truncateText = (text, length) => {
		if (text.length <= length) return text;
		return text.slice(0, length) + '...';
	};
	const isProductInCart = checkProductInCart(product);
	return (
		<div className="max-w-sm rounded overflow-hidden relative block shadow-lg">
			<Button
				isIconOnly
				variant="ghost"
				color="danger"
				aria-label="Like"
				className="absolute end-4 top-4 z-10">
				<span className="sr-only">Wishlist</span>
				<HeartIcon />
			</Button>
			<div className="w-full h-[288px] bg-white overflow-hidden relative">
				<Image
					fill
					style={{ objectFit: 'contain' }}
					src={product?.Images[0].url || 'https://via.placeholder.com/300'}
					alt={product.name}
				/>
			</div>
			<div className="flex flex-col gap-2 px-6 py-4">
				<Link href={`/shop/products/${product.id}`}>
					<div className="h-14 my-5">
						<h3 className="font-montserrat font-bold text-xl">
							{product.name}
						</h3>
						<p
							className="text-gray-400 text-base overflow-hidden max-h-6"
							style={{
								display: '-webkit-box',
								WebkitLineClamp: '3',
								WebkitBoxOrient: 'vertical',
							}}>
							{truncateText(product.description, 100)} {/* Truncar el texto */}
						</p>
					</div>
					<p className="font-montserrat  font-normal text-emerald-600">
						{product?.SubCategory?.name || 'Sin categoria'}
					</p>
					<p className="font-montserrat font-medium text-lg">
						$ {product.price}
					</p>
				</Link>
				<div className="flex flex-col">
					<Button
						variant="solid"
						color="primary"
						size="lg"
						onClick={() => router.push(`/shop/products/${product.id}`)}>
						Ver mas
					</Button>
				</div>
				<FooterDev data={cart} />
			</div>
		</div>
	);
}
