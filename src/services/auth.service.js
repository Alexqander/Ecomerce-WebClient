import axios from 'axios';
import config from '@/config/index.js';
export const AuthService = {
	login: async ({ email, password }) => {
		console.log({ email, password });
		const response = await axios.post(
			`${config.development.api.urlBase}${config.development.api.auth.login}`,
			{
				email,
				password,
			}
		);
		console.log(response);

		return response;
	},
	register: async ({ name, email, phone, password }) => {
		const response = await axios.post(
			`${config.development.api.auth}${config.development.api.auth.register}`,
			{
				name,
				email,
				phone,
				password,
			}
		);
		const data = await response.json();
		return data;
	},
	logOut: async (token) => {
		const response = await axios.get(
			`${config.development.api.urlBase}${config.development.api.auth.logout}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	},
};
