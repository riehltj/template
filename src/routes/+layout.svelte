<script>
	import Navigation from './components/Navigation.svelte';
	import './styles.css';
</script>

<div class="app flex flex-col px-32 py-12">
	<Navigation />

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>
