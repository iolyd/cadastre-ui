// App specific styles (not relevant for the package)

import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

const app = globalStyle(':root', {
	backgroundColor: vars.colors.base[500],
});
