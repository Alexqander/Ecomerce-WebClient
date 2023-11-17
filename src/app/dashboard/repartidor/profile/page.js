import HeaderDashBoard from '@/components/app/Header/HeaderDashBoard';
import InfoProfile from '@/components/app/Profile/InfoProfile';
import InfoProfileSkeleton from '@/components/app/Profile/InfoProfileSkeleton';
import React, { Suspense } from 'react';

export default function ProfileRepartidorPage() {
	return (
		<div className="container mx-auto mt-10">
			<Suspense fallback={<InfoProfileSkeleton />}>
				<InfoProfile />;
			</Suspense>
		</div>
	);
}
