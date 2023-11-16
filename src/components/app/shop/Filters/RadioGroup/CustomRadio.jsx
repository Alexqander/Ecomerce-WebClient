'use client';
import React from 'react';
import {
	RadioGroup,
	Radio,
	useRadio,
	VisuallyHidden,
	cn,
} from '@nextui-org/react';

export default function CustomRadio(props) {
	const {
		Component,
		children,
		isSelected,
		description,
		getBaseProps,
		getWrapperProps,
		getInputProps,
		getLabelProps,
		getLabelWrapperProps,
		getControlProps,
	} = useRadio(props);

	return (
		<Component
			{...getBaseProps()}
			className={cn(
				'group inline-flex items-center hover:opacity-70 active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent',
				'max-w-[300px] cursor-pointer border-2 border-default rounded-lg gap-4 p-4',
				'data-[selected=true]:border-primary'
			)}>
			<VisuallyHidden>
				<input {...getInputProps()} />
			</VisuallyHidden>
			<span {...getWrapperProps()}>
				<span {...getControlProps()} />
			</span>
			<div {...getLabelWrapperProps()}>
				{children && <span {...getLabelProps()}>{children}</span>}
				{description && (
					<span className="text-small text-foreground opacity-70">
						{description}
					</span>
				)}
			</div>
		</Component>
	);
}
