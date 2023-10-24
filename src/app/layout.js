import './globals.css';
import { Inter } from 'next/font/google';
import Providers from './providers';
import NavBarEcomerce from '@/components/navigation/NavBarEcomerce';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Fast Shop Ecomerce',
	description: 'Ecomerce de venta de productos',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<NavBarEcomerce />
					{children}
				</Providers>
			</body>
		</html>
	);
}
