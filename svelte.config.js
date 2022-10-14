import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		typescript: true,
		scss: true
	}),
	kit: {
		adapter: adapter(),
		alias: {
			$actions: 'src/lib/actions',
			$complexes: 'src/lib/complexes',
			$primitives: 'src/lib/primitives',
			$routes: 'src/routes',
			$styles: 'src/lib/styles',
			$transitions: 'src/lib/transitions',
			$utils: 'src/lib/utils',
		},
	}
};

export default config;
