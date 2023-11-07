import EcomerceLogo from '@/components/icons/brand/EcomerceLogo';
import { NextJsIcon } from '@/components/icons/landing/NextJsIcon';
import { NodeJsIcon } from '@/components/icons/landing/NodeJsIcon';
import { TailwindIcon } from '@/components/icons/landing/TailwindIcon';
import { StripeIcon } from '@/components/icons/landing/StripeIcon';
import landing from '../../../../public/images/Landing.png';
import Image from 'next/image';

import {
	ComputerDesktopIcon,
	FaceSmileIcon,
	UserGroupIcon,
	HeartIcon,
	ShieldCheckIcon
} from '@heroicons/react/24/outline';
import FooterComponent from '@/components/navigation/footer/FooterComponent';

const features = [
	{
		name: 'Alimentos',
		description:
			'Disfruta de una gran selección de productos deliciosos y de calidad, desde dulces hasta salados, que puedes comprar online y recibir en tu casa. ¡No te quedes con hambre y explora nuestro catálogo!',
		icon: FaceSmileIcon,
	},
	{
		name: 'Belleza y cuidado personal',
		description:
			'Encuentra todo lo que necesitas para cuidar tu piel, tu cabello y tu maquillaje. Tenemos las mejores marcas y los mejores precios para que te sientas bien por dentro y por fuera. ¡Descubre nuestras ofertas y consejos!',
		icon: HeartIcon,
	},
	{
		name: 'Tecnología',
		description:
			'Descubre las últimas novedades en electrónica, informática, sonido y más. Tenemos los productos más innovadores y los mejores descuentos para que estés a la vanguardia de la tecnología. ¡No te pierdas nuestras promociones y garantías!',
		icon: ComputerDesktopIcon,
	},
	{
		name: 'Servicios',
		description:
			'Contrata los servicios que necesitas para tu negocio o tu hogar. Contamos con profesionales cualificados y experimentados que te ofrecen soluciones rápidas y eficientes. ¡Consulta nuestros precios y testimonios!',
		icon: UserGroupIcon,
	},
];
const links = [
	{ name: 'Nuestros productos', href: '#' },
	{ name: 'Ofertas especiales', href: '#' },
	{ name: 'Nuestro equipo', href: '#' },
	{ name: 'Preguntas frecuentes', href: '#' },
];
const stats = [
	{ name: 'Productos', value: '4000+' },
	{ name: 'Usuarios', value: '300+' },
	{ name: 'Clientes satisfechos', value: 'TODOS' },
	{ name: 'Horario', value: '24/7' },
];
export default function LandingPage() {
	return (
		<div className="bg-background">
			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					aria-hidden="true">
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f5e452] to-[#d2d4b0] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="hidden sm:mb-8 sm:flex sm:justify-center">
						<EcomerceLogo className="h-12 w-auto" />
					</div>
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
							Bienvenido a FastShop.
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
							Conoce la plataforma de comercio electrónico que buscabas.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="#"
								className="rounded-md bg-lightYellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-lightYellow-600">
								Empieza a comprar
							</a>
							<a
								href="#"
								className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300">
								Acerca de nosotros <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true">
					<div
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#f6ea49] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
			</div>
			{/* final del Hero */}

			<div className="relative isolate overflow-hidden py-24 sm:py-32">
				<div className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
					<Image
						fill
						className="object-cover"
						src={landing}
						alt="image landing"
					/>
				</div>

				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							Explora nuestras colecciones exclusivas.
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-300">
							Desde la última moda hasta los gadgets más innovadores, tenemos
							todo lo que necesitas.
						</p>
					</div>
					<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
							{links.map((link) => (
								<a key={link.name} href={link.href}>
									{link.name} <span aria-hidden="true">&rarr;</span>
								</a>
							))}
						</div>
						<dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
							{stats.map((stat) => (
								<div key={stat.name} className="flex flex-col-reverse">
									<dt className="text-base leading-7 text-gray-300">
										{stat.name}
									</dt>
									<dd className="text-2xl font-bold leading-9 tracking-tight text-white">
										{stat.value}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
			{/* final de la información de la empresa */}
			<div className=" py-24 sm:py-32 bg-background">
				<div
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					aria-hidden="true">
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f5e452] to-[#d2d4b0] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<h2 className="text-center text-lg font-semibold leading-8 text-gray-900 dark:text-gray-200">
						Creado con las mejores tecnologías.
					</h2>

					<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
						<NextJsIcon className="md:w-[90px] md:h-[90px] w-[60px] h-[60px] fill-current" />
						<NodeJsIcon className="md:w-[90px] md:h-[90px] w-[60px] h-[60px] fill-current" />
						<TailwindIcon className="md:w-[90px] md:h-[90px] w-[60px] h-[60px] " />
						<StripeIcon className="md:w-[90px] md:h-[90px] w-[60px] h-[60px] fill-current" />
					</div>
				</div>
			</div>
			{/* final de los logos de las tecnologías */}
			<div className=" py-24 sm:py-32 bg-background">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="font-semibold leading-7 text-yellow-500 text-base">
							Descubre mas de nosotros.
						</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200">
							Todo lo que necesitas para comprar en línea.
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
							En FastShop, nos esforzamos por brindar la mejor experiencia de
							compra en línea a nuestros clientes. Nuestro objetivo es permitir
							que los clientes encuentren y descubran fácilmente artículos que
							desean comprar.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
							{features.map((feature) => (
								<div key={feature.name} className="relative pl-16 ">
									<dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-200">
										<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-lightYellow-500">
											<feature.icon
												className="h-6 w-6 text-white"
												aria-hidden="true"
											/>
										</div>
										{feature.name}
									</dt>
									<dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-200">
										{feature.description}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
			<div className="relative isolate overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
						<div className="max-w-xl lg:max-w-lg">
							<h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl dark:text-gray-200">
								Recibe las últimas novedades y ofertas exclusivas .
							</h2>
							<p className="mt-4 text-lg leading-8 text-gray-900 dark:text-gray-300">
								No te pierdas las mejores ofertas y promociones. ¡Subscribete a
								nuestro boletín!
							</p>
							<div className="mt-6 flex max-w-md gap-x-4">
								<label htmlFor="email-address" className="sr-only">
									Email
								</label>
								<input
									id="email-address"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="min-w-0 flex-auto rounded-md border-0 dark:bg-white/5 px-3.5 py-2 dark:text-white shadow-sm ring-1 ring-inset ring-black/10 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
									placeholder="Ingresa tu dirección de correo electrónico"
								/>
								<button
									type="submit"
									className="flex-none rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
								>
									Subscribete
								</button>
							</div>
						</div>
						<dl className=" gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2 ">
							
							<div className="flex flex-col items-center">
								<div className="rounded-md bg-black/10 ring-black/10 dark:bg-white/5 p-2 ring-1 dark:ring-white/10">
									<ShieldCheckIcon
										className="h-6 w-6 current-fill"
										aria-hidden="true"
									/>
								</div>
								<dt className="mt-4 font-semibold text-gray-900 dark:text-white">No spam</dt>
								<dd className="mt-2 leading-7 text-black dark:text-gray-400">
								Al suscribirte, aceptas nuestra política de privacidad y el uso de tus datos para enviarte información relevante
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
			<FooterComponent/>
		</div>
	);
}
