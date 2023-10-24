import FormLogin from '@/components/app/login/FormLogin';
import Image from 'next/image';
import React from 'react';
import fondo from '../../../public/images/fondoLogin.jpeg';

export default function loginPage() {
	return (
		<>
			<div className="container-fluid w-full mx-auto h-screen flex items-center justify-center">
				<div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full">
					<div className="relative h-full hidden lg:block">
						<Image
							src={fondo}
							alt="image login"
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div className="flex items-center justify-center h-full">
						<FormLogin />
					</div>
				</div>
			</div>
		</>
	);
}
