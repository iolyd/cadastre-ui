<!--
	@component
	# Ripple
	Add a visual ripple effect on interactive elements.
-->
<script lang="ts" context="module">
	export const rippleEvent = 'ripple';
</script>

<script lang="ts">
	export let host: HTMLElement | undefined = undefined;
	export let easing: string = 'cubic-bezier(0,0,0,1)';
	export let duration = 1200;
	export let delay = 0;
	export let opacityStart = 1;
	export let opacityEnd = 0;
	export let opacityEasing = easing;
	export let opacityDuration = duration;
	export let opacityDelay = delay;
	export let spreadStart = 0;
	export let spreadEnd = 1;
	export let spreadEasing = easing;
	export let spreadDuration = duration;
	export let spreadDelay = delay;
	export let color: string = 'currentColor';
	export let colorStart: string = color;
	export let colorEnd: string = colorStart;
	export let colorEasing = easing;
	export let colorDuration = duration;
	export let colorDelay = delay;
	export let blur: number = 0;

	let ref: HTMLDivElement;
	let destructor: () => void;
	let ripples: { x: number; y: number; d: number; animations: number }[] = [];

	function add(e: MouseEvent) {
		if (ref) {
			const rect = ref.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			const d = 2 * Math.hypot(rect.width, rect.height);
			const r = {
				x,
				y,
				d,
				animations: 0,
			};
			ripples.push(r);
			ripples = ripples;
		}
	}

	function start(e: AnimationEvent, ripple: typeof ripples[number]) {
		ripple.animations++;
	}

	function end(e: AnimationEvent, ripple: typeof ripples[number]) {
		ripple.animations--;
		if (!ripple.animations) {
			ripples.splice(ripples.indexOf(ripple), 1);
			ripples = ripples;
		}
	}

	function listen(element: HTMLElement | null) {
		if (destructor) destructor();
		if (element) {
			element.addEventListener('pointerdown', add);
			destructor = () => {
				element.removeEventListener('pointerdown', add);
			};
		}
	}

	$: listen(host ?? ref?.parentElement);
</script>

<div
	class="container"
	bind:this={ref}
	style:--opacity-start={opacityStart}
	style:--opacity-end={opacityEnd}
	style:--opacity-easing={opacityEasing}
	style:--opacity-duration="{opacityDuration}ms"
	style:--opacity-delay="{opacityDelay}ms"
	style:--spread-start={spreadStart}
	style:--spread-end={spreadEnd}
	style:--spread-easing={spreadEasing}
	style:--spread-duration="{spreadDuration}ms"
	style:--spread-delay="{spreadDelay}ms"
	style:--color-start={colorStart}
	style:--color-end={colorEnd}
	style:--color-easing={colorEasing}
	style:--color-duration="{colorDuration}ms"
	style:--color-delay="{colorDelay}ms"
	style:--blur="{blur}px"
>
	{#each ripples as r (r)}
		<div
			class="ripple"
			style:--x="{r.x}px"
			style:--y="{r.y}px"
			style:--d="{r.d}px"
			on:animationstart={(e) => start(e, r)}
			on:animationend={(e) => end(e, r)}
		/>
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
		position: absolute;
		filter: blur(var(--blur));
		left: var(--x);
		top: var(--y);
		background-color: var(--color-start);
		aspect-ratio: 1 / 1;
		border-radius: 50%;
		transform: translate(-50%, -50%);
		animation: var(--opacity-duration) var(--opacity-easing) var(--opacity-delay) 1 fade
				forwards,
			var(--spread-duration) var(--spread-easing) var(--spread-delay) 1 spread forwards,
			var(--color-duration) var(--color-easing) var(--color-delay) 1 color forwards;
	}

	@keyframes spread {
		from {
			width: calc(var(--d) * var(--spread-start));
		}
		to {
			width: calc(var(--d) * var(--spread-end));
		}
	}

	@keyframes fade {
		from {
			opacity: var(--opacity-start);
		}
		to {
			opacity: var(--opacity-end);
		}
	}

	@keyframes color {
		from {
			background-color: var(--color-start);
		}
		to {
			background-color: var(--color-end);
		}
	}
</style>
