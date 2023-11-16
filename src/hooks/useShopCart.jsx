import { useContext } from 'react';
import { ShoppingCartContext } from '@/context/shoppingCartContext';

export function useShoppingCartContext() {
	const context = useContext(ShoppingCartContext);
	if (context === undefined) {
		throw new Error('useCart must be used within a CartProvider');
	}

	return context;
}
