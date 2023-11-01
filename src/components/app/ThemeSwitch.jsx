'use client';
import { useState, useEffect } from 'react';
import { SunIcon } from '../icons/SoonIcon';
import { MoonIcon } from '../icons/MoonIcon';
import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<Switch
			isSelected={theme === 'dark'}
			onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			size="lg"
			color="success"
			startContent={<SunIcon />}
			endContent={<MoonIcon />}></Switch>
	);
}
