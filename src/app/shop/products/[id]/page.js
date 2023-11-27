import ImageGridCarrusel from '@/components/app/shop/Product/ImageGridCarrusel';
import ProductDetails from '@/components/app/shop/Product/ProductDetails';
import { ProductsService } from '@/services/products.service';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

async function getProductInfo(id) {
	const { data } = await ProductsService.getProduct(id);
	const product = data.data;
	return product;
}

export default async function ProductDetailPage({ params }) {
	const product = await getProductInfo(params.id);
	return (
		<div className="w-full h-[100vh-65px]">
			<div className="container mx-auto">
				<Link
					href="/shop"
					className="text-primary flex gap-2 items-center mb-5">
					<ArrowLeftIcon className="w-5 h-5" />
					<span className="font-montserrat font-semibold text-lg">Atras</span>
				</Link>
				<div className="grid grid-cols-2 gap-10">
					<div className="col-span-2 lg:col-span-1">
						<ImageGridCarrusel images={product.Images} />
					</div>
					<div className="col-span-2 lg:col-span-1 px-12">
						<ProductDetails product={product} />
					</div>
				</div>
			</div>
		</div>
	);
}
