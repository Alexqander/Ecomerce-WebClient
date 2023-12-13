import React from 'react';
import CardOrderRepartidor from '../cards/CardOrderRepartidor';

export default function OrdersRepartidorList({ orders }) {
	return (
		<div className="w-full">
			{orders &&
				orders.map((item) => <CardOrderRepartidor key={item.id} item={item} />)}
		</div>
	);
}
