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
		setValue(e);
		const currentParams = new URLSearchParams(searchParams);
		currentParams.set('minPrice', e); //
		// Crea la nueva URL
		const newUrl = `${pathName}?${currentParams.toString()}`;
		// Navega a la nueva URL
		router.push(newUrl);
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
