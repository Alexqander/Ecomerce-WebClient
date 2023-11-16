import React from 'react';

export default function FooterDev({ data }) {
	return (
		<div className="fixed left-4 bottom-4 text-left bg-black bg-opacity-70 p-2 rounded-full opacity-95 backdrop-blur-md">
			{JSON.stringify(data, null, 2)}
		</div>
	);
}
