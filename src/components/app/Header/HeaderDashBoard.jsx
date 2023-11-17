'use client';
import { useAuthContext } from '@/context/authContext';
import React from 'react';

export default function HeaderDashBoard({ title }) {
	const { user } = useAuthContext();
	return (
		<div className="w-full flex justify-between">
			{title ? (
				<h2 className="font-montserrat font-semibold text-2xl">{title}</h2>
			) : (
				<h2 className="font-montserrat font-semibold text-2xl">
					✌️ Bienvenido(a) {user.name}
				</h2>
			)}
		</div>
	);
}
