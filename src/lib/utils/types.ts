/**
 * Extract a union type from a readonly array (`[] as const`).
 *
 * Useful for typing component props using arrays, ensuring consistency across the library.
 */
export type UnionFromArray<T extends readonly any[]> = T[number];

// /**
//  * Utility type for outlining the format of css variable. Prescribes a kebab-case namng convention.
//  */
// export type CSSVariable<...T> = `--${}`;

// let test: CSSVariable<string, number>;
