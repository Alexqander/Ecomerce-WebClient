import React from 'react';
import CardStat from './CardStat';

export default function SectionStats({ options }) {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-4 my-10 gap-4">
			{options.map((item, index) => (
				<CardStat
					key={index}
					title={item.title}
					data={item.data}
					color={item.color}
					icon={item.icon}
				/>
			))}
		</section>
	);
}
