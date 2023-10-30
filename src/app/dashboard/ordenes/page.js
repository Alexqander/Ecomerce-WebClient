import TableOrdenes from '@/components/app/tables/TableOrdenes';

async function getOrden() {
	const resp = await fetch('http://localhost:4000/tickets');
	const data = await resp.json();
	return data;
}

export default async function Ordenes() {
	const users = await getOrden();
	
	return (
		<>
			<TableOrdenes users={users} />
		</>
	);
}
