import * as yup from 'yup';
export const loginSchema = yup
	.object({
		email: yup.string().email().required('El email es requerido'),
		password: yup
			.string()
			.required('La contraseña es requerida')
			.min(6, 'La contraseña es muy corta'),
	})
	.required();

export const registerSchema = yup
	.object({
		name: yup.string().required('el Nombre es requerido'),
		lastName: yup.string().required('el Apellido es requerido'),
		email: yup.string().email().required('El email es requerido'),
		phoneNumber: yup
			.string()
			.required('El telefono es requerido')
			.min(10)
			.max(10),
		password: yup
			.string()
			.required('La contraseña es requerida')
			.min(6, 'La contraseña es muy corta'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden'),
		storeName: yup.string().when('$tipoCuenta', (tipoCuenta, schema) => {
			return tipoCuenta === 2
				? schema.required('El nombre de la tienda es requerido')
				: schema.notRequired();
		}),
	})
	.required();
