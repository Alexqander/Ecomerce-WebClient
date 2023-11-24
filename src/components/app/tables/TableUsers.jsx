'use client';
import React from 'react';
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Input,
	Button,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	DropdownItem,
	Chip,
	User,
	Pagination,
} from '@nextui-org/react';
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useRouter, usePathname } from 'next/navigation';
import { SearchIcon } from '@/components/icons/SearchIcon';

export default function TableUsers({ data, statusOptions, columns }) {
	const router = useRouter();
	const pathname = usePathname();
	const RoleColorMap = {
		1: 'success',
		2: 'danger',
		3: 'warning',
		4: 'primary',
	};
	const RoleValue = {
		1: 'Administrador',
		2: 'Vendedor',
		3: 'Repartidor',
		4: 'Comprador',
	};
	const renderCell = (item, columnKey) => {
		const cellValue = item[columnKey];

		const renderTextCell = () => (
			<span className="text-default-900 font-semibold">{cellValue}</span>
		);

		const renderNameCell = () => (
			<User
				avatarProps={{ radius: 'lg', src: item.profilePicture }}
				description={item.email}
				name={`${item.name} ${item.lastName}`}>
				<span className="text-default-900 font-semibold">{cellValue}</span>
			</User>
		);

		const renderRoleIdCell = () => (
			<Chip className="capitalize" color={RoleColorMap[item.roleId]}>
				{RoleValue[cellValue]}
			</Chip>
		);

		switch (columnKey) {
			case 'name':
				return renderNameCell();
			case 'lastName':
			case 'email':
			case 'phoneNumber':
				return renderTextCell();
			case 'roleId':
				return renderRoleIdCell();
			default:
				return null;
		}
	};
	const INITIAL_VISIBLE_COLUMNS = ['name', 'email', 'phoneNumber', 'roleId'];
	const [filterValue, setFilterValue] = React.useState('');
	const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
	const [visibleColumns, setVisibleColumns] = React.useState(
		new Set(INITIAL_VISIBLE_COLUMNS)
	);
	const [statusFilter, setStatusFilter] = React.useState('all');
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [sortDescriptor, setSortDescriptor] = React.useState({
		column: 'age',
		direction: 'ascending',
	});
	const [page, setPage] = React.useState(1);

	const hasSearchFilter = Boolean(filterValue);

	const headerColumns = React.useMemo(() => {
		if (visibleColumns === 'all') return columns;

		return columns.filter((column) =>
			Array.from(visibleColumns).includes(column.uid)
		);
	}, [visibleColumns]);

	const filteredItems = React.useMemo(() => {
		let filteredData = [...data];

		if (hasSearchFilter) {
			filteredData = filteredData.filter((item) =>
				item.name.toLowerCase().includes(filterValue.toLowerCase())
			);
		}
		if (
			statusFilter !== 'all' &&
			Array.from(statusFilter).length !== statusOptions.length
		) {
			filteredData = filteredData.filter((item) =>
				Array.from(statusFilter).includes(item.status)
			);
		}

		return filteredData;
	}, [data, filterValue, statusFilter]);

	const pages = Math.ceil(filteredItems.length / rowsPerPage);

	const items = React.useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;

		return filteredItems.slice(start, end);
	}, [page, filteredItems, rowsPerPage]);

	const sortedItems = React.useMemo(() => {
		return [...items].sort((a, b) => {
			const first = a[sortDescriptor.column];
			const second = b[sortDescriptor.column];
			const cmp = first < second ? -1 : first > second ? 1 : 0;

			return sortDescriptor.direction === 'descending' ? -cmp : cmp;
		});
	}, [sortDescriptor, items]);

	const onNextPage = React.useCallback(() => {
		if (page < pages) {
			setPage(page + 1);
		}
	}, [page, pages]);

	const onPreviousPage = React.useCallback(() => {
		if (page > 1) {
			setPage(page - 1);
		}
	}, [page]);

	const onRowsPerPageChange = React.useCallback((e) => {
		setRowsPerPage(Number(e.target.value));
		setPage(1);
	}, []);

	const onSearchChange = React.useCallback((value) => {
		if (value) {
			setFilterValue(value);
			setPage(1);
		} else {
			setFilterValue('');
		}
	}, []);

	const onClear = React.useCallback(() => {
		setFilterValue('');
		setPage(1);
	}, []);

	const topContent = React.useMemo(() => {
		return (
			<div className="flex flex-col gap-4">
				<div className="flex justify-between gap-3 items-end">
					<Input
						isClearable
						className="w-full sm:max-w-[44%]"
						placeholder="Buscar por nombre"
						startContent={<SearchIcon />}
						value={filterValue}
						onClear={() => onClear()}
						onValueChange={onSearchChange}
					/>
					<div className="flex gap-3">
						<Dropdown>
							<DropdownTrigger className="hidden sm:flex">
								<Button
									endContent={<ChevronDownIcon className="text-small" />}
									variant="flat">
									Status
								</Button>
							</DropdownTrigger>
							<DropdownMenu
								disallowEmptySelection
								aria-label="Table Columns"
								closeOnSelect={false}
								selectedKeys={statusFilter}
								selectionMode="multiple"
								onSelectionChange={setStatusFilter}>
								{statusOptions.map((status) => (
									<DropdownItem key={status.uid} className="capitalize">
										{status.name}
									</DropdownItem>
								))}
							</DropdownMenu>
						</Dropdown>
						<Dropdown>
							<DropdownTrigger className="hidden sm:flex">
								<Button
									endContent={<ChevronDownIcon className="text-small" />}
									variant="flat">
									Columns
								</Button>
							</DropdownTrigger>
							<DropdownMenu
								disallowEmptySelection
								aria-label="Table Columns"
								closeOnSelect={false}
								selectedKeys={visibleColumns}
								selectionMode="multiple"
								onSelectionChange={setVisibleColumns}>
								{columns.map((column) => (
									<DropdownItem key={column.uid} className="capitalize">
										{column.name}
									</DropdownItem>
								))}
							</DropdownMenu>
						</Dropdown>
						<Button
							onClick={() => router.push(`${pathname}/new`)}
							color="primary"
							endContent={<PlusIcon className="w-5 h-5" />}>
							Nuevo
						</Button>
					</div>
				</div>
				<div className="flex justify-between items-center">
					<span className="text-default-400 text-small">
						Total {data.length} Users
					</span>
					<label className="flex items-center text-default-400 text-small">
						Rows per page:
						<select
							className="bg-transparent outline-none text-default-400 text-small"
							onChange={onRowsPerPageChange}>
							<option value="5">5</option>
							<option value="10">10</option>
							<option value="15">15</option>
						</select>
					</label>
				</div>
			</div>
		);
	}, [
		filterValue,
		statusFilter,
		visibleColumns,
		onRowsPerPageChange,
		data.length,
		onSearchChange,
		hasSearchFilter,
	]);

	const bottomContent = React.useMemo(() => {
		return (
			<div className="py-2 px-2 flex justify-between items-center">
				<span className="w-[30%] text-small text-default-400">
					{selectedKeys === 'all'
						? 'All items selected'
						: `${selectedKeys.size} of ${filteredItems.length} selected`}
				</span>
				<Pagination
					isCompact
					showControls
					showShadow
					color="primary"
					page={page}
					total={pages}
					onChange={setPage}
				/>
				<div className="hidden sm:flex w-[30%] justify-end gap-2">
					<Button
						isDisabled={pages === 1}
						size="sm"
						variant="flat"
						onPress={onPreviousPage}>
						Previous
					</Button>
					<Button
						isDisabled={pages === 1}
						size="sm"
						variant="flat"
						onPress={onNextPage}>
						Next
					</Button>
				</div>
			</div>
		);
	}, [selectedKeys, items.length, page, pages, hasSearchFilter]);

	return (
		<Table
			aria-label="Example table with custom cells, pagination and sorting"
			isHeaderSticky
			bottomContent={bottomContent}
			bottomContentPlacement="outside"
			classNames={{
				wrapper: 'max-h-[750px]',
			}}
			selectedKeys={selectedKeys}
			selectionMode="multiple"
			sortDescriptor={sortDescriptor}
			topContent={topContent}
			topContentPlacement="outside"
			onSelectionChange={setSelectedKeys}
			onSortChange={setSortDescriptor}>
			<TableHeader columns={headerColumns}>
				{(column) => (
					<TableColumn
						key={column.uid}
						align={column.uid === 'actions' ? 'center' : 'start'}
						allowsSorting={column.sortable}>
						{column.name}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody emptyContent={'No users found'} items={sortedItems}>
				{(item) => (
					<TableRow key={item.id}>
						{(columnKey) => (
							<TableCell>{renderCell(item, columnKey)}</TableCell>
						)}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
