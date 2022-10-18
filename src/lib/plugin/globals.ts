import type { Plugin } from 'vite';
import { PLUGIN_CONSOLE, PLUGIN_NAME } from './common';

type CadastreGlobalsOptions = {
	/**
	 * Define an app versioning string that the plugin will inject into the app using vite's
	 * `define` option to search-and-replace occurrences. This version identifier is used internally
	 * by the ui components and utils, but it can also be used externally by invoking the global
	 * variable named: `__VITE_APP_VERSION__`.
	 */
	appVersion?: string;
};

export default function cadastreGlobals({
	appVersion = JSON.stringify(Date.now().toString()),
}: CadastreGlobalsOptions = {}): Plugin {
	return {
		// Setting the expected global variable(s).
		name: PLUGIN_NAME('global-variables'),
		apply: 'build',
		config: () => {
			return {
				define: {
					__VITE_APP_VERSION__: appVersion,
				},
			};
		},
		async buildStart() {
			PLUGIN_CONSOLE.info(
				'updated global version variable: __VITE_APP_VERSION__ = ' + appVersion
			);
		},
	};
}
