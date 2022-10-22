/**
 * Global observers pool, to facilitate reuse and cleanup.
 */
const observers: IntersectionObserver[] = [];

/**
 * Establishing the requested observer by first attempting to find an existing one with equivalent
 * settings.
 */
function setObserver(options: IntersectionObserverInit) {
	const observerIdx = observers.findIndex(
		(observer) =>
			observer.root == options.root &&
			observer.rootMargin == options.rootMargin &&
			observer.thresholds == options.threshold
	);
	if (observerIdx > -1) return observers[observerIdx];
	const newObserver = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			const eventName = entry.isIntersecting ? 'enter' : 'leave';
			entry.target.dispatchEvent(new CustomEvent(eventName));
		}
	}, options);
	observers.push(newObserver);
	return newObserver;
}

/**
 * Action to observe an element's intersection with the viewport.
 */
export function intersection(
	element: HTMLElement,
	{
		root = undefined,
		rootMargin = '0px 0px 0px 0px',
		threshold = 0,
	}: IntersectionObserverInit = {}
) {
	const observer = setObserver({ root, rootMargin, threshold });
	observer.observe(element);

	return {
		update(newOptions: IntersectionObserverInit) {
			// Handle updated options. Tricky if shared observers...
		},
		destroy() {
			observer.unobserve(element);
		},
	};
}
