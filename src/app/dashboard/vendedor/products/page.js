import { ProfileSellerService } from '@/services/profileSeller.service';
import React from 'react';
import { cookies } from 'next/headers';
import TableProducts from '@/components/app/vendedor/TableProducts';
import { toast } from 'sonner';

async function getProductsStore() {
	const cookiesStore = cookies();
	const token = cookiesStore.get('NEXT_JS_AUTH_TOKENS')
		? JSON.parse(cookiesStore.get('NEXT_JS_AUTH_TOKENS').value)
		: null;
	const userData = cookiesStore.get('user')
		? JSON.parse(cookiesStore.get('user').value)
		: null;
	const { sellerProfile } = userData;
	try {
		const { data } = await ProfileSellerService.getProductsStore(
			token.token,
			sellerProfile.store.id
		);
		return data;
	} catch (error) {
		toast.error('Error al cargar los productos');
	}
}

export default async function page() {
	const columns = [
		{ uid: 'name', name: 'Name' },
		{ uid: 'price', name: 'Price' },
		{ uid: 'description', name: 'Description' },
		{ uid: 'storeId', name: 'Store ID' },
		{ uid: 'subCategoryId', name: 'Sub Category ID' },
		{ uid: 'Images', name: 'Images' },
	];

	const statusOptions = [];

	const products = await getProductsStore();
	return (
		<div className="container mx-auto">
			<h4 className="my-5 font-montserrat font-semibold text-2xl">Productos</h4>
			<div className=" h-screen ">
				<TableProducts
					data={products.data}
					statusOptions={statusOptions}
					columns={columns}
				/>
			</div>
		</div>
	);
}
