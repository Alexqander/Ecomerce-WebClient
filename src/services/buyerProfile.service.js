import axiosInstance from '@/utils/axiosInstance';
import config from '@/config/index.js';

export const buyerProfileService = {
	createCart: async (buyerId) => {
		const response = await axiosInstance.post(
			`${config.development.api.urlBase}${config.development.api.profileBuyer.createCart}`,
			{
				quantity: 0,
				orderStatus: 'created',
				buyerId: buyerId,
			}
		);
		return response;
	},
	saveCart: async (idCart, cart) => {
		console.log('entre al servicio');
		const response = await axiosInstance.patch(
			`${
				config.development.api.urlBase
			}${config.development.api.profileBuyer.saveCart.replace(':id', idCart)}`,
			cart
		);
		return response;
	},
	getCart: async (buyerId) => {
		const response = await axiosInstance.get(
			`${
				config.development.api.urlBase
			}${config.development.api.profileBuyer.getCart.replace(':id', buyerId)}`
		);
		return response;
	},
	deleteProductCart: async (idCart, product) => {
		const response = await axiosInstance.patch(
			`${
				config.development.api.urlBase
			}${config.development.api.profileBuyer.deleteProductCart.replace(
				':id',
				idCart
			)}`,
			product
		);
		return response;
	},
	deleteCart: async (idCart) => {
		const response = await axiosInstance.delete(
			`${
				config.development.api.urlBase
			}${config.development.api.profileBuyer.deleteCart.replace(':id', idCart)}`
		);
		return response;
	},
	getCartDetail: async (idCart, token) => {
		const response = await axiosInstance.get(
			`${
				config.development.api.urlBase
			}${config.development.api.profileBuyer.getCartDetail.replace(
				':id',
				idCart
			)}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	},
};
