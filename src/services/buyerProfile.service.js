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
	getOrders: async (buyerId, token) => {
		const response = await axiosInstance.get(
			`${
				config.development.api.urlBase
			}${config.development.api.profileBuyer.getOrders.replace(
				':id',
				buyerId
			)}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	},
	getOrder: async (orderId, token) => {
		const response = await axiosInstance.get(
			`${
				config.development.api.urlBase
			}${config.development.api.profileBuyer.getOrder.replace(':id', orderId)}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	},
	saveWishList: async (wishListId, wishList) => {
		const response = await axiosInstance.patch(
			`${
				config.development.api.urlBase
			}${config.development.api.profileBuyer.saveWishList.replace(
				':id',
				wishListId
			)}`,
			wishList
		);
		return response;
	},
	deleteProductToWishList: async (wishListId, product) => {
		const response = await axiosInstance.patch(
			`${
				config.development.api.urlBase
			}${config.development.api.profileBuyer.deleteProductToWishList.replace(
				':id',
				wishListId
			)}`,
			product
		);
		return response;
	},
	getWishList: async (buyerId, token) => {
		const response = await axiosInstance.get(
			`${
				config.development.api.urlBase
			}${config.development.api.profileBuyer.getWishList.replace(
				':id',
				buyerId
			)}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	},
	createReviewToProduct: async (review) => {
		try {
			const response = await axiosInstance.post(
				`${config.development.api.urlBase}${config.development.api.reviews.createReview}`,
				review
			);
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
};
