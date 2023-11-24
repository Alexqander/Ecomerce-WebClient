import axios from 'axios';
import config from '@/config/index.js';

export const CategoriesService = {
	getCategories: async (page = 1, limit = 9) => {
		const response = await axios.get(
			`${config.development.api.urlBase}${config.development.api.categories.getCategories}?page=${page}&limit=${limit}`
		);
		return response;
	},
	getAllCategories: async () => {
		const response = await axios.get(
			`${config.development.api.urlBase}${config.development.api.categories.getAllCategories}`
		);
		return response;
	},
	getCategory: async (id) => {
		const response = await axios.get(
			`${
				config.development.api.urlBase
			}${config.development.api.categories.getCategory.replace(':id', id)}`
		);
		return response;
	},

	getCategoryWithSubcategories: async () => {
		const response = await axios.get(
			`${config.development.api.urlBase}${config.development.api.categories.getCategoryWithSubcategories}`
		);
		return response;
	},

	createCategory: async (token, newCategory) => {
		const response = await axios.post(
			`${config.development.api.urlBase}${config.development.api.categories.createCategory}`,
			newCategory,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	},
	updateCategory: async (token, id, newCategory) => {
		const response = await axios.put(
			`${
				config.development.api.urlBase
			}${config.development.api.categories.updateCategory.replace(':id', id)}`,
			newCategory,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	},
	deleteCategory: async (token, id) => {
		const response = await axios.delete(
			`${
				config.development.api.urlBase
			}${config.development.api.categories.deleteCategory.replace(':id', id)}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	},
	getSubcategoriesByCategory: async (id) => {
		const response = await axios.get(
			`${
				config.development.api.urlBase
			}${config.development.api.categories.getSubcategoriesByCategory.replace(
				':id',
				id
			)}`
		);
		return response;
	},
};
