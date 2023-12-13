'use client';
import React from 'react';
import TableVentas from '../TableVentas';

export default function SectionData() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2">
			<div className="flex flex-col">
				<h4>Ultimas ventas</h4>
				<TableVentas />
			</div>
			<div className="flex flex-col">
				<h4>Pedidos</h4>
				<TableVentas />
			</div>
			<div className="flex flex-col">
				<h4>Transacciones</h4>
				<TableVentas />
			</div>
			<div className="flex flex-col">
				<h4>Tiendas</h4>
				<TableVentas />
			</div>
		</div>
	);
}
