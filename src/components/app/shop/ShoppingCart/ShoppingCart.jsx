import {
	RectangleStackIcon,
	ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	Button,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';

import React from 'react';
import ItemShoppingCart from './ItemShoppingCart';
import useCartStore from '@/states/shoppingCartStore';

export default function ShoppingCart({ products }) {
	const { cart, addToCart, removeFromCart, clearCart } = useCartStore();
	const router = useRouter();
	return (
		<Popover placement="bottom" showArrow offset={10}>
			<PopoverTrigger>
				<Button
					startContent={<ShoppingBagIcon className="w-5 h-5" />}
					variant="flat"
					color="primary"
					aria-label="Like">
					{cart?.length || 0}
				</Button>
			</PopoverTrigger>
			<PopoverContent className=" w-[650px] dark:border border-slate-800">
				{(titleProps) => (
					<div className="px-1 py-2 w-full">
						<p
							className="text-small mb-10 font-bold text-foreground"
							{...titleProps}></p>
						{cart.length === 0 && (
							<>
								<div className="flex flex-col w-full items-center justify-center my-10 ">
									<p className="text-small mb-10 font-bold text-amber-400">
										Tu carrito esta vacio
									</p>
									<RectangleStackIcon className="w-10 h-10 text-amber-400" />
								</div>
							</>
						)}
						{cart.map((product) => (
							<ItemShoppingCart product={product} key={product.id} />
						))}
						{cart.length !== 0 && (
							<>
								<Button
									variant="solid"
									size="lg"
									color="primary"
									onClick={() => router.push(`/shop/checkout/${1454}`)}
									className="w-full mt-5">
									CheckOut
								</Button>
								<Button
									variant="solid"
									color="danger"
									size="lg"
									className="w-full my-5"
									onClick={() => clearCart()}>
									Eliminar carrito
								</Button>
							</>
						)}
					</div>
				)}
			</PopoverContent>
		</Popover>
	);
}
