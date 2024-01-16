<script>
	import '$lib/app.css';
	// @ts-ignore
	import Menu from '$lib/menu/menu.svelte';
</script>

<div class="flex">
    <Menu />
	<slot />
</div>

<style>
</style>
