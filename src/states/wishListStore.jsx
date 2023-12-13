import { create } from 'zustand';

const useWishListStore = create((set) => ({
	wishList: [],

	// * Actualiza la lista de deseos con los datos obtenidos desde la API
	setWishList: (newWishList) => set({ wishList: newWishList }),

	addToWishList: (product) =>
		set((state) => {
			const wishListProduct = state.wishList.find((p) => p.id === product.id);
			if (wishListProduct) {
				// Si el producto ya está en la lista de deseos, aumentamos la cantidad
				return {
					wishList: state.wishList.map((p) =>
						p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
					),
				};
			} else {
				// * Si no está, lo agregamos a la lista de deseos
				return { wishList: [...state.wishList, { ...product, quantity: 1 }] };
			}
		}),

	removeFromWishList: (productId) =>
		set((state) => ({
			wishList: state.wishList.filter((p) => p.id !== productId),
		})),

	incrementQuantity: (productId) =>
		set((state) => ({
			wishList: state.wishList.map((p) =>
				p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
			),
		})),

	decrementQuantity: (productId) =>
		set((state) => ({
			wishList: state.wishList
				.map((p) => {
					if (p.id === productId) {
						const newQuantity = p.quantity - 1;
						return newQuantity > 0 ? { ...p, quantity: newQuantity } : p;
					}
					return p;
				})
				.filter((p) => p.quantity > 0), // Eliminar el producto si la cantidad es 0
		})),

	clearWishList: () => set({ wishList: [] }),
}));

export default useWishListStore;
