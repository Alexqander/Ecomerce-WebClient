'use client';
import { Accordion, AccordionItem, Link } from '@nextui-org/react';
import React from 'react';

export default function GridCategories({ categories }) {
	return (
		<div className="grid grid-cols-1">
			<Accordion variant="light">
				{categories.map((category) => {
					return (
						<AccordionItem
							key={category.id}
							aria-label={category.name}
							title={category.name}
							textValue={category.name}>
							<div className="flex flex-col">
								{category.SubCategory.map((subcategory) => {
									return (
										<Link
											key={subcategory.id}
											href="/shop"
											className="text-gray-400 hover:text-gray-900 hover:underline">
											{subcategory.name}
										</Link>
									);
								})}
							</div>
						</AccordionItem>
					);
				})}
			</Accordion>
		</div>
	);
}
