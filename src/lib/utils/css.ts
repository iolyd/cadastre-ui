import { colord } from 'colord';
import { defaultColors } from './constants';

export function objectToCSSVariables(source: Record<string, any>, ) {
	const css = Object.entries(source).map(([k, v]) => {
		if (v !is_o)
	})
	return css;
}

export function parseColorSystem(colors: typeof defaultColors = defaultColors) {
	const cssColors =
		Object.entries(colors)
			.map(([palette, pv]) =>
				Object.entries(pv).map(([level, lv]) => {
					const rgb = colord(lv).toRgb();
					return (
						`--color-${palette}-${level}: ${lv}; ` +
						`--rgb-${palette}-${level}: ${rgb.r}, ${rgb.g}, ${rgb.b};`
					);
				})
			)
			.reduce((accumulated, current) => [...accumulated, ...current])
			.join('; ') + '; ';

	return cssColors;
}
