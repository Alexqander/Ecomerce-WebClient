import React from 'react';

export default function NotOrders() {
	return (
		<div className="w-full mt-20">
			<div className="flex flex-col items-center">
				<span className="font-montserrat font-semibold text-2xl text-secondary">
					No tienes pedidos
				</span>
				<span className="font-montserrat font-normal text-gray-500 mt-2">
					Aún no has realizado ninguna compra
				</span>
			</div>
		</div>
	);
}
