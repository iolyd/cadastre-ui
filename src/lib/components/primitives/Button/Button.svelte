<!--
	@component
	# Button
	The `Button` translates into a `button` or `anchor` tag depending on if an href is passed.
-->
<script lang="ts" context="module">
</script>

<script lang="ts">
	import type { variants } from '$utils/constants';
	import { forwardEvents } from '$utils/forwardEvents';
	import type { UnionFromArray } from '$utils/types';
	import Ripple from '../Ripple/Ripple.svelte';

	export let href: string | undefined = undefined;
	export let variant: UnionFromArray<typeof variants> = 'default';
	let className: string | undefined = undefined;
	export { className as class };
	export let style: string | undefined = undefined;

	let ref: HTMLAnchorElement | HTMLButtonElement;

	forwardEvents(() => ref);

	// type $$Events = {}
	// type $$Slots = {}
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	class="button {className} {variant}"
	{style}
	bind:this={ref}
>
	<Ripple />
	<div class="inner">
		{#if $$slots.leading}
			<div class="content leading">
				<slot name="leading" />
			</div>
		{/if}
		<div class="content main">
			<slot />
		</div>
		{#if $$slots.trailing}
			<div class="content trailing">
				<slot name="trailing" />
			</div>
		{/if}
	</div>
</svelte:element>

<style lang="scss">
	.button {
		all: unset;
		position: relative;
		cursor: pointer;
		padding: 1rem;
		background-color: red;
	}

	.inner {
		display: grid;
		grid-template-columns:
			[full-start leading-start]
			[leading-end main-start]
			[main-end trailing-start]
			[trailing-end full-end];
	}

	.content {
	}

	.leading {
	}

	.trailing {
	}

	.main {
	}
</style>
