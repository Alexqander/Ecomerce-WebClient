'use client';
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
import { toast } from 'sonner';
import React, { useEffect } from 'react';
import ItemShoppingCart from './ItemShoppingCart';
import useCartStore from '@/states/shoppingCartStore';
import { buyerProfileService } from '@/services/buyerProfile.service';
import { useAuthContext } from '@/context/authContext';

export default function ShoppingCart() {
	const { user } = useAuthContext();
	const { buyerProfile } = user;
	const { cart, addToCart, removeFromCart, clearCart, setCart } =
		useCartStore();
	const [shopCartId, setCartId] = React.useState(null);

	useEffect(() => {
		// Verificar si buyerProfile existe y tiene un id antes de cargar el carrito
		if (!buyerProfile || !buyerProfile.id) {
			console.log('Usuario no ha iniciado sesión o no tiene perfil');
			return;
		}

		const loadCart = async () => {
			try {
				const cart = await buyerProfileService.getCart(buyerProfile.id);
				const { cartItems, id: cartId } = cart.data.data;

				const cartItemWithQuantity = cartItems.map((item) => ({
					...item.Product,
					quantity: item.quantity,
				}));
				setCart(cartItemWithQuantity);
				localStorage.setItem('cartId', cartId);
				setCartId(cartId);
				toast.success('Carrito cargado');
			} catch (error) {
				toast.error(error.message);
			}
		};

		loadCart();
	}, [buyerProfile]);

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
					<div className="px-8 py-2 w-full">
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
									onClick={() => router.push(`/shop/checkout/${shopCartId}`)}
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
