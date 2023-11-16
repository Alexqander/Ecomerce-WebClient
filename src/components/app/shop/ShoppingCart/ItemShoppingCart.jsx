import useCartStore from '@/states/shoppingCartStore';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Button, Divider } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

export default function ItemShoppingCart({ product }) {
	const { removeFromCart, incrementQuantity, decrementQuantity } =
		useCartStore();
	return (
		<div className="mt-5 flex flex-col gap-2 w-full">
			<div className="flex gap-2 max-h-18 items-center">
				<div className="h-[50px] w-[50px]">
					{/* imagen del producto */}
					<Image
						src={product?.Images[0].url || 'https://via.placeholder.com/300'}
						alt="Picture of the author"
						width={50}
						height={50}
						className="my-2"
					/>
				</div>

				{/* detalles del producto */}
				<div className="flex justify-evenly w-full">
					<div className="flex gap-3 items-center">
						<Button
							isIconOnly
							variant="flat"
							color="primary"
							size="sm"
							onClick={() => decrementQuantity(product.id)}>
							<MinusIcon className="w-5 h-5" />
						</Button>
						<p>{product.quantity}</p>
						<Button
							isIconOnly
							variant="flat"
							color="primary"
							size="sm"
							onClick={() => incrementQuantity(product.id)}>
							<PlusIcon className="w-5 h-5" />
						</Button>
					</div>
					<div className="flex w-full justify-evenly items-center">
						<p className="text-small font-montserrat font-medium text-foreground">
							{product.name}
						</p>
						<p className="text-small font-montserrat font-semibold text-foreground">
							${product.price}
						</p>
						<Button isIconOnly color="danger" variant="flat">
							<TrashIcon
								className="w-5 h-5"
								onClick={() => removeFromCart(product.id)}
							/>
						</Button>
					</div>
				</div>
			</div>
			<Divider className="my-2" />
		</div>
	);
}
