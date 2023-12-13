import axiosInstance from '@/utils/axiosInstance';
import config from '@/config/index.js';

export const DashboardService = {
	getSales: async (token) => {
		try {
			const response = await axiosInstance.get(
				`${config.development.api.urlBase}${config.development.api.dashboard.sales}`,
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
	getSalesByDate: async (token, date) => {
		const response = await axiosInstance.get();
	},
};
