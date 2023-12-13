import React, { useState } from 'react';
import { Textarea, Button } from '@nextui-org/react';
import StarRating from './StarRating';
import { useForm } from 'react-hook-form';
import { useAuthContext } from '@/context/authContext';

export default function FormReview({ productId }) {
	const [rating, setRating] = useState(0);
	const { user } = useAuthContext();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({});

	const onSubmit = (data) => {
		const newReview = {
			...data,
			rating,
			productId,
			userId: user.id,
		};
		console.log(newReview);
	};

	// Manejar el envío del formulario

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-4 mt-10 items-end lg:px-0 px-5">
			<StarRating rating={rating} setRating={setRating} />
			<Textarea
				variant="bordered"
				label="Comentario"
				placeholder="Escribe tu comentario aqui..."
				className="w-full"
				{...register('comment')}
			/>
			<Button variant="solid" color="primary" className="w-24" type="submit">
				Enviar
			</Button>
		</form>
	);
}
