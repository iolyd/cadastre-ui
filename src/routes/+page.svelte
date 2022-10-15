<script lang="ts" context="module">
</script>

<script lang="ts">
	import { Button } from '$lib/components/primitives';
</script>

<!-- <h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<article>
	<hgroup>
		<h1>Cadastre UI</h1>
		<span>A UI component system for svelte</span>
	</hgroup>

	<Button class="test-class">Button content!</Button>
</article>

<style lang="scss">
	// hgroup {
	// 	padding: 1rem;
	// }

	article :global(.test-class) {
		background-color: blue;
		box-shadow: 0 1em 1em -1em black;

		&:hover {
			background-color: purple;
		}
	}
</style>
