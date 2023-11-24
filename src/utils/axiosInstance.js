import axios from 'axios';
import Cookies from 'js-cookie';
import config from '@/config';
const axiosInstance = axios.create({
	baseURL: config.development.api.urlBase,
});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = Cookies.get('NEXT_JS_AUTH_TOKENS')
			? JSON.parse(Cookies.get('NEXT_JS_AUTH_TOKENS'))
			: null;
		console.log('----------- Este es el token -----');
		console.log(token);
		if (token) {
			config.headers.Authorization = `Bearer ${token.token}`;
		}
		console.log('----------- Este es el config.headers.Authorization -----');
		console.log(config.headers.Authorization);
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosInstance;
