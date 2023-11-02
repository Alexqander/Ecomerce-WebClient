'use client';
import { Progress } from '@nextui-org/react';
import { useState, useEffect } from 'react';

export default function ProgressBar() {
	const [progress, setProgress] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((v) => (v >= 100 ? 0 : v + 10));
		}, 500);

		return () => clearInterval(interval);
	}, []);
	return (
		<Progress
			aria-label="loading page..."
			size="lg"
			value={progress}
			color="success"
			showValueLabel
			className="max-w-3xl mx-auto my-10"
		/>
	);
}
