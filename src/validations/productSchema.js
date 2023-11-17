import * as yup from 'yup';

export const productSchema = yup.object({
	name: yup.string().required('El nombre es obligatorio'),
	description: yup.string().required('La descripción es obligatoria'),
	price: yup
		.number('El precio debe ser un número')
		.positive('El precio debe ser un número positivo')
		.required('El precio es obligatorio'),
	stock: yup
		.number('El stock debe ser un número entero')
		.integer('El stock debe ser un número entero')
		.min(0, 'El stock no puede ser negativo')
		.required('El stock es obligatorio'),
	category: yup
		.number()
		.positive('Debe seleccionar una categoría')
		.required('La categoría es obligatoria'),
	subCategoryId: yup
		.number()
		.positive('Debe seleccionar una subcategoría')
		.required('La subcategoría es obligatoria'),
	files: yup
		.array()
		.of(
			yup.object().shape({
				size: yup
					.number()
					.max(1024 * 1000, 'El tamaño del archivo no debe exceder 1MB'),
				type: yup
					.string()
					.matches(
						/image\/(jpeg|png|gif)/,
						'Solo se aceptan imágenes (jpeg, png, gif)'
					),
			})
		)
		.min(1, 'Debe cargar al menos una imagen'),
});
