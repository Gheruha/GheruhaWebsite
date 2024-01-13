<script>
	import '../app.css';
	import ThemeSwitch from '$lib/themeSwitch/themeSwitch.svelte';
</script>

<div class="app">
	<div class="w-full h-6 flex left-2 top-2 fixed">
		<ThemeSwitch />
	</div>
	<slot />
</div>

<style>
</style>
