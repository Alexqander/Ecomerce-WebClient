import React from 'react';

export default function CardStat({ data, title, icon, color }) {
	return (
		<div class="p-4 bg-white shadow-lg rounded-2xl dark:bg-slate-900">
			<div class="flex items-center">
				<span class={`relative p-4 bg-${color}-200 rounded-xl`}>{icon}</span>
				<p class="ml-2 text-black text-md dark:text-white">{title}</p>
			</div>
			<div class="flex flex-col justify-start">
				<p class="my-4 text-4xl font-bold text-left text-gray-700 dark:text-gray-100">
					<span class="text-sm">$</span>
					{data}
				</p>
				<div class="flex items-center text-sm text-green-500">
					<svg
						width="20"
						height="20"
						fill="currentColor"
						viewBox="0 0 1792 1792"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
					</svg>
					<span>5.5%</span>
					<span class="text-gray-400">vs last month</span>
				</div>
			</div>
		</div>
	);
}
