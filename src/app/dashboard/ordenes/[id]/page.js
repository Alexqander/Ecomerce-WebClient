import OrdenesCards from '@/components/app/cards/OrdenesCards';

// async function getOrdenes(id) {
// 	const resp = await fetch(`http://localhost:4000/tickets/${id}`);
// 	const data = await resp.json();
// 	return data;
// }

export default async function PostOrdenes({ params }) {
	// const ordenes = await getOrdenes(params.id);
	// const id = params.id;
	return (
		<>
		<OrdenesCards />
		</>
	);
}
