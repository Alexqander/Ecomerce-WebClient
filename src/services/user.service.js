import axiosInstance from '@/utils/axiosInstance';
import config from '@/config';

export const UserService = {
	getUserInfo: async (id) => {
		try {
			const response = await axiosInstance.get(
				`${config.development.api.users.getUserInfo.replace(':id', id)}`
			);
			return response;
		} catch (error) {
			console.log(error);
		}
	},
	changeProfilePhoto: async (id, data) => {
		try {
			const response = await axiosInstance.patch(
				`${config.development.api.users.updateProfilePhoto.replace(':id', id)}`,
				data
			);
			return response;
		} catch (error) {
			console.log(error);
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
};
