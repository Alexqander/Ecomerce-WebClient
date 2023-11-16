'use client';
import { Radio, RadioGroup, ScrollShadow } from '@nextui-org/react';
import { useState } from 'react';
import CustomRadio from './RadioGroup/CustomRadio';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function FiltersCategories({ categories }) {
	const [selected, setSelected] = useState('all');
	const router = useRouter();
	const pathName = usePathname();
	const searchParams = useSearchParams();
	const handleSelected = (e) => {
		console.log(e);
		setSelected(e);
		const current = new URLSearchParams(Array.from(searchParams.entries())); //
		const search = current.toString();
		const query = `${pathName}?${search}&category=${e}`;
		router.push(query);
	};
	return (
		<ScrollShadow hideScrollBar className="max-h-[600px] overflow-y-auto py-10">
			<RadioGroup
				color="primary"
				value={selected}
				onValueChange={handleSelected}>
				<CustomRadio key="00-00" value="all">
					Todos
				</CustomRadio>
				{categories.map((category) => (
					<CustomRadio key={category.id} value={category.id}>
						{category.name}
					</CustomRadio>
				))}
			</RadioGroup>
		</ScrollShadow>
	);
}

{
	/* <Radio key={category.id} value={category.id}>
    {category.name}
</Radio> */
}
