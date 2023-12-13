import axiosInstance from '@/utils/axiosInstance';
import config from '@/config/index.js';

export const CategoriesService = {
	getCategories: async (page = 1, limit = 9) => {
		try {
			const response = await axiosInstance.get(
				`${config.development.api.urlBase}${config.development.api.categories.getCategories}?page=${page}&limit=${limit}`
			);
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	getAllCategories: async () => {
		try {
			const response = await axiosInstance.get(
				`${config.development.api.urlBase}${config.development.api.categories.getAllCategories}`
			);
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	getCategory: async (id) => {
		try {
			const response = await axiosInstance.get(
				`${
					config.development.api.urlBase
				}${config.development.api.categories.getCategory.replace(':id', id)}`
			);
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},

	getCategoryWithSubcategories: async () => {
		try {
			const response = await axiosInstance.get(
				`${config.development.api.urlBase}${config.development.api.categories.getCategoryWithSubcategories}`
			);
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},

	createCategory: async (token, newCategory) => {
		try {
			const response = await axiosInstance.post(
				`${config.development.api.urlBase}${config.development.api.categories.createCategory}`,
				newCategory,
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
	updateCategory: async (token, id, newCategory) => {
		try {
			const response = await axiosInstance.put(
				`${
					config.development.api.urlBase
				}${config.development.api.categories.updateCategory.replace(
					':id',
					id
				)}`,
				newCategory,
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
	deleteCategory: async (token, id) => {
		try {
			const response = await axiosInstance.delete(
				`${
					config.development.api.urlBase
				}${config.development.api.categories.deleteCategory.replace(
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
	getSubcategoriesByCategory: async (id) => {
		try {
			const response = await axiosInstance.get(
				`${
					config.development.api.urlBase
				}${config.development.api.categories.getSubcategoriesByCategory.replace(
					':id',
					id
				)}`
			);
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
};
