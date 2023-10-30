import { LoaderAuth } from '@/components/app/loader/LoaderAuth';
import React from 'react';

export async function getSession() {
	const data = req.params;
	const userData = JSON.parse(decodeURIComponent(data));
	console.log(userData);
	return { user: userData };
}

export default function HomePage() {
	return <LoaderAuth />;
}
