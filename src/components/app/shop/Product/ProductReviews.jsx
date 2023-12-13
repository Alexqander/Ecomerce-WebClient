'use client';
import React, { useState } from 'react';
import { useAuthContext } from '@/context/authContext';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import FormReview from './FormReview';
import CardReview from './CardReview';

export default function ProductReviews({ Reviews, productId }) {
	const [review, setReview] = useState(false);
	const { user } = useAuthContext();
	const router = useRouter();
	console.log(Reviews);
	return (
		<div className="flex flex-col ">
			<h4 className="font-montserrat font-medium text-lg text-gray-400">
				Reviews
			</h4>
			<span className="font-montserrat font-medium text-base text-gray-500 mb-5">
				Conoce lo que los compradores opinan sobre este producto
			</span>
			<div className="flex flex-col gap-10 justify-center items-start">
				{Reviews.length > 0 ? (
					Reviews.map((review) => {
						return <CardReview key={review.id} review={review} />;
					})
				) : (
					<p className="font-montserrat font-normal text-base text-primary mb-5">
						Aun no hay reseñas , se el primero en dejar una opinion sobre este
						producto
					</p>
				)}
				{user.id ? (
					<Button
						variant="faded"
						color="primary"
						onClick={() => setReview(true)}>
						Dejar una reseña
					</Button>
				) : (
					<Button
						variant="faded"
						color="secondary"
						onClick={() => router.push('/auth')}>
						Inicia sesion para dejar una reseña
					</Button>
				)}
			</div>

			{review && <FormReview productId={productId} />}
		</div>
	);
}
