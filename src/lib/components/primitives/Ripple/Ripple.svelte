<!--
	@component
	# Ripple
	Add a visual ripple effect on interactive elements.
-->
<script lang="ts" context="module">
	export const rippleEvent = 'ripple';
</script>

<script lang="ts">
	import { createEventDispatcher, onDestroy } from 'svelte';

	export let host: HTMLElement | undefined = undefined;
	export let easing: string = 'linear';
	export let duration = 250;
	export let opacityStart = 1;
	export let opacityEnd = 0;
	export let opacityEasing = easing;
	export let opacityDuration = duration;
	/**
	 * Ratio of the host's hypothenuse used for the starting ripple size.
	 */
	export let spreadStart = 0;
	/**
	 * Ratio of the host's hypothenuse used as the target (end) ripple size.
	 */
	export let spreadEnd = 1;
	export let spreadEasing = easing;
	export let spreadDuration = duration;

	let ref: HTMLDivElement;
	let destructor: () => void;
	let ripples: { x: number; y: number; spread: boolean; fade: boolean }[] = [];
	const dispatch = createEventDispatcher();

	function remove(e: AnimationEvent, ripple: typeof ripples[number]) {
		if (e.animationName === 'spread') {
			ripples.splice(ripples.indexOf(ripple), 1);
		}
	}

	function createRipple(e: MouseEvent) {
		// ripples.push({
		// 	x: e.clientX,
		// 	y: e.clientY
		// });
		// ripples = ripples;
	}

	function listen(element: HTMLElement | null) {
		if (destructor) destructor();
		if (element) {
			element.addEventListener('click', createRipple);
			destructor = () => {
				element.removeEventListener('click', createRipple);
			};
		}
	}

	$: listen(host ?? ref?.parentElement);

	onDestroy(() => {});
</script>

<div class="container" style:--easing={easing} bind:this={ref}>
	{#each ripples as r}
		<div class="ripple" on:animationend={(e) => remove(e, r)} />
	{/each}
</div>

<style lang="scss">
	.container {
		pointer-events: none;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		border-radius: inherit;
		overflow: hidden;
	}

	.ripple {
		background-color: white;
		top: 0;
		left: 0;
		aspect-ratio: 1 / 1;
		border-radius: 50%;
		transform: translate(-50%, -50%);
		animation: 1s ease-out 0s 1 fade, 1s ease-out 0s 1 spread;
	}

	@keyframes spread {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	@keyframes fade {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
