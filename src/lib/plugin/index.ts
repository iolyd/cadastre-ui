import type { Plugin } from 'vite';
import cadastreConfig from './config';
import cadastreIcons from './icons';
import cadastreStyles from './styles';

type CadastreOptions = {
	/**
	 * Options for cadastre's globals plugin.
	 */
	config?: Parameters<typeof cadastreConfig>[0];
	/**
	 * Options for cadastre's styles plugin.
	 */
	styles?: Parameters<typeof cadastreStyles>[0];
	/**
	 * Options for cadastre's icons plugin.
	 */
	icons?: Parameters<typeof cadastreIcons>[0];
};

/**
 * Configurable vite plugin for Cadastre-ui.
 */
export default function cadastre(options: CadastreOptions = {}): Plugin[] {
	return [
		cadastreConfig(options.config),
		...cadastreStyles(options.styles),
		...cadastreIcons(options.icons),
	];
}
