import { CategoriesService } from '@/services/categories.service';

/* import { Divider } from '@nextui-org/react'; */
import { Suspense } from 'react';
import FiltersCategories from './FiltersCategories';
import FiltersPrices from './FiltersPrices';

async function getCategories() {
	const { data } = await CategoriesService.getCategories();
	const { data: categories } = data;
	return categories.categories;
}

export default async function FiltersShop() {
	const categories = await getCategories();
	return (
		<div className="hidden xl:block fixed top-16 h-screen max-w-2xl inset-y-0 left-0 mt-10 px-10">
			<div className="flex flex-col">
				<h4 className="font-montserrat text-2xl font-medium">Filtrar</h4>
				<div className="mt-10">
					<h5 className="font-montserrat font-medium text-lg mb-5">Precio</h5>
					<FiltersPrices />
					<div className="mb-6 mt-3 border border-gray-700  border-b-medium"></div>
					<div className="my-10">
						<h5 className="font-montserrat font-medium text-lg mb-2">
							Categoria
						</h5>
						<Suspense fallback={<p>Cargando informacion...</p>}>
							<FiltersCategories categories={categories} />
						</Suspense>
					</div>
				</div>
			</div>
		</div>
	);
}
