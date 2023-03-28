import { cva } from 'class-variance-authority';
import { colors, RecastColors } from './colors';

export enum BadgeVariantTypes {
	solid = 'solid',
	outline = 'outline',
	subtle = 'subtle',
}

const variantClasses = {
	// Need to explicitly defined color variation classes for individual color as tailwindcss compiler cannot detect dynamically formed classes
	solid: {
		main: 'bg-main-9 text-main-1',
		tomato: 'bg-tomato-9 text-white',
		red: 'bg-red-9 text-white',
		crimson: 'bg-crimson-9 text-white',
		pink: 'bg-pink-9 text-white',
		plum: 'bg-plum-9 text-white',
		purple: 'bg-purple-9 text-white',
		violet: 'bg-violet-9 text-white',
		indigo: 'bg-indigo-9 text-white',
		blue: 'bg-blue-9 text-white',
		cyan: 'bg-cyan-9 text-white',
		teal: 'bg-teal-9 text-white',
		green: 'bg-green-9 text-white',
		grass: 'bg-grass-9 text-white',
		orange: 'bg-orange-9 text-white',
		brown: 'bg-brown-9 text-white',
		sky: 'bg-sky-9 text-black',
		mint: 'bg-mint-9 text-black',
		lime: 'bg-lime-9 text-black',
		yellow: 'bg-yellow-9 text-black',
		amber: 'bg-amber-9 text-black',
		gold: 'bg-gold-9 text-white',
		bronze: 'bg-bronze-9 text-white',
		error: 'bg-red-9 text-white',
		info: 'bg-sky-9 text-black',
		success: 'bg-green-9 text-white',
		warning: 'bg-amber-9 text-black',
	},
	outline: {
		main: 'text-main-9 border-main-9',
		tomato: 'text-tomato-9 border-tomato-9',
		red: 'text-red-9 border-red-9',
		crimson: 'text-crimson-9 border-crimson-9',
		pink: 'text-pink-9 border-pink-9',
		plum: 'text-plum-9 border-plum-9',
		purple: 'text-purple-9 border-purple-9',
		violet: 'text-violet-9 border-violet-9',
		indigo: 'text-indigo-9 border-indigo-9',
		blue: 'text-blue-9 border-blue-9',
		cyan: 'text-cyan-9 border-cyan-9',
		teal: 'text-teal-9 border-teal-9',
		green: 'text-green-9 border-green-9',
		grass: 'text-grass-9 border-grass-9',
		orange: 'text-orange-9 border-orange-9',
		brown: 'text-brown-9 border-brown-9',
		sky: 'text-sky-9 border-sky-9',
		mint: 'text-mint-9 border-mint-9',
		lime: 'text-lime-9 border-lime-9',
		yellow: 'text-yellow-9 border-yellow-9',
		amber: 'text-amber-9 border-amber-9',
		gold: 'text-gold-9 border-gold-9',
		bronze: 'text-bronze-9 border-bronze-9',
		error: 'text-red-9 border-red-9',
		info: 'text-sky-9 border-sky-9',
		success: 'text-green-9 border-green-9',
		warning: 'text-amber-9 border-amber-9',
	},
	subtle: {
		main: 'bg-main-3 text-main-9',
		tomato: 'bg-tomato-3 text-tomato-9',
		red: 'bg-red-3 text-red-9',
		crimson: 'bg-crimson-3 text-crimson-9',
		pink: 'bg-pink-3 text-pink-9',
		plum: 'bg-plum-3 text-plum-9',
		purple: 'bg-purple-3 text-purple-9',
		violet: 'bg-violet-3 text-violet-9',
		indigo: 'bg-indigo-3 text-indigo-9',
		blue: 'bg-blue-3 text-blue-9',
		cyan: 'bg-cyan-3 text-cyan-9',
		teal: 'bg-teal-3 text-teal-9',
		green: 'bg-green-3 text-green-9',
		grass: 'bg-grass-3 text-grass-9',
		orange: 'bg-orange-3 text-orange-9',
		brown: 'bg-brown-3 text-brown-9',
		sky: 'bg-sky-3 text-sky-9',
		mint: 'bg-mint-3 text-mint-9',
		lime: 'bg-lime-3 text-lime-9',
		yellow: 'bg-yellow-3 text-yellow-9',
		amber: 'bg-amber-3 text-amber-9',
		gold: 'bg-gold-3 text-gold-9',
		bronze: 'bg-bronze-3 text-bronze-9',
		error: 'bg-red-3 text-red-9',
		info: 'bg-sky-3 text-sky-9',
		success: 'bg-green-3 text-green-9',
		warning: 'bg-amber-3 text-amber-9',
	},
};

const getColorVariants = (type: BadgeVariantTypes) =>
	colors.map((color: RecastColors) => {
		return {
			variant: BadgeVariantTypes[type],
			color: color as RecastColors,
			class: variantClasses[type][color],
		};
	});

const compoundVariants = [
	...getColorVariants(BadgeVariantTypes.solid),
	...getColorVariants(BadgeVariantTypes.outline),
	...getColorVariants(BadgeVariantTypes.subtle),
];

export const badge = cva(
	[
		'inline-flex',
		'leading-normal',
		'items-center',
		'justify-center',
		'text-center',
		'transition-all',
		'font-semibold',
		'text-xs',
		'border',
		'border-transparent',
		'overflow-hidden',
		'border',
		'px-1',
	],
	{
		variants: {
			variant: {
				solid: '',
				outline: '',
				subtle: '',
			},
			// Explicitly define empty color classes for cva typings
			color: {
				main: '',
				tomato: '',
				red: '',
				crimson: '',
				pink: '',
				plum: '',
				purple: '',
				violet: '',
				indigo: '',
				blue: '',
				cyan: '',
				teal: '',
				green: '',
				grass: '',
				orange: '',
				brown: '',
				sky: '',
				mint: '',
				lime: '',
				yellow: '',
				amber: '',
				gold: '',
				bronze: '',
				error: '',
				info: '',
				success: '',
				warning: '',
			},
			uppercase: { true: 'uppercase' },
			pill: { true: 'rounded-full' },
		},
		compoundVariants,
		defaultVariants: {
			variant: 'solid',
			color: 'main',
			uppercase: true,
		},
	},
);

export type BadgeTheme = typeof badge;
