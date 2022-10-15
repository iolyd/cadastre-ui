/**
 * Base class for individual systems.
 */
class System {}

/**
 * Common colors.
 */
class ColorSystem extends System {}

/**
 * Common sizes.
 */
class SizeSystem extends System {}

/**
 * Common defaults for detail stylings.
 *
 * - Border radius
 * - Nesting insets
 * - Paddings (normal and compact)
 * - Size to height ratio (x * font-size)
 */
class MiscellaneousSystem extends System {}

/**
 * Common fonts.
 *
 * - Main font
 * - Secondary / Misc font
 */
class FontSystem extends System {}

/**
 * Customize the default systems by providing your own values.
 */
export class Systems implements ColorSystem, SizeSystem, MiscellaneousSystem {
	constructor() {
		// onMount(() => {
		// 	console.log('Loggin form onmount inside class constructor!');
		// });
	}

	update() {}

	clear() {}
}
