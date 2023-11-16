import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function CheckOutLayout({ children }) {
	return (
		<div className="container mx-auto h-full">
			<div className="flex  text-amber-400  dark:text-amber-300 justify-center items-center gap-5">
				<ShoppingBagIcon className="w-10 h-10" />
				<h2 className="font-montserrat font-bold text-2xl">Checkout</h2>
			</div>
			{children}
		</div>
	);
}
