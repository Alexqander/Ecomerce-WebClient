import axiosInstance from '@/utils/axiosInstance';
import config from '@/config/index.js';

export const paymentService = {
	createSessionPayment: async (cartId, buyerId) => {
		try {
			const response = await axiosInstance.post(
				`${config.development.api.urlBase}${config.development.api.payments.createSessionPay}`,
				{
					cartId: cartId,
					buyerId: buyerId,
				}
			);
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
};
