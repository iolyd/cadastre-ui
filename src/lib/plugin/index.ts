import { mergeConfig, type Plugin } from 'vite';
import { PLUGIN_NAME } from './common';
import cadastreIcons from './icons';
import cadastreStyles from './styles';

export type CadastreConfig = {
	/**
	 * Define an app versioning string that the plugin will inject into the app using vite's
	 * `define` option to search-and-replace occurrences. This version identifier is used internally
	 * by the ui components and utils, but it can also be used externally by invoking the global
	 * variable named: `__CADASTRE_APP_VERSION__`.
	 */
	appVersion?: string;
	/**
	 * Customize Cadastre's styles for your app.
	 */
	styles?: Parameters<typeof cadastreStyles>[0];
	/**
	 * Customize how Cadastre handles its icon assets.
	 */
	icons?: Parameters<typeof cadastreIcons>[0];
};

/**
 * Configurable vite plugin for Cadastre-ui.
 */
export default function cadastre({
	appVersion = JSON.stringify(Date.now().toString()),
	styles,
	icons,
}: CadastreConfig = {}): Plugin[] {
	return [
		{
			name: PLUGIN_NAME('config'),
			config: (config) => {
				return mergeConfig(config, {
					// Set the expected global variable(s).
					define: {
						__CADASTRE_APP_VERSION__: appVersion,
					},
				});
			},
		},
		...cadastreStyles(styles),
		...cadastreIcons(icons),
	];
}
