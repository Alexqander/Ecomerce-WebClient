import InfoProfile from '@/components/app/Profile/InfoProfile';
import InfoProfileSkeleton from '@/components/app/Profile/InfoProfileSkeleton';
import React, { Suspense } from 'react';

export default function ProfileRepartidorPage() {
	return (
		<>
			<Suspense fallback={<InfoProfileSkeleton />}>
				<InfoProfile />;
			</Suspense>
		</>
	);
}
