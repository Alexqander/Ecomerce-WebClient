// eslint-disable-next-line import/no-anonymous-default-export
export default {
	development: {
		api: {
			urlBase: 'http://localhost:4000/apiEcomerce/1.0',
			auth: {
				login: '/auth/login',
				register: '/auth/register',
				logout: '/auth/logOutSession/',
				logoutAllSessions: '/auth/logOutAll',
			},
			products: {
				getProducts: '/products',
				getProduct: '/products/:id',
			},
			categories: {
				getCategories: '/categories',
				getCategory: '/categories/:id',
			},
			orders: {
				getOrders: '/orders',
				getOrder: '/orders/:id',
			},
			users: {
				getUsers: '/users',
				getUser: '/users/:id',
			},
			carts: {
				getCarts: '/carts',
				getCart: '/carts/:id',
			},
		},
	},
	production: {
		api: {
			url: 'https://fast-shop-ecomerce.vercel.app/api',
		},
	},
};
