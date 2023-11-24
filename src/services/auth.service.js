import config from '@/config/index.js';
import axiosInstance from '@/utils/axiosInstance';

export const AuthService = {
	login: async ({ email, password }) => {
		console.log({ email, password });
		const response = await axiosInstance.post(
			`${config.development.api.auth.login}`,
			{
				email,
				password,
			}
		);
		return response;
	},
	registerAndSign: async (newUser) => {
		const response = await axiosInstance.post(
			`${config.development.api.auth.register}`,
			newUser
		);
		return response;
	},
	logOut: async () => {
		const response = await axiosInstance.get(
			`${config.development.api.auth.logout}`
		);
		return response;
	},
};
