import { px } from '../../utils/format';

const base_grid = 2;

/**
 * Default light color theme, source of the contract.
 */
const defaultLightColors = {
	base: {
		100: 'hsl(80, 20%, 98%)',
		300: 'hsl(95, 16%, 95%)',
		500: 'hsl(110, 12%, 93%)',
		700: 'hsl(125, 10%, 90%)',
		900: 'hsl(140, 9%, 86%)',
	},
	contrast: {
		100: 'hsl(49, 5%, 35%)',
		300: 'hsl(50, 6%, 29%)',
		500: 'hsl(51,7%, 21%)',
		700: 'hsl(52,8%, 15%)',
		900: 'hsl(53, 9%, 10%)',
	},
	primary: {
		100: 'hsl(157, 48%, 72%)',
		300: 'hsl(156, 50%, 63%)',
		500: 'hsl(155, 54%, 50%)',
		700: 'hsl(157, 66%, 42%)',
		900: 'hsl(158, 79%, 33%)',
	},
	secondary: {
		100: 'hsl(23, 86%, 81%)',
		300: 'hsl(22, 83%, 77%)',
		500: 'hsl(21, 77%, 72%)',
		700: 'hsl(20, 74%, 66%)',
		900: 'hsl(19, 66%, 58%)',
	},
	success: {
		100: 'hsl(83, 71%, 74%)',
		300: 'hsl(83, 72%, 68%)',
		500: 'hsl(83, 73%, 60%)',
		700: 'hsl(83, 74%, 49%)',
		900: 'hsl(83, 80%, 44%)',
	},
	error: {
		100: 'hsl(2, 90%, 78%)',
		300: 'hsl(3, 88%, 72%)',
		500: 'hsl(3, 84%, 66%)',
		700: 'hsl(4, 76%, 59%)',
		900: 'hsl(5, 66%, 50%)',
	},
};

/**
 * Default dark alternative theme.
 */
const defaultDarkColors: typeof defaultLightColors = {
	base: {
		100: 'hsl(49, 5%, 35%)',
		300: 'hsl(50, 6%, 29%)',
		500: 'hsl(51,7%, 21%)',
		700: 'hsl(52,8%, 15%)',
		900: 'hsl(53, 9%, 10%)',
	},
	contrast: {
		100: 'hsl(80, 20%, 98%)',
		300: 'hsl(95, 16%, 95%)',
		500: 'hsl(110, 12%, 93%)',
		700: 'hsl(125, 10%, 90%)',
		900: 'hsl(140, 9%, 86%)',
	},
	primary: {
		100: 'hsl(23, 86%, 81%)',
		300: 'hsl(22, 83%, 77%)',
		500: 'hsl(21, 77%, 72%)',
		700: 'hsl(20, 74%, 66%)',
		900: 'hsl(19, 66%, 58%)',
	},
	secondary: {
		100: 'hsl(157, 48%, 72%)',
		300: 'hsl(156, 50%, 63%)',
		500: 'hsl(155, 54%, 50%)',
		700: 'hsl(157, 66%, 42%)',
		900: 'hsl(158, 79%, 33%)',
	},
	success: {
		100: 'hsl(83, 71%, 74%)',
		300: 'hsl(83, 72%, 68%)',
		500: 'hsl(83, 73%, 60%)',
		700: 'hsl(83, 74%, 49%)',
		900: 'hsl(83, 80%, 44%)',
	},
	error: {
		100: 'hsl(2, 90%, 78%)',
		300: 'hsl(3, 88%, 72%)',
		500: 'hsl(3, 84%, 66%)',
		700: 'hsl(4, 76%, 59%)',
		900: 'hsl(5, 66%, 50%)',
	},
};

export const defaultColors = {
	light: defaultLightColors,
	dark: defaultDarkColors,
};

/**
 * Default sizes theme, pre-pixelization source of the contract.
 */
export const defaultSizes = {
	x3small: px(4 * base_grid),
	x2small: px(5 * base_grid),
	xsmall: px(6 * base_grid),
	small: px(7 * base_grid),
	medium: px(8 * base_grid),
	large: px(10 * base_grid),
	xlarge: px(14 * base_grid),
	x2large: px(20 * base_grid),
	x3large: px(28 * base_grid),
	x4large: px(38 * base_grid),
};

/**
 * Default ratios (unitless), source of the contract.
 */
export const defaultRatios = {
	radius: '1',
	height: '3',
};
