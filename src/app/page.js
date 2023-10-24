'use client';
import { Button } from '@nextui-org/react';
export default function Home() {
	return (
		<>
			<div className="container mx-auto flex gap-6 my-20 ">
				<h1 className="font-sans text-3xl text-blue-700 dark:text-white">
					Dando estilo a un titulo con tailwindcss
				</h1>
				<Button color="secondary" variant="bordered">
					Button
				</Button>
			</div>
		</>
	);
}
