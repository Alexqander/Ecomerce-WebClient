/** @type {import('tailwindcss').Config} */

import { nextui } from '@nextui-org/react';
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		transparent: 'transparent',
		current: 'currentColor',
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
				tremor: {
					brand: {
						faint: '#eff6ff', // blue-50
						muted: '#bfdbfe', // blue-200
						subtle: '#60a5fa', // blue-400
						DEFAULT: '#3b82f6', // blue-500
						emphasis: '#1d4ed8', // blue-700
						inverted: '#ffffff', // white
					},
					background: {
						muted: '#f9fafb', // gray-50
						subtle: '#f3f4f6', // gray-100
						DEFAULT: '#ffffff', // white
						emphasis: '#374151', // gray-700
					},
					border: {
						DEFAULT: '#e5e7eb', // gray-200
					},
					ring: {
						DEFAULT: '#e5e7eb', // gray-200
					},
					content: {
						subtle: '#9ca3af', // gray-400
						DEFAULT: '#6b7280', // gray-500
						emphasis: '#374151', // gray-700
						strong: '#111827', // gray-900
						inverted: '#ffffff', // white
					},
				},
				//dark mode
				'dark-tremor': {
					brand: {
						faint: '#0B1229', // custom
						muted: '#172554', // blue-950
						subtle: '#1e40af', // blue-800
						DEFAULT: '#3b82f6', // blue-500
						emphasis: '#60a5fa', // blue-400
						inverted: '#030712', // gray-950
					},
					background: {
						muted: '#131A2B', // custom
						subtle: '#1f2937', // gray-800
						DEFAULT: '#111827', // gray-900
						emphasis: '#d1d5db', // gray-300
					},
					border: {
						DEFAULT: '#1f2937', // gray-800
					},
					ring: {
						DEFAULT: '#1f2937', // gray-800
					},
					content: {
						subtle: '#4b5563', // gray-600
						DEFAULT: '#6b7280', // gray-500
						emphasis: '#e5e7eb', // gray-200
						strong: '#f9fafb', // gray-50
						inverted: '#000000', // black
					},
				},
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
	boxShadow: {
		//light
		'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
		'tremor-card':
			'0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
		'tremor-dropdown':
			'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
		// dark
		'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
		'dark-tremor-card':
			'0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
		'dark-tremor-dropdown':
			'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
	},
	borderRadius: {
		'tremor-small': '0.375rem',
		'tremor-default': '0.5rem',
		'tremor-full': '9999px',
	},
	fontSize: {
		'tremor-label': ['0.75rem'],
		'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
		'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
		'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }],
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
	safelist: [
		{
			pattern:
				/^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ['hover', 'ui-selected'],
		},
		{
			pattern:
				/^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ['hover', 'ui-selected'],
		},
		{
			pattern:
				/^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ['hover', 'ui-selected'],
		},
		{
			pattern:
				/^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
		{
			pattern:
				/^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
		{
			pattern:
				/^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
	],
	
};
