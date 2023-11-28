import axiosInstance from '@/utils/axiosInstance';
import config from '@/config/index.js';

export const paymentService = {
	createSessionPayment: async (cartId) => {
		const response = await axiosInstance.post(
			`${config.development.api.urlBase}${config.development.api.payments.createSessionPay}`,
			{
				cartId: cartId,
			}
		);
		return response;
	},
};
