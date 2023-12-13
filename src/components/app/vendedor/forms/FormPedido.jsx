'use client';
import React, { useEffect, useState } from 'react';
import { Input, Select, SelectItem } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { orderService } from '@/services/order.service';
import { Button } from '@nextui-org/button';
export default function FormPedido({ idOrder }) {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		// ... otros hooks de useForm
	} = useForm({
		// Aquí se pasa el contexto a useForm, no directamente a Yup
	});

	const [repartidores, setRepartidores] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const onSubmit = async (data) => {
		console.log('✅ Data', data);
		try {
			const { data: response } = await orderService.asignRepartidor(
				idOrder,
				data
			);
			console.log('✅ Response', response);
			toast.success('Pedido enviado');
		} catch (error) {
			console.log(error);
			toast.error('Error al enviar el pedido');
		}
	};
	useEffect(() => {
		const fetchRepartidores = async () => {
			try {
				const { data } = await orderService.getRepartidores();
				console.log('🛠️ Repartidores ', data.data);
				if (data) {
					setRepartidores(data.data);
				}
			} catch (error) {
				console.log(error);
				toast.error('Error al cargar los repartidores');
			}
		};
		fetchRepartidores();
	}, []);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<div className="col-span-2 mt-10">
				<h4 className="font-montserat font-normal text-lg">
					Asignar Repartidor
				</h4>
				<Select
					{...register('repartidor')}
					color={errors.repartidor ? 'danger' : 'success'}
					isInvalid={errors.repartidor}
					errorMessage={errors.repartidor?.message}
					value={selectedCategory}
					label="Rpartidor"
					placeholder="Selecciona una repartidor"
					size="lg"
					variant="bordered"
					className="">
					{repartidores.map((repartidor) => (
						<SelectItem
							key={repartidor.courierProfile.id}
							value={repartidor.courierProfile.id}>
							{repartidor.name}
						</SelectItem>
					))}
				</Select>
			</div>
			<div className="col-span-2">
				<Input
					type="date"
					variant="bordered"
					size="lg"
					label="Fecha de entrega"
					placeholder="Fecha de entrega"
					{...register('fechaEntrega')}></Input>
			</div>
			<div className="col-span-2">
				<Button
					variant="flat"
					type="submit"
					color="success"
					size="lg"
					loading={isSubmitting}>
					Enviar pedido
				</Button>
			</div>
		</form>
	);
}
