import GridProducts from '@/components/app/shop/CardProduct/GridProducts';
import GridProductsSkeleton from '@/components/app/shop/CardProduct/Skeletons/GridProductsSkeleton';
import FiltersShop from '@/components/app/shop/Filters/FiltersSideBar';
import ShopPaginator from '@/components/app/shop/ShopPaginator';
import SearchBarShop from '@/components/app/shop/searchBar/SearchBarShop';
import { ProductsService } from '@/services/products.service';
import React, { Suspense } from 'react';

async function getProducts(page) {
	try {
		const { data } = await ProductsService.getProducts(page);
		const products = data.data;
		return products;
	} catch (error) {
		console.log(error);
	}
}
async function findProducts(search, category, minPrice, page) {
	try {
		const { data } = await ProductsService.findProducts(
			search,
			category,
			minPrice,
			page
		);
		const products = data.data;
		return products;
	} catch (error) {
		console.log(error);
	}
}

export default async function ShopMainPage({ searchParams }) {
	const page = Number(searchParams.page || 1);
	const limit = Number(searchParams.limit || 9);
	const searchQuery = searchParams.search ?? '';
	const category = searchParams.category ?? '';
	const minPrice = searchParams.minPrice ?? '';

	let products = [];

	searchQuery.length > 0 || category.length > 0 || minPrice.length > 0
		? (products = await findProducts(searchQuery, category, minPrice, page))
		: (products = await getProducts(page));
	return (
		<div className="w-full">
			<div className="container mx-auto max-w-4xl px-6 md:px-0 mb-10">
				<div className="my-5">
					<h1 className="text-2xl font-montserrat font-bold">Tienda</h1>
					<p className="text-gray-600 dark:text-gray-400 font-montserrat">
						Busca tus productos favoritos y añadelos al carrito de compras
					</p>
				</div>
				<SearchBarShop />
				<FiltersShop />
			</div>
			<div className="container mx-auto max-w-4xl px-6 md:px-0">
				<Suspense fallback={<GridProductsSkeleton />}>
					<GridProducts products={products} />
				</Suspense>
				<div className="flex justify-center my-6">
					<ShopPaginator actualPage={page} totalPages={products.totalPages} />
				</div>
			</div>
		</div>
	);
}
