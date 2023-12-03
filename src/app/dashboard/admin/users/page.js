import HeaderDashBoard from '@/components/app/Header/HeaderDashBoard';
import { AdminService } from '@/services/admin.service';
import React from 'react';
import { cookies } from 'next/headers';
import TableUsers from '@/components/app/tables/TableUsers';

async function getUsers() {
	const cookiesStore = cookies();
	const token = cookiesStore.get('NEXT_JS_AUTH_TOKENS')
		? JSON.parse(cookiesStore.get('NEXT_JS_AUTH_TOKENS').value)
		: null;
	try {
		const { data } = await AdminService.getUsers(token.token);
		const users = data.data;
		return users;
	} catch (error) {
		console.log(error);
	}
}

export default async function UsersAdminPage() {
	const users = await getUsers();
	console.log(users);
	const columns = [
		{ uid: 'name', name: 'Nombre' },
		{ uid: 'email', name: 'Email' },
		{ uid: 'lastName', name: 'Apellidos' },
		{ uid: 'phoneNumber', name: 'Telefono' },
		{ uid: 'profilePicture', name: 'Foto de Perfil' },
		{ uid: 'role', name: 'Role' },
	];

	const statusOptions = [];

	return (
		<div className="container mx-auto mt-10">
			<HeaderDashBoard title="🫂 Usuarios " />
			<div className="h-screen my-10">
				<TableUsers
					data={users}
					columns={columns}
					statusOptions={statusOptions}
				/>
			</div>
		</div>
	);
}
