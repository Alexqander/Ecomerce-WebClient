'use client';

import {
	Card,
	Grid,
	Tab,
	TabGroup,
	TabList,
	TabPanel,
	TabPanels,
	Text,
	Title,
	BadgeDelta,
	Icon,
	InformationCircleIcon,
	MultiSelect,
	MultiSelectItem,
	Select,
	SelectItem,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Flex,
	Metric,
	ProgressBar,
} from '@tremor/react';
import { AreaChart } from '@tremor/react';
import React from 'react';

const Kpi = {
	title: '',
	metric: '',
	progress: 0,
	target: '',
	delta: '',
	deltaType: '',
};

const kpiData = [
	{
		title: 'Sales',
		metric: '$ 12,699',
		progress: 15.9,
		target: '$ 80,000',
		delta: '13.2%',
		deltaType: 'moderateIncrease',
	},
	{
		title: 'Profit',
		metric: '$ 45,564',
		progress: 36.5,
		target: '$ 125,000',
		delta: '23.9%',
		deltaType: 'increase',
	},
	{
		title: 'Customers',
		metric: '1,072',
		progress: 53.6,
		target: '2,000',
		delta: '10.1%',
		deltaType: 'moderateDecrease',
	},
];

const chartdata = [
	{
		date: 'Jan 22',
		SemiAnalysis: 2890,
		'The Pragmatic Engineer': 2338,
	},
	{
		date: 'Feb 22',
		SemiAnalysis: 2756,
		'The Pragmatic Engineer': 2103,
	},
	{
		date: 'Mar 22',
		SemiAnalysis: 3322,
		'The Pragmatic Engineer': 2194,
	},
	{
		date: 'Apr 22',
		SemiAnalysis: 3470,
		'The Pragmatic Engineer': 2108,
	},
	{
		date: 'May 22',
		SemiAnalysis: 3475,
		'The Pragmatic Engineer': 1812,
	},
	{
		date: 'Jun 22',
		SemiAnalysis: 3129,
		'The Pragmatic Engineer': 1726,
	},
];

const valueFormatter = function (number) {
	return '$ ' + new Intl.NumberFormat('us').format(number).toString();
};

import { useState } from 'react';

export const SalesPerson = {
	name: '',
	leads: 0,
	sales: '',
	quota: '',
	variance: '',
	region: '',
	status: '',
};

const salesPeople = [
	{
		name: 'Peter Doe',
		leads: 45,
		sales: '1,000,000',
		quota: '1,200,000',
		variance: 'low',
		region: 'Region A',
		status: 'overperforming',
	},
	{
		name: 'Lena Whitehouse',
		leads: 35,
		sales: '900,000',
		quota: '1,000,000',
		variance: 'low',
		region: 'Region B',
		status: 'average',
	},
	{
		name: 'Phil Less',
		leads: 52,
		sales: '930,000',
		quota: '1,000,000',
		variance: 'medium',
		region: 'Region C',
		status: 'underperforming',
	},
	{
		name: 'John Camper',
		leads: 22,
		sales: '390,000',
		quota: '250,000',
		variance: 'low',
		region: 'Region A',
		status: 'overperforming',
	},
	{
		name: 'Max Balmoore',
		leads: 49,
		sales: '860,000',
		quota: '750,000',
		variance: 'low',
		region: 'Region B',
		status: 'overperforming',
	},
];

const deltaTypes = {
	average: 'unchanged',
	overperforming: 'moderateIncrease',
	underperforming: 'moderateDecrease',
};

