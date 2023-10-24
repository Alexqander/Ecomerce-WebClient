'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import React from 'react';

export default function Providers({ children }) {
	return (
		<NextUIProvider>
			<NextThemesProvider
				attribute="class"
				defaultTheme="light"
				themes={['dark', 'light']}>
				{children}
			</NextThemesProvider>
		</NextUIProvider>
	);
}
