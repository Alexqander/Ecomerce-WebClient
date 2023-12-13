import axiosInstance from '@/utils/axiosInstance';
import config from '@/config/index.js';

export const repartidorService = {
	getOrdersToDeliver: async (token, id) => {
		try {
			const response = await axiosInstance.get(
				`${
					config.development.api.urlBase
				}${config.development.api.repartidorProfile.getOrdersToDeliver.replace(
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
	changeDeliverStatus: async (token, id, status) => {
		try {
			const response = await axiosInstance.patch(
				`${
					config.development.api.urlBase
				}${config.development.api.profileSeller.getStatsSeller.replace(
					':id',
					id
				)}`,
				{
					status,
				},
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
