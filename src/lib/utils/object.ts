/**
 * Check if passed value is an object.
 */
export function isObject(value: unknown) {
	return !!value && typeof value === 'object' && !Array.isArray(value);
}

/**
 * Helper to deep merge objects and overcome `Object.assign` or `{...a, ...b}` ignoring nested
 * objects. **To avoid affecting the original `base` object, simply pass it as a destructured
 * assignment: `{...base}`**
 *
 * @param base Reference object used for the base values.
 * @param modifications Modification objects to apply on top of the base. Modifications applied from
 *   left to right.
 * @returns Merged object of the base with the applied modifications.
 */
export function mergeObjects(base: Record<any, any>, ...modifications: Record<any, any>[]) {
	if (!modifications) {
		return base;
	}
	const modif = modifications.shift();
	if (isObject(base) && isObject(modif)) {
		for (const key in modif) {
			if (isObject(modif[key])) {
				if (!isObject(base[key])) {
					base[key] = {};
				}
				mergeObjects(base[key], modif[key]);
			} else {
				base[key] = modif[key];
			}
		}
	}

	return base;
}

/**
 * Remove keys with values equal to null, '', or undefined.
 *
 * @param obj Object to be cleaned.
 * @returns Object stripped of keys with empty values.
 */
export function removeEmptyProps<T>(obj: T extends Record<any, any> ? T : never): Partial<T> {
	const keys = Object.keys(obj) as (keyof T)[];
	const entries = keys
		.filter((k) => obj[k] !== null && obj[k] !== '' && obj[k] !== undefined)
		.map((k) => [k, isObject(obj[k]) ? removeEmptyProps(obj[k]) : obj[k]]);

	return Object.fromEntries(entries);
}
