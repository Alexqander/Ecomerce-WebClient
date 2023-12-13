import axiosInstance from '@/utils/axiosInstance';
import config from '@/config/index.js';

export const DashboardService = {
	getSales: async (token) => {
		const response = await axiosInstance.get(
			`${config.development.api.urlBase}${config.development.api.dashboard.sales}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	},
	getSalesByDate: async (token, date) => {
		const response = await axiosInstance.get();
	},
};
