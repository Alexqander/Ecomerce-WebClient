'use client';

import { Avatar, Button, Input } from '@nextui-org/react';
import { useAuthContext } from '@/context/authContext';
import { getInitials } from '@/utils/utils';
import HeaderDashBoard from '../Header/HeaderDashBoard';

export default function InfoProfile() {
	const { user } = useAuthContext();
	console.log(user);
	return (
		<form className="container mx-auto my-20">
			<div className="space-y-12">
				<div className="pb-12">
					<HeaderDashBoard title=" 👨 Perfil " />
					<p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
						Esta es la informacion de tu perfil
					</p>
					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="col-span-full">
							<label
								htmlFor="photo"
								className="block text-sm font-medium leading-6">
								Foto de perfil
							</label>
							<div className="mt-2 flex items-center gap-x-3">
								<Avatar
									color="success"
									isBordered
									src={user?.profilePicture}
									name={user.name && getInitials(user?.name, user?.lastName)}
									className="transition-transform w-20 h-20 text-large"
								/>
								<Button variant="solid" color="primary">
									Cambiar
								</Button>
							</div>
						</div>

						{/* <div className="col-span-full">
							<label
								htmlFor="cover-photo"
								className="block text-sm font-medium leading-6 text-gray-900">
								Cover photo
							</label>
							<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
								<div className="text-center">
									<PhotoIcon
										className="mx-auto h-12 w-12 text-gray-300"
										aria-hidden="true"
									/>
									<div className="mt-4 flex text-sm leading-6 text-gray-600">
										<label
											htmlFor="file-upload"
											className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
											<span>Upload a file</span>
											<input
												id="file-upload"
												name="file-upload"
												type="file"
												className="sr-only"
											/>
										</label>
										<p className="pl-1">or drag and drop</p>
									</div>
									<p className="text-xs leading-5 text-gray-600">
										PNG, JPG, GIF up to 10MB
									</p>
								</div>
							</div>
						</div> */}
					</div>
				</div>

				<div className="border-b border-gray-900/10 pb-12">
					<h2 className="text-base font-montserrat font-semibold leading-7">
						Informacion Personal
					</h2>
					<p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
						Datos generales del usuario
					</p>

					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<Input
								variant="bordered"
								type="text"
								label="Nombre(s)"
								labelPlacement="outside"
								placeholder="name"
								readOnly
								defaultValue={user?.name}
							/>
						</div>

						<div className="sm:col-span-3">
							<Input
								variant="bordered"
								type="text"
								label="Apellido(s)"
								labelPlacement="outside"
								placeholder="lastname"
								readOnly
								defaultValue={user?.lastName}
							/>
						</div>

						<div className="sm:col-span-4 mt-6">
							<Input
								variant="bordered"
								type="email"
								label="Email"
								labelPlacement="outside"
								placeholder="email"
								readOnly
								defaultValue={user?.email}
							/>
						</div>
						<div className="sm:col-span-4 mt-6">
							<Input
								variant="bordered"
								type="text"
								label="Telefono"
								labelPlacement="outside"
								placeholder="phone"
								readOnly
								defaultValue={user?.phoneNumber}
							/>
						</div>

						<div className="sm:col-span-3">
							<h2 className="text-base font-semibold leading-7">
								Direccion de envio
							</h2>
							<p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
								Siempre te informaremos sobre cambios importantes, pero tú
								eliges qué más cosas de las que quieras oír hablar.
							</p>
						</div>

						<div className="col-span-full">
							<Input
								variant="bordered"
								type="text"
								label="Calle y numero"
								labelPlacement="outside"
								placeholder="e.g. 123 Main St."
							/>
						</div>

						<div className="sm:col-span-2 sm:col-start-1">
							<Input
								variant="bordered"
								type="text"
								label="Ciudad"
								labelPlacement="outside"
								placeholder="e.g. 123 Main St."
							/>
						</div>

						<div className="sm:col-span-2">
							<Input
								variant="bordered"
								type="text"
								label="Estado / Provincia"
								labelPlacement="outside"
								placeholder="e.g. 123 Main St."
							/>
						</div>

						<div className="sm:col-span-2">
							<Input
								variant="bordered"
								type="text"
								label="ZIP / Codigo postal"
								labelPlacement="outside"
								placeholder="e.g. 123 Main St."
							/>
						</div>
					</div>
				</div>

				<div className="border-b border-gray-900/10 pb-12">
					<h2 className="text-base font-semibold leading-7">Notificaciones</h2>
					<p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
						Siempre te informaremos sobre cambios importantes, pero tú eliges
						qué más cosas de las que quieras oír hablar.
					</p>

					<div className="mt-10 space-y-10">
						<fieldset>
							<legend className="text-sm font-semibold leading-6 text-gray-900  dark:text-gray-400">
								Por email
							</legend>
							<div className="mt-6 space-y-6">
								<div className="relative flex gap-x-3">
									<div className="flex h-6 items-center">
										<input
											id="comments"
											name="comments"
											type="checkbox"
											className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
									</div>
									<div className="text-sm leading-6">
										<label
											htmlFor="comments"
											className="font-medium text-gray-900  dark:text-gray-400">
											Comments
										</label>
										<p className="text-gray-600  dark:text-gray-400">
											Get notified when someones posts a comment on a posting.
										</p>
									</div>
								</div>
								<div className="relative flex gap-x-3">
									<div className="flex h-6 items-center">
										<input
											id="candidates"
											name="candidates"
											type="checkbox"
											className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
									</div>
									<div className="text-sm leading-6">
										<label
											htmlFor="candidates"
											className="font-medium text-gray-900  dark:text-gray-400">
											Candidates
										</label>
										<p className="text-gray-600  dark:text-gray-400">
											Get notified when a candidate applies for a job.
										</p>
									</div>
								</div>
								<div className="relative flex gap-x-3">
									<div className="flex h-6 items-center">
										<input
											id="offers"
											name="offers"
											type="checkbox"
											className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
										/>
									</div>
									<div className="text-sm leading-6">
										<label
											htmlFor="offers"
											className="font-medium text-gray-900  dark:text-gray-400">
											Offers
										</label>
										<p className="text-gray-600  dark:text-gray-400">
											Get notified when a candidate accepts or rejects an offer.
										</p>
									</div>
								</div>
							</div>
						</fieldset>
						<fieldset>
							<legend className="text-sm font-semibold leading-6">
								Push Notifications
							</legend>
							<p className="mt-1 text-sm leading-6 text-gray-600  dark:text-gray-400">
								These are delivered via SMS to your mobile phone.
							</p>
							<div className="mt-6 space-y-6">
								<div className="flex items-center gap-x-3">
									<input
										id="push-everything"
										name="push-notifications"
										type="radio"
										className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
									/>
									<label
										htmlFor="push-everything"
										className="block text-sm font-medium leading-6 text-gray-900  dark:text-gray-400">
										Everything
									</label>
								</div>
								<div className="flex items-center gap-x-3">
									<input
										id="push-email"
										name="push-notifications"
										type="radio"
										className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
									/>
									<label
										htmlFor="push-email"
										className="block text-sm font-medium leading-6 text-gray-900  dark:text-gray-400">
										Same as email
									</label>
								</div>
								<div className="flex items-center gap-x-3">
									<input
										id="push-nothing"
										name="push-notifications"
										type="radio"
										className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
									/>
									<label
										htmlFor="push-nothing"
										className="block text-sm font-medium leading-6 text-gray-900  dark:text-gray-400">
										No push notifications
									</label>
								</div>
							</div>
						</fieldset>
					</div>
				</div>
			</div>

			<div className="mt-6 flex items-center justify-end gap-x-6">
				<button
					type="button"
					className="text-sm font-semibold leading-6 text-gray-900">
					Cancel
				</button>
				<button
					type="submit"
					className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
					Save
				</button>
			</div>
		</form>
	);
}
