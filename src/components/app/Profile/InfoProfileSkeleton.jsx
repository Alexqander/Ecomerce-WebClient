export default function InfoProfileSkeleton() {
	return (
		<div className="container mx-auto my-20 animate-pulse">
			<div className="space-y-12">
				<div className="pb-12">
					<div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>{' '}
					{/* Título */}
					<div className="h-4 bg-gray-300 rounded w-3/4 mb-10"></div>{' '}
					{/* Subtítulo */}
					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="col-span-full">
							<div className="h-24 bg-gray-300 rounded w-full mb-6"></div>{' '}
							{/* Avatar */}
						</div>
					</div>
				</div>

				{/* Sección de información personal */}
				<div className="border-b border-gray-900/10 pb-12">
					<div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>{' '}
					{/* Título */}
					<div className="h-4 bg-gray-300 rounded w-3/4 mb-10"></div>{' '}
					{/* Subtítulo */}
					{/* Inputs */}
					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="h-10 bg-gray-300 rounded col-span-3 mb-4"></div>
						<div className="h-10 bg-gray-300 rounded col-span-3 mb-4"></div>
						<div className="h-10 bg-gray-300 rounded col-span-4 mb-4"></div>
						<div className="h-10 bg-gray-300 rounded col-span-4 mb-4"></div>
						{/* ... otros inputs */}
					</div>
				</div>

				{/* Sección de notificaciones */}
				<div className="border-b border-gray-900/10 pb-12">
					<div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>{' '}
					{/* Título */}
					<div className="h-4 bg-gray-300 rounded w-3/4 mb-10"></div>{' '}
					{/* Subtítulo */}
					{/* Checkbox y radio button groups */}
					<div className="mt-10 space-y-10">
						<div className="h-4 bg-gray-300 rounded w-1/4 mb-6"></div>
						<div className="h-4 bg-gray-300 rounded w-1/4 mb-6"></div>
						{/* ... */}
					</div>
				</div>
			</div>

			{/* Botones */}
			<div className="mt-6 flex items-center justify-end gap-x-6">
				<div className="h-10 bg-gray-300 rounded w-20"></div>
				<div className="h-10 bg-gray-300 rounded w-20"></div>
			</div>
		</div>
	);
}
