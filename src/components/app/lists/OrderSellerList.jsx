import React from 'react';
import CardOrderSeller from '../cards/CardOrderSeller';

export default function OrderSellerList({ orderItems }) {
	return (
		<div className="w-full">
			{orderItems &&
				orderItems.map((item) => <CardOrderSeller key={item.id} item={item} />)}
		</div>
	);
}
