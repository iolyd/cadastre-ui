import path from 'path';
import { Plugin } from 'vite';

const PATHS = {
	CONSTANTS: path.resolve('src', 'utils', 'constants.ts'),
	ICONS: path.resolve('src', 'components', 'primitives', 'Icon', 'svgs')
};

type CadastreOptions = {};

export default function plugin({}: CadastreOptions): Plugin[] {
	return [
		{
			/**
			 * Dev server plugin enabling adequate watchers and reload behaviors.
			 */
			name: 'cadastre-watch',
			apply: 'serve',
			configureServer(server) {
				async function watch(abspath: string) {
					try {
						if (abspath.indexOf(PATHS.CONSTANTS) > -1) {
							// Generate css variables
						} else if (abspath.indexOf(PATHS.ICONS) > -1) {
							// Generate icons
						}
					} catch (error) {
						console.error(error);
					}
				}
				server.watcher.on('add', watch);
				server.watcher.on('change', watch);
			}
		},
		{
			/**
			 * Build plugin.
			 */
			name: 'cadastre-build',
			apply: 'build',
			async buildStart() {
				try {
					// Generate css variables
					// Generate icons
				} catch (error) {
					console.error(error);
				}
			}
		}
	];
}
