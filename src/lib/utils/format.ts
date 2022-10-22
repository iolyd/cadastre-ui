import { paramCase } from 'change-case';
import type * as CSS from 'csstype';
import { isObject } from './object';

/**
 * Utility function expecting an object and returning a recursively formatted version of the object.
 */
export function walk<O extends object>(source: O, format: Walker<O>): any {
	const formatted = Object.entries(source).map(([k, v]) => {
		if (typeof v === 'string' || typeof v === 'number') {
			return format(k, v);
		}
		if (isObject(v)) {
			return [k, walk(v, format)];
		} else return [k, v];
	}, []);
	return Object.fromEntries(formatted);
}
type Walker<O extends object> = (k: any, v: any) => [unknown, unknown];
// type Walker<O extends object> = (k: keyof O, v: O[keyof O]) => [unknown, unknown];
// type Walker<O extends object> = {[K in keyof O]: (k: K, v: O[K]) => string}

/**
 * Translate unitless number or string to pixel value.
 */
export function px(value: string | number) {
	return value + 'px';
}

/**
 * Compose the css string value for a faded theme color.
 *
 * @color The passed color __MUST__ either be a token from `fade`, which represents a css variable with a value comprised of `r g b` components, or it can be an `r g b` component string.
 */
export function fade(color: string, alpha: number) {
	return `rgba(${color}, ${alpha})`;
}

/**
 * Quick variable name composer to get out-of-ts CSS variables. Any cased inputs will be translated
 * to kebab-case.
 */
export function getVar(name: string, keepCasing?: boolean, fallback?: string | number) {
	return `var(--${keepCasing ? name : paramCase(name)}${fallback ? ', ' + fallback : ''})`;
}

/**
 * Compose a quick reference svelte CSS variable names map to easily reuse them in vanilla extract
 * styles. returns an object mapping the input camelCased names to the expected kebab-case full
 * `var(--...)` function.
 */
export function varBook<K extends string>(
	names: readonly K[],
	keepCasing?: boolean
): { [V in K]: string } {
	return Object.fromEntries(names.map((n) => [n, getVar(n, keepCasing)])) as any;
}

/**
 * Compose CSS animation shorthand(s) from passed parameters. See
 * https://developer.mozilla.org/en-US/docs/Web/CSS/animation for expected order of params.
 *
 * Duration | easing-function | delay | iteration-count | direction | fill-mode | play-state | name
 * animation: 3s ease-in 1s 2 reverse both paused slidein;
 *
 * Duration | easing-function | delay | name animation: 3s linear 1s slidein;
 *
 * Two animations animation: 3s linear slidein, 3s ease-out 5s slideout;
 */
export function anim(...details: (string | number)[] | (string | number)[][]): string {
	if (Array.isArray(details[0])) {
		return (details as string[][])
			.map((a) => {
				return anim(...a);
			})
			.join(', ');
	}
	return details.join(' ');
}

type CSSAnimationParams = [
	duration?: CSS.Properties['animationDuration'],
	easing?: CSS.Properties['animationTimingFunction'],
	delay?: CSS.Properties['animationDelay'],
	iterationCount?: CSS.Properties['animationIterationCount'],
	direction?: CSS.Properties['animationDirection'],
	fillMode?: CSS.Properties['animationFillMode'],
	playState?: CSS.Properties['animationPlayState'],
	name?: CSS.Properties['animationName']
];

export function childOf(className: string) {
	return `${className} $`;
}

/**
 * ### Attention:
 *
 * Selectors ultimately must target the current element, i.e. `&`.
 *
 * Selectors targeting other elements, for example childrens of the current `&` element, will not be
 * valid.
 */
export const sel = {
	childOf: function (className: string) {
		return `${className} &`;
	},
	directChildOf: function (className: string) {
		return `${className} > &`;
	},
	hasClass: function (className: string) {
		return `&${className}`;
	},
	nthChild: function (n: string | number) {
		return `&:nth-child(${n})`;
	},
};
