'use client';
import { useState } from 'react';
import { Slider } from '@nextui-org/react';
import FooterDev from '../../dev/FooterDev';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
export default function FiltersPrices() {
	const router = useRouter();
	const pathName = usePathname();
	const searchParams = useSearchParams();
	const [value, setValue] = useState(0);
	console.log(pathName);
	const handleChange = (e) => {
		console.log(e);
		setValue(e);
		const current = new URLSearchParams(Array.from(searchParams.entries())); //
		const search = current.toString();
		const query = `${pathName}?${search}&minPrice=${e}`;
		console.log(search);
		console.log(query);
		router.push(query);
	};

	return (
		<>
			<Slider
				onChangeEnd={handleChange}
				label="Precio minimo"
				size="md"
				step={1000}
				maxValue={100000}
				minValue={0}
				formatOptions={{ style: 'currency', currency: 'USD' }}
				className="max-w-md"
			/>
			<FooterDev data={value} />
		</>
	);
}
