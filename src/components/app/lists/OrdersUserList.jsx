'use client';
import React from 'react';
import { Button } from '@nextui-org/react';
import { formatDate } from '@/utils/utils';
import { useRouter } from 'next/navigation';

export default function OrdersUserList({ orders }) {
	const router = useRouter();
	return (
		<div className="grid grid-cols-1 mt-10 gap-3">
			{orders.map((order) => (
				<div
					key={order.id}
					className="flex justify-between items-center shadow-md p-10 rounded-sm dark:border dark:border-gray-800">
					<div className="flex flex-col">
						<span className="font-montserrat font-semibold">
							{formatDate(order.orderedAt)}
						</span>
						<span className="my-5">{order.id}</span>
						<span className="font-montserrat font-semibold">
							Estado del pedido
						</span>
						<span className="font-montserrat font-normal text-success">
							{order.orderStatus}
						</span>
						<span className="font-montserrat font-semibold my-2">
							Fecha de entrega
							<p className="font-montserrat font-normal text-secondary">
								{order.deliverDate
									? formatDate(order.deliverDate)
									: 'Pendiente'}
							</p>
						</span>
					</div>
					<Button
						variant="flat"
						color="primary"
						size="lg"
						onClick={() => router.push(`/dashboard/user/orders/${order.id}`)}>
						Ver detalles
					</Button>
				</div>
			))}
		</div>
	);
}
