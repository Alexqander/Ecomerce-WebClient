import HeaderDashBoard from '@/components/app/Header/HeaderDashBoard';
import ChartsAdmin from '@/components/app/admin/ChartsAdmin';
import ResumeStats from '@/components/app/vendedor/dashboard/ResumeStats';
import React from 'react';

export default function AdminPage() {
	return (
		<div className="container mx-auto mt-10">
			<HeaderDashBoard />
			<ResumeStats />
		</div>
	);
}
