// import { paramCase } from 'change-case';
// import { colord } from 'colord';
// import { writeFile } from 'fs';
// import prettier from 'prettier';
// import type { Plugin } from 'vite';
// import { defaultColors, defaultMisc, defaultSizes } from '../utils/constants';
// import { isObject } from '../utils/object';
// import { PATHS, PLUGIN_CONSOLE, PLUGIN_NAME, PRETTIER_CONFIG } from './common';

// /**
//  * Parsing objects into a single css string defining the custom properties per the passed format.
//  */
// function objectToCSSVariables(
// 	source: Record<string, unknown>,
// 	{ format = (k, v) => ({ name: k, value: v }) }: ObjectToCSSVariablesOptions = {}
// ): string {
// 	const css = Object.entries(source).reduce((acc, [k, v]) => {
// 		if (typeof v === 'string' || typeof v === 'number') {
// 			const formatted = ([] as CSSVariablesFormatDetails[])
// 				.concat(format(k, v))
// 				.map((f) => `--${paramCase(f.name + '')}: ${f.value}; `)
// 				.join('');

// 			return acc + formatted;
// 		}
// 		if (isObject(v)) {
// 			return (
// 				acc +
// 				objectToCSSVariables(v as {}, { format: (k1, v1) => format(`${k}-${k1}`, v1) })
// 			);
// 		} else return acc;
// 	}, '');
// 	return css;
// }
// type CSSVariablesFormatDetails = {
// 	name: string | number;
// 	value: string | number;
// };
// type ObjectToCSSVariablesOptions = {
// 	format?: (
// 		k: string | number,
// 		v: string | number
// 	) => CSSVariablesFormatDetails | CSSVariablesFormatDetails[];
// };

// /**
//  * Utility to parse a color theme object and define the corresponding set of css variables.
//  */
// function parseColors(colors: typeof defaultColors = defaultColors) {
// 	return objectToCSSVariables(colors, {
// 		format: (k, v) => {
// 			const rgb = colord(v + '').toRgb();
// 			return [
// 				{
// 					name: `color-${k}`,
// 					value: v,
// 				},
// 				{
// 					name: `rgb-${k}`,
// 					value: `${rgb.r}, ${rgb.g}, ${rgb.b}`,
// 				},
// 			];
// 		},
// 	});
// }

// /**
//  * Generate common size values (in pixels).
//  */
// function parseSizes(sizes: typeof defaultSizes = defaultSizes) {
// 	return objectToCSSVariables(sizes, {
// 		format: (k, v) => ({
// 			name: `size-${k}`,
// 			value: `${v}px`,
// 		}),
// 	});
// }

// /**
//  * Generate additionnal common misc values for general theming.
//  */
// function parseMisc(misc: typeof defaultMisc = defaultMisc) {
// 	return objectToCSSVariables(misc, {
// 		format: (k, v) => ({
// 			name: `misc-${k}`,
// 			value: v,
// 		}),
// 	});
// }

// /**
//  * Vite plugin to generate/update the styles assets during dev and build.
//  */
// export default function cadastreStyles({
// 	output = PATHS.STYLES.OUTPUT,
// 	source,
// }: CadastreStylesOptions = {}): Plugin[] {
// 	async function generateStyles() {
// 		PLUGIN_CONSOLE.log('generating new styles from assets...');
// 		try {
// 			const css = [
// 				parseColors(source?.colors),
// 				parseSizes(source?.sizes),
// 				parseMisc(source?.misc),
// 			]
// 				.map((str) => `\n${str}`)
// 				.join('');

// 			const comment = `/*
// 			* ⚠️ WARNING ⚠️
// 			*
// 			* This file was generated by the Cadastre-UI plugin. All changes added manually here will be lost on next iteration run of plugin's generators.
// 			*
// 			* Generated at: ${new Date()}
// 			*
// 			* ⚠️ WARNING ⚠️
// 			*/`;

// 			const formatted = prettier.format(`${comment}\n:root{${css}}`, {
// 				parser: 'css',
// 				...PRETTIER_CONFIG,
// 			});

// 			writeFile(output, formatted, (error) => {
// 				if (error) {
// 					throw PLUGIN_CONSOLE.error(
// 						'error occured while attempting to generate styles: ',
// 						error
// 					);
// 				}
// 				PLUGIN_CONSOLE.success('successfully generated new styles from assets!');
// 			});
// 		} catch (error) {
// 			PLUGIN_CONSOLE.error(error);
// 		}
// 	}

// 	return [
// 		{
// 			// Plugin for dev.
// 			name: PLUGIN_NAME('watch-styles'),
// 			apply: 'serve',
// 			configureServer(server) {
// 				async function watch(abspath: string) {
// 					if (abspath.indexOf(output) > -1) return;
// 					generateStyles();
// 				}
// 				server.watcher.on('add', watch);
// 				server.watcher.on('change', watch);
// 			},
// 			buildStart: {
// 				// order: 'pre',
// 				// sequential: true,
// 				async handler() {
// 					generateStyles();
// 				},
// 			},
// 		},
// 		{
// 			// Plugin for prod.
// 			name: PLUGIN_NAME('build-styles'),
// 			apply: 'build',
// 			writeBundle() {
// 				generateStyles();
// 			},
// 		},
// 	];
// }
// type CadastreStylesOptions = {
// 	output?: string;
// 	source?: {
// 		colors?: Parameters<typeof parseColors>[0];
// 		sizes?: Parameters<typeof parseSizes>[0];
// 		misc?: Parameters<typeof parseMisc>[0];
// 	};
// };
