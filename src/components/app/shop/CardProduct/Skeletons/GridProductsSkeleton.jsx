import React from 'react';
import CardProductSkeleton from './CardProductSkeleton';

export default function GridProductsSkeleton() {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
			{Array.from({ length: 9 }, (_, i) => (
				<CardProductSkeleton key={i} />
			))}
		</div>
	);
}
