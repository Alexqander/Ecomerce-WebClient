import FormRegister from '@/components/app/login/FormRegister';
import Image from 'next/image';
import React from 'react';
import fondoRegister from '../../../../public/images/fondoRegister.jpeg';

export default function RegisterPage() {
	return (
		<div className="container-fluid w-full mx-auto h-[calc(100vh-65px)] flex items-center justify-center">
			<div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full">
				<div className="relative h-full hidden lg:block">
					<Image
						src={fondoRegister}
						alt="image login"
						fill
						className="object-cover"
					/>
				</div>
				<div className="flex items-center justify-center h-full w-full">
					<FormRegister />
				</div>
			</div>
		</div>
	);
}
