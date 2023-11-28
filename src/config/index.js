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
				getCategoryWithSubcategories: '/categories/with/all',
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
				getUserInfo: '/users/:id',
				updateProfilePhoto: '/users/image/:id',
			},
			admin: {
				getUsers: '/users',
				getUserInfo: '/users/:id',
				products: '/admin/products',
				orders: '/admin/orders',
				analytics: '/admin/analytics',
			},
			profileSeller: {
				getProfileSeller: '/profileSeller',
				getProductsStore: '/profileSeller/profile/products/:id',
				updateProfileSeller: '/profileSeller',
				deleteProfileSeller: '/profileSeller',
			},
			profileBuyer: {
				createCart: '/profileBuyer/profile/shoppingCart',
				getCart: '/profileBuyer/profile/shoppingCart/:id',
				saveCart: '/profileBuyer/profile/shoppingCart/:id',
				deleteProductCart: '/profileBuyer/profile/shoppingCart/remove/:id',
				deleteCart: '/profileBuyer/profile/shoppingCart/:id',
				getCartDetail: '/profileBuyer/profile/shoppingCart/detail/:id',
			},
			reviews: {
				getReviews: '/reviews',
				getReview: '/reviews/:id',
			},
			wishList: {
				getWishList: '/wishList',
				getWishListByUser: '/wishList/:id',
			},
			payments: {
				createSessionPay: '/payment/create-checkout-session',
			},
		},
	},
	production: {
		api: {
			url: 'https://fast-shop-ecomerce.vercel.app/api',
		},
	},
};
