/**
 * For consistent naming of variants across components.
 *
 * Omit keys where needed.
 */
export const variants = ['default', 'outlined', 'ghost', 'nav', 'cta'] as const;

/**
 * Common colors system.
 */
export const defaultColors = {
	primary: {
		100: 'hsl(157, 48%, 72%)',
		300: 'hsl(156, 50%, 63%)',
		500: 'hsl(155, 54%, 50%)',
		700: 'hsl(157, 66%, 42%)',
		900: 'hsl(158, 79%, 33%)'
	},
	secondary: {
		100: 'hsl(23, 86%, 81%)',
		300: 'hsl(22, 83%, 77%)',
		500: 'hsl(21, 77%, 72%)',
		700: 'hsl(20, 74%, 66%)',
		900: 'hsl(19, 66%, 58%)'
	},
	light: {
		100: 'hsl(80, 20%, 98%)',
		300: 'hsl(95, 16%, 95%)',
		500: 'hsl(110, 12%, 93%)',
		700: 'hsl(125, 10%, 90%)',
		900: 'hsl(140, 9%, 86%)'
	},
	dark: {
		100: 'hsl(49, 5%, 35%)',
		300: 'hsl(50, 6%, 29%)',
		500: 'hsl(51,7%, 21%)',
		700: 'hsl(52,8%, 15%)',
		900: 'hsl(53, 9%, 10%)'
	},
	success: {
		100: 'hsl(83, 71%, 74%)',
		300: 'hsl(83, 72%, 68%)',
		500: 'hsl(83, 73%, 60%)',
		700: 'hsl(83, 74%, 49%)',
		900: 'hsl(83, 80%, 44%)'
	},
	error: {
		100: 'hsl(2, 90%, 78%)',
		300: 'hsl(3, 88%, 72%)',
		500: 'hsl(3, 84%, 66%)',
		700: 'hsl(4, 76%, 59%)',
		900: 'hsl(5, 66%, 50%)'
	}
} as const;

/**
 * Common sizes system.
 */
export const defaultSizes = {
	x3small: 8,
	x2small: 10,
	xsmall: 12,
	small: 14,
	medium: 16,
	large: 20,
	xlarge: 28,
	x2large: 40,
	x3large: 56,
	x4large: 80
} as const;
