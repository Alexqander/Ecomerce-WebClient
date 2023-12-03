'use client';
import React from 'react';

import CardUserDashboard from '../cards/CardUserDashboard';
export default function SectionsDashboard({ options }) {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-4">
			{options.map((item, index) => (
				<CardUserDashboard
					key={index}
					title={item.title}
					label={item.label}
					color={item.color}
					icon={item.icon}
					textStyle={item.textStyle}
					url={item.url}
				/>
			))}
		</section>
	);
}
