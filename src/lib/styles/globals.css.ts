import {
	createTheme,
	createThemeContract,
	globalStyle,
	style,
	styleVariants,
} from '@vanilla-extract/css';
import { defaultColors } from './themes/default';

export const colors = createThemeContract(defaultColors.light);
export const light = createTheme(colors, defaultColors.light);
export const dark = createTheme(colors, defaultColors.dark);

export const gs = globalStyle('main', {
	backgroundColor: colors.base[500],
});

export const s = style({
	selectors: {
		[`${dark} &`]: {
			color: 'yellow',
		},
	},
	// color: 'green',
});

const v = styleVariants(colors, (c) => ({ background: 'red' }));

// const globals = globalStyle(':root', {
// 	vars: {
// 		accentColor: vars.colors.primary[500],
// 	},
// 	accentColor: vars.colors.primary[500],
// });

// export const helpers = {
// 	media: {
// 		mobile: '...',
// 		tablet: ',..',
// 		desktop: '...'
// 	}
// }

// const helpers = createSprinkles(
// 	defineProperties({
// 		conditions: {
// 			darkMode: { selector: '.darkmode' },
// 		},
// 		defaultCondition: 'darkMode',
// 		properties: {
// 			color: 'red',
// 		},
// 		shorthands: {},
// 	})
// );
