'use client';
import { Button, Input } from '@nextui-org/react';
import React from 'react';
import {
	ArrowRightIcon,
	DevicePhoneMobileIcon,
	PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import ConfirmCodeImage from '@/components/icons/auth/ConfirmCodeImage';
export default function FormConfirmCode() {
	return (
		<div className="flex flex-col justify-center max-w-3xl mx-auto gap-5">
			<ConfirmCodeImage />
			<h2 className="font-montserrat font-semibold text-2xl capitalize text-secondary">
				Confirma el codigo
			</h2>
			<p>Ingresa el codigo que fue enviado por sms a tu telefono</p>

			<Input
				type="text"
				label="Codigo"
				size="lg"
				placeholder="x-x-x-x-x"
				labelPlacement="outside"
				startContent={
					<DevicePhoneMobileIcon className="w-5 h-5 text-gray-500" />
				}
			/>
			<Button
				color="secondary"
				endContent={<PaperAirplaneIcon className="w-5 h-5" />}
				auto>
				Confirmar
			</Button>
		</div>
	);
}
