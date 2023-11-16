import FormProduct from '@/components/app/vendedor/forms/FormProduct';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import React from 'react';

export default function RegisterProductPage() {
	return (
		<div className="container mx-auto mt-10">
			<Link
				href="/dashboard/vendedor/products"
				className="flex items-center mb-10">
				<ArrowLeftIcon className="h-6 w-6 text-blue-500 cursor-pointer" />
				<p className="text-blue-500">Regresar</p>
			</Link>
			<FormProduct />
		</div>
	);
}
