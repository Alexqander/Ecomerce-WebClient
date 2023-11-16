'use client';
import React, { useState, useMemo } from 'react';
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Pagination,
} from '@nextui-org/react';

export default function TableMain({ data, columnsConfig }) {
	const [sortDescriptor, setSortDescriptor] = useState({
		column: null,
		direction: 'ascending',
	});
	const [page, setPage] = useState(1);
	const rowsPerPage = 10; // o cualquier otro valor

	// Ordenación de los datos
	const sortedData = useMemo(() => {
		if (!sortDescriptor.column) {
			return data;
		}
		return [...data].sort((a, b) => {
			if (a[sortDescriptor.column] < b[sortDescriptor.column]) {
				return sortDescriptor.direction === 'ascending' ? -1 : 1;
			}
			if (a[sortDescriptor.column] > b[sortDescriptor.column]) {
				return sortDescriptor.direction === 'ascending' ? 1 : -1;
			}
			return 0;
		});
	}, [data, sortDescriptor]);

	// Paginación
	const paginatedData = useMemo(() => {
		const startIndex = (page - 1) * rowsPerPage;
		return sortedData.slice(startIndex, startIndex + rowsPerPage);
	}, [sortedData, page, rowsPerPage]);

	const handleSort = (column) => {
		if (sortDescriptor.column === column) {
			setSortDescriptor({
				...sortDescriptor,
				direction:
					sortDescriptor.direction === 'ascending' ? 'descending' : 'ascending',
			});
		} else {
			setSortDescriptor({ column, direction: 'ascending' });
		}
	};

	return (
		<>
			<Table>
				<TableHeader>
					{columnsConfig.map((column) => (
						<TableColumn
							key={column.key}
							allowsSorting
							onClick={() => handleSort(column.key)}>
							{column.label}
						</TableColumn>
					))}
				</TableHeader>
				<TableBody>
					{paginatedData.map((item, index) => (
						<TableRow key={index}>
							{columnsConfig.map((column) => (
								<TableCell key={column.key}>{item[column.key]}</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Pagination
				total={Math.ceil(data.length / rowsPerPage)}
				initialPage={1}
				onChange={setPage}
			/>
		</>
	);
}
