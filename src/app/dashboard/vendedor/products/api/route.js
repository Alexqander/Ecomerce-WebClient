import { cookies } from 'next/headers';
export async function GET(request) {
	const cookiesStore = cookies();
	const token = cookiesStore.get('NEXT_JS_AUTH_TOKENS')?.value;
	const userData = cookiesStore.get('user')
		? JSON.parse(cookiesStore.get('user').value)
		: null;
	const userRole = userData?.roleId;
	return Response.json({ token, userData, userRole });
}
