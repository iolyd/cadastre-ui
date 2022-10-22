<script lang="ts" context="module">
</script>

<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	// import { sizes } from '$styles/global.css';
	// import { _sizes as sizes } from 'virtual:cadastre/themes';
	// sizes;
</script>

<!-- <h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<article>
	<hgroup>
		<h1>Cadastre UI</h1>
		<span>A UI component system for svelte</span>
	</hgroup>
	<hr />
	<pre>
		<!-- {JSON.stringify(sizes, undefined, 4)} -->
	</pre>
	<hr />
	<!-- <select name="" id="" bind:value={variant}>
		{#each vs as v}
			<option value={v}>{v}</option>
		{/each}
	</select>
	<label for=""
		>loading
		<input type="checkbox" name="" bind:value={loading} id="" />
	</label> -->
	<Button
		><span slot="leading">Leading!</span>Button content!<span slot="trailing">Trailing!</span
		></Button
	>
</article>

<style lang="scss">
	article {
		padding: 4rem;
	}
</style>
