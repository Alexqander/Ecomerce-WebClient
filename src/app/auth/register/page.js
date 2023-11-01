import FormRegister from '@/components/app/login/FormRegister';
import Image from 'next/image';
import React from 'react';
import fondoRegister from '../../../../public/images/fondoRegister.jpeg';

export default function RegisterPage() {
	return (
		<div className="container-fluid w-full mx-auto h-screen flex items-center justify-center">
			<div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full">
				<div className="relative h-full hidden lg:block">
					<Image
						src={fondoRegister}
						alt="image login"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="flex items-center justify-center h-full w-full">
					<FormRegister />
				</div>
			</div>
		</div>
	);
}
