import type { SvelteComponent } from 'svelte';
import { bubble, current_component, listen, onDestroy, onMount } from 'svelte/internal';

const defaultEvents = [
	'focus',
	'blur',
	'fullscreenchange',
	'fullscreenerror',
	'scroll',
	'cut',
	'copy',
	'paste',
	'keydown',
	'keypress',
	'keyup',
	'auxclick',
	'click',
	'contextmenu',
	'dblclick',
	'mousedown',
	'mouseenter',
	'mouseleave',
	'mousemove',
	'mouseover',
	'mouseout',
	'mouseup',
	'pointerlockchange',
	'pointerlockerror',
	'select',
	'wheel',
	'drag',
	'dragend',
	'dragenter',
	'dragstart',
	'dragleave',
	'dragover',
	'drop',
	'touchcancel',
	'touchend',
	'touchmove',
	'touchstart',
	'pointerover',
	'pointerenter',
	'pointerdown',
	'pointermove',
	'pointerup',
	'pointercancel',
	'pointerout',
	'pointerleave',
	'gotpointercapture',
	'lostpointercapture'
] as const;

/**
 * Forward a DOM element's or a component's events.
 *
 * For more info, read: https://github.com/sveltejs/svelte/issues/2837
 *
 * Credits to hperrin and dangreen.
 */
export function forwardEvents<T extends SvelteComponent | Element>(
	/**
	 * Getter to retrieve events' subject ref onMount.
	 */
	getRef: () => T,
	/**
	 * Additional custom events to forward.
	 */
	...additionalEvents: string[]
) {
	const events = [...defaultEvents, ...additionalEvents];
	const component = current_component;
	const destructors: (() => void)[] = [];

	function forward(e: any /* Event | CustomEvent */) {
		bubble(component, e);
	}

	onMount(() => {
		const ref = getRef();

		if (ref instanceof Element) {
			events.forEach((event) => {
				destructors.push(listen(ref, event, forward));
			});
		} else {
			events.forEach((event) => {
				destructors.push(ref.$on(event, forward));
			});
		}
	});

	onDestroy(() => {
		while (destructors.length) {
			(destructors.pop() as typeof destructors[number])();
		}
	});
}
