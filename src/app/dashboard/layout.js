import SideBarEcomerce from '@/components/navigation/sideBar/SideBarEcomerce';
import React, { Suspense } from 'react';

import Loading from './loading';

export default function DashboardLayout({ children }) {
	return (
		<div className="flex h-scren">
			<Suspense fallback={<Loading />}>
				<SideBarEcomerce />
			</Suspense>
			<main className="container-fluid w-full ml-64 px-10">{children}</main>
		</div>
	);
}
