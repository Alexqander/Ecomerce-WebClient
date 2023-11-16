import React from 'react';
import CardProduct2 from './CardProduct2';

export default function GridProducts({ products }) {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
			{products.products.map((product) => {
				return <CardProduct2 product={product} key={product.id} />;
			})}
		</div>
	);
}
