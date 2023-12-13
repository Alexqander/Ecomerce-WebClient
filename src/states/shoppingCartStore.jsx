import { create } from 'zustand';

const useCartStore = create((set) => ({
	cart: [],

	// Actualiza el carrito con los datos obtenidos desde la API
	setCart: (newCart) => set({ cart: newCart }),

	addToCart: (product) =>
		set((state) => {
			const cartProduct = state.cart.find((p) => p.id === product.id);
			if (cartProduct) {
				// Si el producto ya está en el carrito, aumentamos la cantidad
				return {
					cart: state.cart.map((p) =>
						p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
					),
				};
			} else {
				// Si no está, lo agregamos al carrito
				return { cart: [...state.cart, { ...product, quantity: 1 }] };
			}
		}),

	removeFromCart: (productId) =>
		set((state) => ({
			cart: state.cart.filter((p) => p.id !== productId),
		})),

	incrementQuantity: (productId) =>
		set((state) => ({
			cart: state.cart.map((p) =>
				p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
			),
		})),

	decrementQuantity: (productId) =>
		set((state) => ({
			cart: state.cart
				.map((p) => {
					if (p.id === productId) {
						const newQuantity = p.quantity - 1;
						return newQuantity > 0 ? { ...p, quantity: newQuantity } : p;
					}
					return p;
				})
				.filter((p) => p.quantity > 0), // Eliminar el producto si la cantidad es 0
		})),

	clearCart: () => set({ cart: [] }),
}));
export default useCartStore;
