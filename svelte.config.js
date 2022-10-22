import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		typescript: true,
		scss: true,
	}),
	kit: {
		adapter: adapter(),
		alias: {
			$actions: 'src/lib/actions',
			$components: 'src/lib/components',
			$plugin: 'src/lib/plugin',
			$routes: 'src/routes',
			$styles: 'src/lib/styles',
			$transitions: 'src/lib/transitions',
			$utils: 'src/lib/utils',
		},
	},
	compilerOptions: {
		cssHash: ({ hash, css /* name, filename */ }) => `cadastre-${hash(css)}`,
	},
	package: {
		// source: 'src/lib/',
	},
};

export default config;
