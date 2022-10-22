<!--
	@component
	# Button
	The `Button` translates into a `button` or `anchor` tag depending on if an href is passed.
-->
<script lang="ts" context="module">
</script>

<script lang="ts">
	import Loading from '$components/Loading/Loading.svelte';
	import { forwardEvents } from '$utils/forwardEvents';
	import Ripple from '../Ripple/Ripple.svelte';
	import * as styles from './Button.css';

	export let href: string | undefined = undefined;
	export let id: string | undefined = undefined;
	export let kind: keyof typeof styles.kinds = 'default';
	export let spacing: 'regular' | 'compact' = 'regular';
	export let square: boolean = false;
	export let style: string | undefined = undefined;
	let className: string | undefined = '';
	export { className as class };
	export let disabled: boolean | undefined = undefined;
	export let loading: boolean | undefined = false;
	export let warning: boolean | undefined = false;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let active: boolean = false;
	export let contentAlign: 'left' | 'center' | 'right' = 'center';
	export let value: string | undefined = undefined;
	export let form: string | undefined = undefined;
	export let title: string | undefined = undefined;
	export let formaction: string | undefined = undefined;
	export let tabindex: number | undefined = undefined;

	let ref: HTMLAnchorElement | HTMLButtonElement;

	forwardEvents(() => ref);
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<svelte:element
	this={href ? 'a' : 'button'}
	{style}
	bind:this={ref}
	{href}
	{id}
	{type}
	{value}
	{form}
	{title}
	{tabindex}
	{formaction}
	class="{styles.kinds[kind]} {className}"
>
	<Ripple />
	<div class={styles.inner}>
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
	{#if loading}
		<slot name="loading">
			<Loading color="currentColor" />
		</slot>
	{/if}
</svelte:element>
