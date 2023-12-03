'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function CardUserDashboard({
	title,
	label,
	icon,
	color,
	url,
	textStyle,
}) {
	const router = useRouter();
	console.log(url);
	return (
		<div
			className="w-full my-5 flex justify-start items-center gap-10 hover:bg-slate-200 transition-all dark:hover:bg-slate-800 hover:shadow-lg rounded-md p-5 cursor-pointer"
			onClick={() => router.push(url)}>
			<div
				className={`flex items-center justify-center w-20 h-20 rounded-md bg-${color} dark:to-blue-600`}>
				{icon}
			</div>
			<div className="flex flex-col">
				<h1 className="text-xl font-montserrat font-bold">{title}</h1>
				<p
					className={`text-gray-600 dark:text-gray-400 font-montserrat ${textStyle} `}>
					{label}
				</p>
			</div>
		</div>
	);
}
