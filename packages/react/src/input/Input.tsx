import * as React from 'react';
import { input, InputTheme } from '@recastui/themes';
import { VariantProps } from 'class-variance-authority';
import { cl } from '../utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & VariantProps<InputTheme>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, error, disabled, size, type, fullWidth, variant, inline, ...props }, ref) => {
		return (
			<input
				className={cl(
					input({
						type,
						size,
						variant,
						fullWidth,
						inline,
						error,
						disabled,
						// @ts-ignore
						className,
					}),
				)}
				type={type}
				disabled={disabled}
				ref={ref}
				{...props}
			/>
		);
	},
);

Input.displayName = 'Input';
