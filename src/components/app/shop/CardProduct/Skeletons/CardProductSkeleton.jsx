import React from 'react';

export default function CardProductSkeleton() {
	return (
		<div className="max-w-sm rounded overflow-hidden relative block shadow-lg animate-pulse">
			<div className="w-full h-[288px] bg-gray-300 overflow-hidden relative"></div>
			<div className="flex flex-col gap-2 px-6 py-4">
				<div className="h-14 my-5">
					<div className="h-6 bg-gray-300 rounded"></div>
					<div className="mt-2 h-6 bg-gray-300 rounded w-3/4"></div>
				</div>
				<div className="h-6 bg-gray-300 rounded w-1/2"></div>
				<div className="h-6 bg-gray-300 rounded w-1/4"></div>
				<div className="mt-4 h-10 bg-blue-300 rounded"></div>
			</div>
		</div>
	);
}
