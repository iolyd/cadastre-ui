<script lang="ts" context="module">
</script>

<script lang="ts">
	import { themes } from '$styles/theme.css';
	import '$styles/_app.css';
	import { routes } from '$utils/_routes';
	import { sentenceCase } from 'change-case';

	let mode: keyof typeof themes = 'light';
</script>

<main class={themes[mode]}>
	<header>
		<nav>
			{#each routes as r}
				<a href={r.href}>{r.title}</a>
			{/each}
		</nav>
		<menu>
			<!-- <ThemeSwitch /> -->
			{#each Object.keys(themes) as t}
				<label for="radio-{t}">
					{sentenceCase(t)}
					<input
						type="radio"
						name="radio-{t}"
						id="radio-{t}"
						value={t}
						bind:group={mode}
					/>
				</label>
			{/each}
		</menu>
	</header>
	<slot />
</main>
