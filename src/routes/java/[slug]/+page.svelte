<script>
	import ThemeSwitch from '$lib/themeSwitch/themeSwitch.svelte';
	export let data;
</script>

<!-- Menu Div -->
<div class="h-full w-1/5 flex flex-col">
	<nav
		class="h-full w-1/5 bg-white border-r-2 dark:border-zinc-800 dark:bg-zinc-950 flex flex-col fixed top-0 transition-all duration-200"
	>
		<div class="flex justify-start p-2">
			<ThemeSwitch />
		</div>

		<ul class="pt-24">
			<li class="text-blue-500 transition-all hover:scale-125 hover:text-blue-300 duration-300">
				<a href="/java">About Java</a>
			</li>
			{#each data.summaries as { slug, title }}
				<li class="text-blue-500 transition-all hover:scale-125 hover:text-blue-300 duration-300">
					<a href={slug}>{title}</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<!-- Info Div -->
<div>
	<h1>{data.the_lesson?.title}</h1>
	<p>{data.the_lesson?.description}</p>
</div>
