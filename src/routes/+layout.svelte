<script lang="ts" context="module">
</script>

<script lang="ts">
	import { routes } from '$utils/routes';
</script>

<nav>
	<a href="/">Home</a>
	{#each routes as r}
		<a href={r.href}>{r.title}</a>
	{/each}
</nav>
<slot />

<style lang="scss">
	a {
		padding: 1rem;
	}
</style>
