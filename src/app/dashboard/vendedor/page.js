import HeaderDashBoard from '@/components/app/Header/HeaderDashBoard';
import ResumeStats from '@/components/app/vendedor/dashboard/ResumeStats';
import React from 'react';

export default function VendedorPage() {
	return (
		<div className="container mx-auto mt-10">
			<HeaderDashBoard />
			<ResumeStats />
		</div>
	);
}
