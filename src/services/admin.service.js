import config from '@/config/index.js';
import axiosInstance from '@/utils/axiosInstance';

export const AdminService = {
	getUserInfo: async (token, id) => {
		try {
			const response = await axiosInstance.get(
				`${
					config.development.api.urlBase
				}${config.development.api.admin.getUserInfo.replace(':id', id)}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			return response;
		} catch (error) {
			console.log(error);
			return { isError: true, error };
		}
	},
	getUsers: async (token) => {
		try {
			const response = await axiosInstance.get(
				`${config.development.api.urlBase}${config.development.api.admin.getUsers}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			return response;
		} catch (error) {
			console.log(error);
			return { isError: true, error };
		}
	},
	getCategories: async () => {
		try {
			// const { data } = await CategoriesService.getCategoryWithSubcategories();
			// const categories = data.data;
			// console.log(categories);
			// return categories;
		} catch (error) {
			console.log(error);
			// toast.error('Ocurrio un error al obtener las categorias');
		}
	},
	getProducts: async () => {
		try {
			// const { data } = await CategoriesService.getCategoryWithSubcategories();
			// const categories = data.data;
			// console.log(categories);
			// return categories;
		} catch (error) {
			console.log(error);
			// toast.error('Ocurrio un error al obtener los productos');
		}
	},
	getOrders: async () => {
		try {
			// const { data } = await CategoriesService.getCategoryWithSubcategories();
			// const categories = data.data;
			// console.log(categories);
			// return categories;
		} catch (error) {
			console.log(error);
			// toast.error('Ocurrio un error al obtener las ordenes');
		}
	},
	getAnalytics: async () => {
		try {
			// const { data } = await CategoriesService.getCategoryWithSubcategories();
			// const categories = data.data;
			// console.log(categories);
			// return categories;
		} catch (error) {
			console.log(error);
			// toast.error('Ocurrio un error al obtener las ordenes');
		}
	},
	getStats: async (token) => {
		try {
			const response = await axiosInstance.get(
				`${config.development.api.urlBase}${config.development.api.admin.stats}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			return response;
		} catch (error) {
			console.log(error);
			return { isError: true, error };
		}
	},
	getTransactions: async (token) => {
		try {
			const response = await axiosInstance.get(
				`${config.development.api.urlBase}${config.development.api.admin.transactions}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			return response;
		} catch (error) {
			console.log(error);
			return { isError: true, error };
		}
	},
};
