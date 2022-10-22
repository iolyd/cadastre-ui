<script lang="ts" context="module">
</script>

<script lang="ts">
	let darkmode = false;
</script>

<!-- <main class="{darkmode ? styles.dark : styles.light} {styles.s}">
	<nav>
		<a href="/">Home</a>
		{#each routes as r}
			<a href={r.href}>{r.title}</a>
		{/each}
		<label for="">
			Toggle dark mode!
			<input type="checkbox" name="" id="" bind:checked={darkmode} />
		</label>
	</nav> -->
<slot />
<!-- </main> -->
