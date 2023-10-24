/** @type {import('tailwindcss').Config} */

import { nextui } from '@nextui-org/react';
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				montserrat: ['var(--font-montserrat)'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				lightYellow: {
					50: '#fefce8',
					100: '#fffac2',
					200: '#fff088',
					300: '#ffe145',
					400: '#fdcd12',
					500: '#f2b705',
					600: '#cd8a01',
					700: '#a36105',
					800: '#874c0c',
					900: '#723e11',
					950: '#432005',
				},
				refgold: {
					50: '#fcfde9',
					100: '#f7fbc6',
					200: '#f5f98f',
					300: '#f5f44f',
					400: '#f0e71f',
					500: '#e0ce12',
					600: '#c1a30d',
					700: '#a6800f',
					800: '#805e13',
					900: '#6d4d16',
					950: '#3f2909',
				},
				blackpearl: {
					50: '#f0f9ff',
					100: '#dff3ff',
					200: '#b8e9ff',
					300: '#79d8ff',
					400: '#32c5fe',
					500: '#07aff0',
					600: '#008ccd',
					700: '#006fa6',
					800: '#035e89',
					900: '#094e71',
					950: '#031926',
				},
				neutral: {
					50: '#fafafa',
					100: '#f5f5f5',
					200: '#e5e5e5',
					300: '#d4d4d4',
					400: '#a3a3a3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717',
					950: '#0a0a0a',
				},
			},
		},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			prefix: 'nextui', // prefix for themes variables
			addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
			defaultTheme: 'light', // default theme from the themes object
			defaultExtendTheme: 'light', // default theme to extend on custom themes
			layout: {}, // common layout tokens (applied to all themes)
			themes: {
				light: {
					layout: {}, // light theme layout tokens
					colors: {
						background: '#f8f8f8',
						foreground: '#0D001A',
						secondary: '#f2b705',
					}, // light theme colors
				},
				dark: {
					layout: {}, // dark theme layout tokens
					colors: {
						background: '#0D001A',
						foreground: '#ffffff',
						secondary: '#f2b705',
					}, // dark theme colors
				},
				// ... custom themes
			},
		}),
	],
};
