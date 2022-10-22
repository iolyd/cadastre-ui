/**
 * Extract a union type from a readonly array (`[] as const`).
 *
 * Useful for typing component props using arrays, ensuring consistency across the library.
 */
export type UnionFromArray<T extends readonly any[]> = T[number];
