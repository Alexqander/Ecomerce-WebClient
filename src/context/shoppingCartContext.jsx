'use client';

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

export const ShoppingCartContext = createContext({
	addToCart: () => {},
	removeFromCart: () => {},
});

export default function ShoppingCartContextProvider({ children }) {
	const value = useMemo(() => ({}), []);
	return (
		<ShoppingCartContext.Provider value={value}>
			{children}
		</ShoppingCartContext.Provider>
	);
}
