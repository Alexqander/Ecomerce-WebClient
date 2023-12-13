import { formatDate } from '@/utils/utils';
import React from 'react';
import { User } from '@nextui-org/react';
import StarRating from './StarRating';

export default function CardReview({ review }) {
	console.log(
		'🚀 ~ file: CardReview.jsx ~ line 1 ~ CardReview ~ review',
		review
	);
	return (
		<div className="flex justify-start">
			<div className="flex flex-col gap-4">
				<User
					name={review.user.name}
					description={review.user.lastName}
					avatarProps={{
						src: review.user.profilePicture,
					}}
				/>

				<span className="font-montserrat font-normal text-base">
					{review.comment}
				</span>
				<StarRating rating={review.rating} />
			</div>
		</div>
	);
}
