'use client';

import React from 'react';
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Divider,
	Link,
	Image,
} from '@nextui-org/react';

export default function OrdenesCards({ordenes, id}) {
	return (
		<div className="md:ml-unit-7xl lg:ml-unit-7xl w-6/12">
			<div className="mt-4">
				<Card className="mx-auto">
					<CardBody>
						<p className="mx-auto">Orden numero {id}</p>
					</CardBody>
				</Card>

				<Card className="mt-8">
					<CardHeader className="flex gap-3">
						<Image
							alt="nextui logo"
							height={40}
							radius="sm"
							src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
							width={40}
						/>
					</CardHeader>
					<Divider />
					<CardBody>
						<p>ola</p>
					</CardBody>
					<CardBody>
						<p>Status de la orden </p>
					</CardBody>
					<Divider />
					<CardFooter>
						<p>Nombre de la persona que hizo la orden</p>
					</CardFooter>
				</Card>
				<Card className="mt-8">
					<CardBody>
						<p>Total</p>
					</CardBody>
					<CardBody>
						<p>ssub Total</p>
					</CardBody>
					<Divider />
					<CardFooter>
						<p>Envio:</p>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