export default function DasboardPage() {
	const [selectedStatus, setSelectedStatus] = useState('all');
	const [selectedNames, setSelectedNames] = useState([]);

	const isSalesPersonSelected = (salesPerson) =>
		(salesPerson.status === selectedStatus || selectedStatus === 'all') &&
		(selectedNames.includes(salesPerson.name) || selectedNames.length === 0);
	return (
		<main className="p-12 ml-56">
			<TabGroup className="">
				<TabList>
					<Tab>Overview</Tab>
					<Tab>Detail</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Grid numItemsMd={2} numItemsLg={3} className="gap-6">
							{kpiData.map((item) => (
								<Card key={item.title}>
									<Flex alignItems="start">
										<div className="truncate">
											<Text>{item.title}</Text>
											<Metric className="truncate">{item.metric}</Metric>
										</div>
										<BadgeDelta deltaType={item.deltaType}>
											{item.delta}
										</BadgeDelta>
									</Flex>
									<Flex className="mt-4 space-x-2">
										<Text className="truncate">{`${item.progress}% (${item.metric})`}</Text>
										<Text className="truncate">{item.target}</Text>
									</Flex>
									<ProgressBar value={item.progress} className="mt-2" />
								</Card>
							))}
						</Grid>
						<div className="mt-6">
							<Card>
								<Title>Newsletter revenue over time (USD)</Title>
								<AreaChart
									className="h-72 mt-4"
									data={chartdata}
									index="date"
									categories={['SemiAnalysis', 'The Pragmatic Engineer']}
									colors={['indigo', 'cyan']}
									valueFormatter={valueFormatter}
								/>
							</Card>
						</div>
					</TabPanel>
					<TabPanel>
						<div className="mt-6">
							<Card>
								<div>
									<Flex
										className="space-x-0.5"
										justifyContent="start"
										alignItems="center"
									>
										<Title> Performance History </Title>
									</Flex>
								</div>
								<div className="flex space-x-2">
									<MultiSelect
										className="max-w-full sm:max-w-xs"
										onValueChange={setSelectedNames}
										placeholder="Select Salespeople..."
									>
										{salesPeople.map((item) => (
											<MultiSelectItem key={item.name} value={item.name}>
												{item.name}
											</MultiSelectItem>
										))}
									</MultiSelect>
									<Select
										className="max-w-full sm:max-w-xs"
										defaultValue="all"
										onValueChange={setSelectedStatus}
									>
										<SelectItem value="all">All Performances</SelectItem>
										<SelectItem value="overperforming">
											Overperforming
										</SelectItem>
										<SelectItem value="average">Average</SelectItem>
										<SelectItem value="underperforming">
											Underperforming
										</SelectItem>
									</Select>
								</div>
								<Table className="mt-6">
									<TableHead>
										<TableRow>
											<TableHeaderCell>Name</TableHeaderCell>
											<TableHeaderCell className="text-right">
												Leads
											</TableHeaderCell>
											<TableHeaderCell className="text-right">
												Sales ($)
											</TableHeaderCell>
											<TableHeaderCell className="text-right">
												Quota ($)
											</TableHeaderCell>
											<TableHeaderCell className="text-right">
												Variance
											</TableHeaderCell>
											<TableHeaderCell className="text-right">
												Region
											</TableHeaderCell>
											<TableHeaderCell className="text-right">
												Status
											</TableHeaderCell>
										</TableRow>
									</TableHead>

									<TableBody>
										{salesPeople
											.filter((item) => isSalesPersonSelected(item))
											.map((item) => (
												<TableRow key={item.name}>
													<TableCell>{item.name}</TableCell>
													<TableCell className="text-right">
														{item.leads}
													</TableCell>
													<TableCell className="text-right">
														{item.sales}
													</TableCell>
													<TableCell className="text-right">
														{item.quota}
													</TableCell>
													<TableCell className="text-right">
														{item.variance}
													</TableCell>
													<TableCell className="text-right">
														{item.region}
													</TableCell>
													<TableCell className="text-right">
														<BadgeDelta
															deltaType={deltaTypes[item.status]}
															size="xs"
														>
															{item.status}
														</BadgeDelta>
													</TableCell>
												</TableRow>
											))}
									</TableBody>
								</Table>
							</Card>
						</div>
					</TabPanel>
				</TabPanels>
			</TabGroup>
		</main>
	);
}