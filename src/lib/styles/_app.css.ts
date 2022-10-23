// App specific styles (not relevant for the package)

import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

const app = globalStyle('main', {
	backgroundColor: vars.colors.base[500],
});
