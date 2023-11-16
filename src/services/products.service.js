import axios from 'axios';
import config from '@/config/index.js';

export const ProductsService = {
	getProducts: async (page = 1, limit = 9) => {
		const response = await axios.get(
			`${config.development.api.urlBase}${config.development.api.products.getProducts}?page=${page}&limit=${limit}`
		);
		return response;
	},
	findProducts: async (search, page = 1, limit = 9) => {
		const response = await axios.get(
			`${config.development.api.urlBase}${config.development.api.products.findProducts}?search=${search}&page=${page}&limit=${limit}`
		);
		return response;
	},
	getProduct: async (id) => {
		const response = await axios.get(
			`${
				config.development.api.urlBase
			}${config.development.api.products.getProduct.replace(':id', id)}`
		);
		return response;
	},
	createProduct: async (token, newProduct) => {
		const response = await axios.post(
			`${config.development.api.urlBase}${config.development.api.products.createProduct}`,
			newProduct,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	},
	updateProduct: async (token, id, newProduct) => {
		const response = await axios.put(
			`${
				config.development.api.urlBase
			}${config.development.api.products.updateProduct.replace(':id', id)}`,
			newProduct,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	},
	deleteProduct: async (token, id) => {
		const response = await axios.delete(
			`${
				config.development.api.urlBase
			}${config.development.api.products.deleteProduct.replace(':id', id)}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	},
};
