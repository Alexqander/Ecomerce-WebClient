'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function ImageGridCarrusel({ images }) {
	const [currentImage, setCurrentImage] = useState(images[0].url);
	const isSelected = (image) => image.url === currentImage; // si la imagen es la actual, entonces isSelected es true (para aplicarle el borde// ring-2 es un borde de 2px, ring-blue-500 es el color del borde
	console.log(images);
	return (
		<div className="w-full">
			<div className=" max-w-3xl h-[30em] bg-white flex items-center justify-center overflow-hidden ">
				<Image
					width={300}
					height={300}
					src={currentImage}
					alt="image product"
					className="mx-auto"
				/>
			</div>

			<div className="max-w-5xl my-10">
				<div className="flex flex-row gap-4 items-center justify-start">
					{images.map((image, index) => {
						return (
							<div
								className={`w-48 h-48 bg-white ${
									isSelected(image) ? 'ring-2 ring-blue-500' : ''
								}`}
								key={index}>
								<Image
									width={250}
									height={250}
									src={image.url}
									alt="image product"
									style={{ objectFit: 'contain' }}
									className="w-full h-full object-cover"
									onClick={() => setCurrentImage(image.url)}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
