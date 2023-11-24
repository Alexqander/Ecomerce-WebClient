import InfoProfile from '@/components/app/Profile/InfoProfile';
import InfoProfileSkeleton from '@/components/app/Profile/InfoProfileSkeleton';
import { AdminService } from '@/services/admin.service';
import { cookies } from 'next/headers';
import React, { Suspense } from 'react';

async function getInfoUser() {
	const cookiesStore = cookies();
	const token = cookiesStore.get('NEXT_JS_AUTH_TOKENS')
		? JSON.parse(cookiesStore.get('NEXT_JS_AUTH_TOKENS').value)
		: null;
	const userData = cookiesStore.get('user')
		? JSON.parse(cookiesStore.get('user').value)
		: null;
	try {
		const response = await AdminService.getUserInfo(token.token, userData.id);
		const { data } = response;
		return data;
	} catch (error) {
		console.log(error);
	}
}

export default async function VendedorMainPage() {
	const infoUser = await getInfoUser();
	return (
		<>
			<Suspense fallback={<InfoProfileSkeleton />}>
				<InfoProfile userInfo={infoUser.data} />;
			</Suspense>
		</>
	);
}
