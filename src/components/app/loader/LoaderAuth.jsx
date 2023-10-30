'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const LoaderAuth = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const intervalId = setInterval(checkAuthStatus, 5000); // Sondea cada 5 segundos

		function checkAuthStatus() {
			axios
				.get('http://localhost:3000/apiEcomerce/1.0/auth/authEstatus')
				.then((response) => {
					if (response.data.user) {
						console.log(response.data.user);
						clearInterval(intervalId); // Detiene el "polling"
						setUser(response.data.user);
						// Aquí también puedes redirigir al usuario a otra página si lo deseas
					}
				})
				.catch((error) => {
					console.error('Error checking auth status:', error);
				});
		}

		return () => clearInterval(intervalId); // Limpieza en caso de que el componente se desmonte
	}, []);
	if (user) {
		return <div>Bienvenido, {user.displayName}</div>;
	}

	return <div>Esperando autenticación...</div>;
};
