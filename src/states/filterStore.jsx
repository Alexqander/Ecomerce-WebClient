import { create } from 'zustand';

const useFilterStore = create((set) => ({
	filters: {
		price: null,
		category: null,
	},
	setPriceFilter: (price) =>
		set((state) => ({ filters: { ...state.filters, price } })),
	setCategoryFilter: (category) =>
		set((state) => ({ filters: { ...state.filters, category } })),
}));

export default useFilterStore;
