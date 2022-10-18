import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import cadastre from './src/lib/plugin';

const config: UserConfig = {
	plugins: [cadastre(), sveltekit()],
};

export default config;
