import { NextResponse } from 'next/server';

export function middleware(request) {
	const authTokens = request.cookies.get('NEXT_JS_AUTH_TOKENS')?.value;

	if (request.nextUrl.pathname.startsWith('/dashboard') && !authTokens) {
		const response = NextResponse.redirect(new URL('/auth', request.url));
		response.cookies.delete('NEXT_JS_AUTH_TOKENS');
		response.cookies.delete('user');
		return response;
	}
	if (authTokens && request.nextUrl.pathname.startsWith('/auth')) {
		const response = NextResponse.redirect(new URL('/dashboard', request.url));
		return response;
	}
}

export const config = {
	matcher: ['/dashboard(.*)', '/auth'],
};
