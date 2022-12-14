import styles, { type CSPair } from 'ansi-styles';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export const PATHS = {
	PRETTIER_CONFIG: resolve('.prettierrc'),
	STYLES: {
		SOURCE: resolve('src', 'lib', 'utils', 'constants.ts'),
		OUTPUT: resolve('src', 'lib', 'styles', 'theme.css.ts'),
	},
	ICONS: {
		SOURCE: resolve('src', 'lib', 'components', 'Icon', '_svgs'),
		OUTPUT: resolve('src', 'lib', 'components', 'Icon', 'icons.ts'),
	},
	// STYLES: {
	// 	SOURCE: '../utils/constants.ts',
	// 	OUTPUT: '../styles/theme.css.ts',
	// },
	// ICONS: {
	// 	SOURCE: '../components/Icon/_svgs',
	// 	OUTPUT: '../components/Icon/icons.ts',
	// },
};

export const PRETTIER_CONFIG = JSON.parse(readFileSync(PATHS.PRETTIER_CONFIG).toString());

export function PLUGIN_NAME(name: string) {
	return `cadastre-${name}`;
}

export const PLUGIN_CONSOLE = class {
	private static _format = (color: CSPair, ...args: any) => {
		args[0] = `${color.open}[Cadastre]: ${args[0]}${color.close}`;
		return args;
	};

	static log(...args: Parameters<typeof console.log>) {
		console.log(...this._format(styles.gray, ...args));
	}
	static error(...args: Parameters<typeof console.error>) {
		console.error(...this._format(styles.red, ...args));
	}
	static warn(...args: Parameters<typeof console.warn>) {
		console.warn(...this._format(styles.yellow, ...args));
	}
	static info(...args: Parameters<typeof console.info>) {
		console.info(...this._format(styles.blueBright, ...args));
	}
	static success(...args: Parameters<typeof console.info>) {
		console.info(...this._format(styles.greenBright, ...args));
	}
};
