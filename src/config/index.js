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
				getProducts: '/products/',
				findProducts: '/products/search',
				getProduct: '/products/:id',
				createProduct: '/products/upload',
			},
			categories: {
				getCategories: '/categories/',
				getAllCategories: '/categories/all',
				createCategory: '/categories',
				updateCategory: '/categories/:id',
				deleteCategory: '/categories/:id',
				getSubcategoriesByCategory: '/categories/sub/:id',
				getCategory: '/categories/:id',
				getSubcategories: '/categories/subcategories/',
			},
			orders: {
				getOrders: '/orders',
				getOrder: '/orders/:id',
			},
			users: {
				getUsers: '/users',
				getUser: '/users/:id',
			},
			profileSeller: {
				getProfileSeller: '/profileSeller',
				getProductsStore: '/profileSeller/profile/products/:id',
				updateProfileSeller: '/profileSeller',
				deleteProfileSeller: '/profileSeller',
			},
			carts: {
				getCarts: '/carts',
				getCart: '/carts/:id',
			},
			reviews: {
				getReviews: '/reviews',
				getReview: '/reviews/:id',
			},
			wishList: {
				getWishList: '/wishList',
				getWishListByUser: '/wishList/:id',
			},
		},
	},
	production: {
		api: {
			url: 'https://fast-shop-ecomerce.vercel.app/api',
		},
	},
};
