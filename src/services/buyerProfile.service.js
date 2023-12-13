import axiosInstance from '@/utils/axiosInstance';
import config from '@/config/index.js';

export const buyerProfileService = {
	createCart: async (buyerId) => {
		try {
			const response = await axiosInstance.post(
				`${config.development.api.urlBase}${config.development.api.profileBuyer.createCart}`,
				{
					quantity: 0,
					orderStatus: 'created',
					buyerId: buyerId,
				}
			);
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	saveCart: async (idCart, cart) => {
		try {
			const response = await axiosInstance.patch(
				`${
					config.development.api.urlBase
				}${config.development.api.profileBuyer.saveCart.replace(
					':id',
					idCart
				)}`,
				cart
			);
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	getCart: async (buyerId) => {
		try {
			const response = await axiosInstance.get(
				`${
					config.development.api.urlBase
				}${config.development.api.profileBuyer.getCart.replace(':id', buyerId)}`
			);
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	deleteProductCart: async (idCart, product) => {
		try {
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
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	deleteCart: async (idCart) => {
		try {
			const response = await axiosInstance.delete(
				`${
					config.development.api.urlBase
				}${config.development.api.profileBuyer.deleteCart.replace(
					':id',
					idCart
				)}`
			);
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	getCartDetail: async (idCart, token) => {
		try {
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
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	getOrders: async (buyerId, token) => {
		try {
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
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	getOrder: async (orderId, token) => {
		try {
			const response = await axiosInstance.get(
				`${
					config.development.api.urlBase
				}${config.development.api.profileBuyer.getOrder.replace(
					':id',
					orderId
				)}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	saveWishList: async (wishListId, wishList) => {
		try {
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
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	deleteProductToWishList: async (wishListId, product) => {
		try {
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
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	getWishList: async (buyerId, token) => {
		try {
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
		} catch (error) {
			console.log(error);
			return error;
		}
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
