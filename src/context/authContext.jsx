'use client';
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import Cookies from 'js-cookie';

const AUTH_TOKENS_KEY = 'NEXT_JS_AUTH_TOKENS';
export const AuthContext = createContext({
	login: () => {},
	logout: () => {},
});

export default function AuthContextProvider({ children }) {
	const [isLogged, setIsLogged] = useState(false);
	const [user, setUser] = useState({});
	useEffect(() => {
		setIsLogged(Cookies.get(AUTH_TOKENS_KEY) ? true : false);
		setUser(Cookies.get('user') ? JSON.parse(Cookies.get('user')) : {});
	}, []);
	const login = useCallback(function ({ authTokens, user }) {
		Cookies.set(AUTH_TOKENS_KEY, JSON.stringify(authTokens));
		Cookies.set('user', JSON.stringify(user));
		setUser(user);
		setIsLogged(true);
	}, []);

	const logout = useCallback(function () {
		Cookies.remove(AUTH_TOKENS_KEY);
		Cookies.remove('user');
		setUser({});
		setIsLogged(false);
	}, []);

	const value = useMemo(
		() => ({
			isLogged,
			user,
			login,
			logout,
		}),
		[isLogged, user, login, logout]
	);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuthContext() {
	return useContext(AuthContext);
}
