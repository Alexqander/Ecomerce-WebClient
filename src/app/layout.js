import './globals.css';
import { Inter } from 'next/font/google';
import Providers from './providers';
import NavBarEcomerce from '@/components/navigation/NavBarEcomerce';
import AuthContextProvider from '@/context/authContext';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Fast Shop Ecomerce',
	description: 'Ecomerce de venta de productos',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthContextProvider>
					<Providers>
						<NavBarEcomerce />
						{children}
						<Toaster richColors position="top-center" />
					</Providers>
				</AuthContextProvider>
			</body>
		</html>
	);
}
