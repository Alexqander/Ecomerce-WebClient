import { ProfileSellerService } from '@/services/profileSeller.service';
import React from 'react';
import { cookies } from 'next/headers';
import TableProducts from '@/components/app/vendedor/TableProducts';
import HeaderDashBoard from '@/components/app/Header/HeaderDashBoard';

async function getProductsStore() {
	const cookiesStore = cookies();
	const token = cookiesStore.get('NEXT_JS_AUTH_TOKENS')
		? JSON.parse(cookiesStore.get('NEXT_JS_AUTH_TOKENS').value)
		: null;
	const userData = cookiesStore.get('user')
		? JSON.parse(cookiesStore.get('user').value)
		: null;
	const { sellerProfile } = userData;
	const { store } = sellerProfile;
	try {
		const { data } = await ProfileSellerService.getProductsStore(
			token.token,
			store[0].id
		);
		return data;
	} catch (error) {
		console.log('Error al obtener los productos');
		/* console.error(error); */
	}
}

export default async function page() {
	const columns = [
		{ uid: 'name', name: 'Name' },
		{ uid: 'price', name: 'Price' },
		{ uid: 'description', name: 'Description' },
		{ uid: 'storeId', name: 'Store ID' },
		{ uid: 'subCategoryId', name: 'Sub Category ID' },
		{ uid: 'SubCategory', name: 'SubCategory' },
		{ uid: 'stock', name: 'Stock' },
		{ uid: 'category', name: 'Category' },
		{ uid: 'Images', name: 'Images' },
	];

	const statusOptions = [];

	const products = await getProductsStore();
	return (
		<div className="container mx-auto mt-10">
			<HeaderDashBoard title=" 🧩 Productos" />
			<div className="h-screen my-10">
				<TableProducts
					data={products.data}
					statusOptions={statusOptions}
					columns={columns}
				/>
			</div>
		</div>
	);
}
