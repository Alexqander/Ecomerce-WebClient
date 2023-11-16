export function getInitials(name) {
	// Dividimos el nombre en partes usando el espacio como separador
	const parts = name.split(' ');
	// Filtramos las partes para ignorar cualquier espacio en blanco accidental
	const filteredParts = parts.filter((part) => part.length > 0 && part !== ' ');
	// Mapeamos las partes para obtener la primera letra y convertirlas a mayúsculas
	const initials = filteredParts.map((part) => part[0].toUpperCase()).join('');
	return initials;
}
