import axios from 'axios';
import config from '@/config/index.js';

export const ShoppingCartService = {
	getShoppingCart: async (token) => {
		const response = await axios.get(
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
		const response = await axios.get(
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
		const response = await axios.post(
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
		const response = await axios.put(
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
		const response = await axios.delete(
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
