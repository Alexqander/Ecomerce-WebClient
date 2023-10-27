import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],
	// Configure one or more authentication providers
});

export { handler as GET, handler as POST };
