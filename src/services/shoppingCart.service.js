import axiosInstance from '@/utils/axiosInstance';
import config from '@/config/index.js';

export const ShoppingCartService = {
	getShoppingCart: async (token) => {
		try {
			const response = await axiosInstance.get(
				`${config.development.api.urlBase}${config.development.api.shoppingCart.getShoppingCart}`,
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
	getShoppingCartDetail: async (token) => {
		try {
			const response = await axiosInstance.get(
				`${config.development.api.urlBase}${config.development.api.shoppingCart.getShoppingCartDetail}`,
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
	addProductToShoppingCart: async (token, newProduct) => {
		try {
			const response = await axiosInstance.post(
				`${config.development.api.urlBase}${config.development.api.shoppingCart.addProductToShoppingCart}`,
				newProduct,
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
	updateProductInShoppingCart: async (token, id, newProduct) => {
		try {
			const response = await axiosInstance.put(
				`${
					config.development.api.urlBase
				}${config.development.api.shoppingCart.updateProductInShoppingCart.replace(
					':id',
					id
				)}`,
				newProduct,
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
	deleteProductInShoppingCart: async (token, id) => {
		try {
			const response = await axiosInstance.delete(
				`${
					config.development.api.urlBase
				}${config.development.api.shoppingCart.deleteProductInShoppingCart.replace(
					':id',
					id
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
};
