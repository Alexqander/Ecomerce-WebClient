'use client';
import { Button, Input } from '@nextui-org/react';
import React from 'react';
import {
	ArrowRightIcon,
	DevicePhoneMobileIcon,
	PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import RecoverPasswordImage from '@/components/icons/auth/RecoverPasswordImage';
import { useRouter } from 'next/navigation';
export default function FormRecovery() {
	const router = useRouter();
	return (
		<div className="flex flex-col justify-center max-w-3xl mx-auto gap-5">
			<RecoverPasswordImage />
			<h2 className="font-montserrat font-semibold text-2xl capitalize text-secondary">
				Recuperacion de contraseña
			</h2>
			<p>Ingrese su numero de telefono asociado a su cuenta</p>

			<Input
				type="number"
				label="Numero de telefono"
				size="lg"
				placeholder="xxxx-xxx-xxxx"
				labelPlacement="outside"
				startContent={
					<DevicePhoneMobileIcon className="w-5 h-5 text-gray-500" />
				}
			/>
			<Button
				color="secondary"
				endContent={<PaperAirplaneIcon className="w-5 h-5" />}
				onClick={() => router.push('/auth/recovery/confirmcode')}
				auto>
				Enviar codigo
			</Button>
		</div>
	);
}
