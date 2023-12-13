import React from 'react';
import { StarIcon } from '@heroicons/react/24/outline';

export default function StarRating({ rating, setRating }) {
	const handleRating = (rate) => {
		if (setRating) {
			setRating(rate);
		}
	};
	return (
		<div className="flex">
			{[...Array(5)].map((star, index) => {
				index += 1;
				return (
					<span
						key={index}
						onClick={() => handleRating(index)}
						style={{ cursor: setRating ? 'pointer' : 'default' }}
						className={index <= rating ? 'text-secondary' : 'text-gray-500'}>
						<StarIcon className="w-6 h-6 fill-current" />
					</span>
				);
			})}
		</div>
	);
}
