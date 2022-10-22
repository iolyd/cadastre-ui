import { vars } from '$styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

const buttonBase = style([
	{
		position: 'relative',
		display: 'inline-block',
		fontFamily: 'inherit',
		padding: '2rem',
		backgroundColor: vars.colors.primary[500],
		border: 'none',
		fontSize: 'inherit',
		cursor: 'pointer',
		fontWeight: '400',
	},
]);

export const kinds = styleVariants({
	default: [
		buttonBase,
		{
			backgroundColor: 'red',
		},
	],
	secondary: [
		buttonBase,
		{
			backgroundColor: 'red',
		},
	],
	ghost: [
		buttonBase,
		{
			backgroundColor: 'red',
		},
	],
	cta: [
		buttonBase,
		{
			backgroundColor: 'red',
		},
	],
	nav: [buttonBase, {}],
});

export const inner = style({
	position: 'relative',
	height: '100%',
	width: '100%',
	display: 'grid',
	gridTemplateColumns:
		'[full-start leading-start]' +
		'auto' +
		'[leading-end main-start]' +
		'1fr' +
		'[main-end trailing-start]' +
		'auto' +
		'[trailing-end full-end]',
	selectors: {},
});

const columnBase = style({});

export const columns = styleVariants({
	leading: {},
	main: {},
	trailing: {},
});

// export const inner = recipe({
// 	base: {
// 		display: 'grid',
// 		gridTemplateColumns: `
// 			[full-start leading-start]
// 				auto
// 			[leading-end main-start]
// 				1fr
// 			[main-end trailing-start]
// 				auto
// 			[trailing-end full-end]
// 		`,
// 		alignItems: 'center',
// 		fontFamily: 'inherit',
// 	},
// });
