import useCartStore from '@/states/shoppingCartStore';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Button, Divider } from '@nextui-org/react';
import Image from 'next/image';
import { toast } from 'sonner';
import React from 'react';
import { buyerProfileService } from '@/services/buyerProfile.service';
import { useAuthContext } from '@/context/authContext';

export default function ItemShoppingCart({ product }) {
	const { removeFromCart, incrementQuantity, decrementQuantity } =
		useCartStore();
	const { user } = useAuthContext();
	const { buyerProfile } = user;
	const handleRemoveFromCart = async (productId) => {
		try {
			if (!buyerProfile || !buyerProfile.id) {
				// Si el usuario no ha iniciado sesión, eliminamos el producto del carrito local
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
			console.log('Producto eliminado', data);
			toast.success('Producto eliminado del carrito');
			removeFromCart(productId);
		} catch (error) {
			console.log(error);
			toast.error('No se pudo eliminar el producto del carrito');
		}
	};
	const handleIncrementQuantity = async (product) => {
		try {
			if (!buyerProfile || !buyerProfile.id) {
				// Si el usuario no ha iniciado sesión, agregamos el producto al carrito local
				incrementQuantity(product.id);
				toast.success('Cantidad actualizada');
				return;
			}
			const cartId = localStorage.getItem('cartId');
			const productSendToApi = {
				products: [
					{
						productId: product.id,
						quantity: product.quantity + 1,
					},
				],
			};
			const savedProduct = await buyerProfileService.saveCart(
				cartId,
				productSendToApi
			);
			console.log('Producto Actualizado', savedProduct);
			toast.success('Cantidad actualizada');
			incrementQuantity(product.id);
		} catch (error) {
			toast.error('Error al actualizar la cantidad');
		}
	};
	const handleDecrementQuantity = async (product) => {
		try {
			if (!buyerProfile || !buyerProfile.id) {
				// Si el usuario no ha iniciado sesión, agregamos el producto al carrito local
				decrementQuantity(product.id);
				toast.success('Cantidad actualizada');
				return;
			}
			const cartId = localStorage.getItem('cartId');
			const productSendToApi = {
				products: [
					{
						productId: product.id,
						quantity: product.quantity - 1,
					},
				],
			};
			const savedProduct = await buyerProfileService.saveCart(
				cartId,
				productSendToApi
			);
			console.log('Producto Actualizado', savedProduct);
			toast.success('Cantidad actualizada');
			decrementQuantity(product.id);
		} catch (error) {
			toast.error('Error al actualizar la cantidad');
		}
	};

	return (
		<div className="mt-5 flex flex-col gap-2 w-full">
			<div className="flex gap-4 max-h-18 items-center justify-between">
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
				<div className="flex gap-4 justify-evenly w-full">
					<div className="flex gap-3 items-center">
						<Button
							isIconOnly
							variant="flat"
							color="primary"
							size="sm"
							onClick={() => handleDecrementQuantity(product)}>
							<MinusIcon className="w-5 h-5" />
						</Button>
						<p>{product.quantity}</p>
						<Button
							isIconOnly
							variant="flat"
							color="primary"
							size="sm"
							onClick={() => handleIncrementQuantity(product)}>
							<PlusIcon className="w-5 h-5" />
						</Button>
					</div>
					<div className="flex w-full justify-between items-center">
						<p className="text-small font-montserrat font-medium text-foreground w-[180px] break-words">
							{product.name}
						</p>
						<p className="text-small font-montserrat font-semibold text-foreground">
							${product.price}
						</p>
						<Button isIconOnly color="danger" variant="flat">
							<TrashIcon
								className="w-5 h-5"
								onClick={() => handleRemoveFromCart(product.id)}
							/>
						</Button>
					</div>
				</div>
			</div>
			<Divider className="my-2" />
		</div>
	);
}
