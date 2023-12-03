import axios from 'axios';
import config from '@/config/index.js';
export const ProfileSellerService = {
	getProfileSeller: async (token) => {
		const response = await axios.get(
			`${config.development.api.urlBase}${config.development.api.profileSeller.getProfileSeller}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	},
	getProductsStore: async (token, id) => {
		const response = await axios.get(
			`${
				config.development.api.urlBase
			}${config.development.api.profileSeller.getProductsStore.replace(
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
	},
	getStatsSeller: async (token, id) => {
		const response = await axios.get(
			`${
				config.development.api.urlBase
			}${config.development.api.profileSeller.getStatsSeller.replace(
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
	},
	updateProfileSeller: async (token, newProfileSeller) => {
		const response = await axios.put(
			`${config.development.api.urlBase}${config.development.api.profileSeller.updateProfileSeller}`,
			newProfileSeller,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	},
	deleteProfileSeller: async (token) => {
		const response = await axios.delete(
			`${config.development.api.urlBase}${config.development.api.profileSeller.deleteProfileSeller}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return response;
	},
};
