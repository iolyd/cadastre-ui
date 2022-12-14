import { paramCase } from 'change-case';
// @ts-ignore:next-line
import toPath from 'element-to-path';
import { readdirSync, readFileSync, writeFile } from 'fs';
import { extname, parse, relative, resolve } from 'path';
import prettier from 'prettier';
import { parse as parseSvg, type INode } from 'svgson';
import type { Plugin } from 'vite';
import { PATHS, PLUGIN_CONSOLE, PLUGIN_NAME, PRETTIER_CONFIG } from './common';

type CadastreIconsConfig = {
	source?: string;
};

const PATH_TYPES = ['primary', 'secondary'];

/**
 * Parse a given svg's paths and return it normalized, where every non-path svg element (rect,
 * circle, etc.) is converted to a path, returned as arrays of strokes and fills paths' `d`
 * attribute values.
 */
async function extractSvgPaths(svg: INode) {
	const strokes: { d: string; type: typeof PATH_TYPES[number] }[] = [];
	const fills: { d: string; type: typeof PATH_TYPES[number] }[] = [];

	if (['path', 'rect', 'line', 'polyline', 'polygon', 'circle', 'ellipse'].includes(svg.name)) {
		const d = svg.name === 'path' ? svg.attributes.d : toPath(svg);
		if (svg.attributes.stroke) {
			strokes.push({ d, type: svg.attributes.type || PATH_TYPES[0] });
		} else if (svg.attributes.fill) {
			fills.push({ d, type: svg.attributes.type || PATH_TYPES[0] });
		}
	}
	if (svg.children.length) {
		for await (const child of svg.children) {
			const children = await extractSvgPaths(child);
			strokes.push(...children.strokes);
			fills.push(...children.fills);
		}
	}
	return { strokes, fills };
}

/**
 * Plugin to handle and automate generation of icons' ts definition from svg assets.
 */
export default function cadastreIcons({
	source = PATHS.ICONS.SOURCE,
}: CadastreIconsConfig = {}): Plugin[] {
	async function generateIcons() {
		PLUGIN_CONSOLE.log('generating icons form svg source assets...');

		try {
			const promises = readdirSync(source)
				.filter((f) => extname(f).toLocaleLowerCase() === '.svg')
				.map(async (file) => {
					const svg = await parseSvg(readFileSync(resolve(source, file)).toString());
					const name = paramCase(parse(file).name);
					const { width, height, viewBox } = svg.attributes;
					const { strokes, fills } = await extractSvgPaths(svg);
					return {
						name,
						width,
						height,
						viewBox,
						strokes,
						fills,
					};
				});

			const parsed = (await Promise.all(promises)).reduce(
				(acc, { name, ...props }) => ({ ...acc, [name]: props }),
				{}
			);

			const comment = `/*
			* ?????? WARNING ??????
			*
			* This file was generated by the Cadastre-UI plugin, using the svg assets found in
			* ${relative('src', source)}.
			* All changes added manually here will be lost on next iteration run of plugin's generators.
			*
			* Generated at: ${new Date()}
			*
			* ?????? WARNING ??????
			*/`;

			const formatted = prettier.format(
				`${comment}\nexport const icons = ${JSON.stringify(parsed)} as const`,
				{
					parser: 'babel-ts',
					...PRETTIER_CONFIG,
				}
			);

			writeFile(PATHS.ICONS.OUTPUT, formatted, (error) => {
				if (error) {
					throw PLUGIN_CONSOLE.error(
						'error occured while attempting to generate icons: ',
						error
					);
				}
				PLUGIN_CONSOLE.success('successfully generated new icons from svg assets!');
			});
		} catch (error) {
			PLUGIN_CONSOLE.error(error);
		}
	}

	return [
		{
			name: PLUGIN_NAME('watch-icons'),
			configureServer(server) {
				async function watch(abspath: string) {
					if (
						(abspath.startsWith(source) &&
							extname(abspath).toLocaleLowerCase() === '.svg') ||
						abspath === __filename
					) {
						generateIcons();
					}
				}
				server.watcher.on('add', watch);
				server.watcher.on('change', watch);
			},
			buildStart: {
				async handler() {
					generateIcons();
				},
			},
		},
	];
}
