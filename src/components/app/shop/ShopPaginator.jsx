'use client';
import { Button, Pagination } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function ShopPaginator({ actualPage, totalPages }) {
	const router = useRouter();
	return (
		<div className="flex flex-col gap-5 my-10">
			<p className="text-small text-default-500">Pagina Actual: {actualPage}</p>
			<Pagination
				total={totalPages}
				color="secondary"
				page={actualPage}
				onChange={(e) => {
					router.push(`/shop?page=${e}`);
				}}
			/>
			<div className="flex gap-2">
				<Button
					size="sm"
					variant="flat"
					color="secondary"
					onPress={() =>
						router.push(
							`/shop?page= ${actualPage > 1 ? actualPage - 1 : actualPage}`
						)
					}>
					Anterior
				</Button>
				<Button
					size="sm"
					variant="flat"
					color="secondary"
					onPress={() =>
						router.push(
							`/shop?page= ${
								actualPage < totalPages ? actualPage + 1 : actualPage
							}`
						)
					}>
					Siguiente
				</Button>
			</div>
		</div>
	);
}
