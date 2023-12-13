import config from '@/config/index.js';
import axiosInstance from '@/utils/axiosInstance';

export const AuthService = {
	login: async ({ email, password }) => {
		try {
			const response = await axiosInstance.post(
				`${config.development.api.urlBase}${config.development.api.auth.login}`,
				{
					email,
					password,
				}
			);
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	registerAndSign: async (newUser) => {
		try {
			const response = await axiosInstance.post(
				`${config.development.api.urlBase}${config.development.api.auth.register}`,
				newUser
			);
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
	logOut: async () => {
		try {
			const response = await axiosInstance.get(
				`${config.development.api.urlBase}${config.development.api.auth.logout}`
			);
			return response;
		} catch (error) {
			console.log(error);
			return error;
		}
	},
};
