import { NextResponse } from 'next/server';

export function middleware(request) {
	const directRoles = {
		1: '/dashboard/admin',
		2: '/dashboard/vendedor',
		3: '/dashboard/repartidor',
		4: '/dashboard/user',
	};
	const authTokens = request.cookies.get('NEXT_JS_AUTH_TOKENS')?.value;
	const userData = request.cookies.get('user')
		? JSON.parse(request.cookies.get('user').value)
		: null;
	const userRole = userData?.roleId;

	if (
		request.nextUrl.pathname.startsWith(directRoles[userRole]) &&
		!authTokens
	) {
		const response = NextResponse.redirect(new URL('/auth', request.url));
		response.cookies.delete('NEXT_JS_AUTH_TOKENS');
		response.cookies.delete('user');
		return response;
	}

	// proteger ruta admin
	if (
		request.nextUrl.pathname.startsWith('/dashboard/admin') &&
		userRole !== 1
	) {
		const response = NextResponse.redirect(
			new URL(directRoles[userRole], request.url)
		);
		return response;
	}

	// proteger ruta vendedor
	if (
		request.nextUrl.pathname.startsWith('/dashboard/vendedor') &&
		userRole !== 2
	) {
		const response = NextResponse.redirect(
			new URL(directRoles[userRole], request.url)
		);
		return response;
	}
	// proteger ruta repartidor
	if (
		request.nextUrl.pathname.startsWith('/dashboard/repartidor') &&
		userRole !== 3
	) {
		const response = NextResponse.redirect(
			new URL(directRoles[userRole], request.url)
		);
		return response;
	}

	// proteger ruta usuario
	if (
		request.nextUrl.pathname.startsWith('/dashboard/user') &&
		userRole !== 4
	) {
		const response = NextResponse.redirect(
			new URL(directRoles[userRole], request.url)
		);
		return response;
	}

	// proteger ruta de productos
	if (
		authTokens &&
		request.nextUrl.pathname.startsWith('/shop') &&
		userRole !== 4
	) {
		const response = NextResponse.redirect(
			new URL(directRoles[userRole], request.url)
		);
		return response;
	}

	if (authTokens && request.nextUrl.pathname.startsWith('/auth')) {
		const response = NextResponse.redirect(
			new URL(directRoles[userRole], request.url)
		);
		return response;
	}
}

export const config = {
	matcher: [
		'/dashboard(.*)',
		'/dashboard/admin(.*)',
		'/dashboard/user(.*)',
		'/dashboard/vendedor(.*)',
		'/dashboard/repartidor(.*)',
		'/auth',
		'/shop(.*)',
	],
};
