import { Inter, Roboto, Montserrat } from 'next/font/google';

export const inter = Inter({
	display: 'swap',
	optional: true,
	subsets: ['latin'],
});

export const roboto = Roboto({
	display: 'swap',
	optional: true,
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-roboto',
});

export const montserrat = Montserrat({
	display: 'swap',
	optional: true,
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-montserrat',
});
