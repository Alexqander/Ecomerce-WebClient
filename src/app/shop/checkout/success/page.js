import React from 'react';

export default function SuccesPayPage() {
	return (
		<div className="container mx-auto my-20">
			<div className="flex justify-center items-center">
				<div className="flex flex-col justify-center items-center">
					<h1 className="text-3xl font-bold text-gray-700 dark:text-gray-300">
						¡Gracias por tu compra!
					</h1>
					<p className="text-gray-600 dark:text-gray-300">
						Tu pedido se ha realizado con éxito
					</p>
					<p className="text-gray-600 dark:text-gray-300">
						Te hemos enviado un correo con los detalles de tu pedido
					</p>
				</div>
			</div>
		</div>
	);
}
