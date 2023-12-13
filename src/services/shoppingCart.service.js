import axiosInstance from '@/utils/axiosInstance';
import config from '@/config/index.js';

export const ShoppingCartService = {
	getShoppingCart: async (token) => {
		const response = await axiosInstance.get(
			`${config.development.api.urlBase}${config.development.api.shoppingCart.getShoppingCart}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	},
	getShoppingCartDetail: async (token) => {
		const response = await axiosInstance.get(
			`${config.development.api.urlBase}${config.development.api.shoppingCart.getShoppingCartDetail}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	},
	addProductToShoppingCart: async (token, newProduct) => {
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
	},
	updateProductInShoppingCart: async (token, id, newProduct) => {
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
	},
	deleteProductInShoppingCart: async (token, id) => {
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
	},
};
