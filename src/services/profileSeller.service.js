import axiosInstance from '@/utils/axiosInstance';
import config from '@/config/index.js';
export const ProfileSellerService = {
	getProfileSeller: async (token) => {
		try {
			const response = await axiosInstance.get(
				`${config.development.api.urlBase}${config.development.api.profileSeller.getProfileSeller}`,
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
	getProductsStore: async (token, id) => {
		try {
			const response = await axiosInstance.get(
				`${
					config.development.api.urlBase
				}${config.development.api.profileSeller.getProductsStore.replace(
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
	getStatsSeller: async (token, id) => {
		try {
			const response = await axiosInstance.get(
				`${
					config.development.api.urlBase
				}${config.development.api.profileSeller.getStatsSeller.replace(
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
	updateProfileSeller: async (token, newProfileSeller) => {
		try {
			const response = await axiosInstance.put(
				`${config.development.api.urlBase}${config.development.api.profileSeller.updateProfileSeller}`,
				newProfileSeller,
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
	deleteProfileSeller: async (token) => {
		try {
			const response = await axiosInstance.delete(
				`${config.development.api.urlBase}${config.development.api.profileSeller.deleteProfileSeller}`,
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
	getOrdersPending: async (token, sellerId) => {
		try {
			const response = await axiosInstance.get(
				`${
					config.development.api.urlBase
				}${config.development.api.profileSeller.getOrdersPending.replace(
					':id',
					sellerId
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
