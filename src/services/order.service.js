import axiosInstance from '@/utils/axiosInstance';
import config from '@/config/index.js';

export const orderService = {
	getOrderItem: async (token, idOrder) => {
		try {
			const response = await axiosInstance.get(
				`${
					config.development.api.urlBase
				}${config.development.api.orders.getOrderItem.replace(':id', idOrder)}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			console.log(response);
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	getRepartidores: async () => {
		try {
			const response = await axiosInstance.get(
				`${config.development.api.urlBase}${config.development.api.orders.getRepartidores}`
			);
			console.log(response);
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	asignRepartidor: async (idOrder, data) => {
		try {
			const response = await axiosInstance.patch(
				`${
					config.development.api.urlBase
				}${config.development.api.orders.asignRepartidor.replace(
					':id',
					idOrder
				)}`,
				data
			);
			console.log(response);
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
};
