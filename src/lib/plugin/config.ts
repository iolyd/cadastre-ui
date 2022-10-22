import { mergeConfig, type Plugin } from 'vite';
import { PLUGIN_NAME } from './common';

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
		name: PLUGIN_NAME('config'),
		config: (config) => {
			// const svelteAlias = svelteConfig.kit?.alias ?? {};
			// const alias = Object.fromEntries(
			// 	Object.entries(svelteAlias).map(([at, path]) => [at, join(cwd(), path)])
			// );
			return mergeConfig(config, {
				// resolve: {
				// 	alias,
				// },
				define: {
					__VITE_APP_VERSION__: appVersion,
				},
			});
		},
	};
}
