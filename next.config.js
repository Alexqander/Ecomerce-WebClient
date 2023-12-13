/** @type {import('next').NextConfig} */

const withPwa = require('@ducanh2912/next-pwa').default({
	dest: 'public',
	cacheOnFrontEndNav: true,
	aggressiveFrontEndNavCaching: true,
	reloadOnOnline: true,
	swcMinify: true,
	disable: false,
	workboxOptions: {
		disableDevLogs: true,
	},
	register: true,
});

const nextConfig = {
	images: {
		domains: ['res.cloudinary.com', 'via.placeholder.com'],
	},
};

module.exports = withPwa(nextConfig);
