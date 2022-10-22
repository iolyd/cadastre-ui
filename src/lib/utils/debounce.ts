/**
 * Helper function to debounce passed function's execution.
 */
export function debounce<Args extends any[], F extends (...args: Args) => any>(
	f: F,
	timeout = 250
) {
	let timer: unknown;
	return (...args: Parameters<F>) => {
		clearTimeout(timer as typeof timeout);
		timer = setTimeout(() => {
			f(...args);
		}, timeout);
	};
}
