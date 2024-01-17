<script>
	import Highlight from 'svelte-highlight';
	import { java } from 'svelte-highlight/languages/java';
	import ThemeSwitch from '$lib/themeSwitch/themeSwitch.svelte';
	import 'svelte-highlight/styles/github-dark.css';

	export let data; // For accesing the load function

	// Syntax code we will show later
	const code =
		'// This is a single-line comment in Java\n// The class definition\npublic class HelloWorld {\n \n   // The main method, the entry point of the program\n   public static void main(String[] args) {\n\n      // Print the string Hello, World! to the console\n      System.out.println(Hello, World!);\n   }\n}';
</script>

<div class="h-full w-1/5 flex flex-col">
	<!-- Menu -->
	<nav
		class="h-full w-1/5 bg-white border-r-2 dark:border-zinc-800 dark:bg-zinc-950 flex flex-col fixed top-0 transition-all duration-200"
	>
		<div class="flex justify-start p-2">
			<ThemeSwitch />
		</div>

		<ul class="pt-24">
			{#each data.summaries as { slug, title }}
				<li
					class="text-blue-500 hover:text-blue-300 transition-all hover:scale-125 hover:text-blue- duration-300"
				>
					<a href="java/{slug}">{title}</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<!-- Info Div -->
<div class="w-full h-full">
	<div class="flex pl-28 pr-28">
		<div class="pt-24 pr-12 flex flex-col items-start text-left">
			<h1 class="pl-32 text-3xl font-medium">About Java ☕️</h1>
			<p class="pl-32 pt-2">
				Java is a high-level, object-oriented, and platform-independent programming language that
				was designed and developed by Sun Microsystems (acquired by Oracle Corporation) in the
				mid-1990s. It has since become one of the most widely used programming languages in the
				world.
			</p>

			<h1 class="pl-32 text-3xl font-medium pt-24">Key aspects of Java:</h1>
			<ul class="pl-36 list-disc pt-2 pb-24">
				<li>Platform Independence</li>
				<li>Object-Oriented Programming (OOP)</li>
				<li>Syntax and Simplicity</li>
				<li>Automatic Memory Management</li>
				<li>Rich Standard Library</li>
				<li>Security</li>
				<li>Multithreading Support</li>
				<li>Community and Ecosystem</li>
			</ul>

			<!-- Syntax Code Example Div -->
			<article class="pl-32 w-full">
				<h1 class="text-3xl font-medium pb-2">Syntax:</h1>
				<Highlight language={java} {code} class="text-sm" />
			</article>
		</div>
	</div>

	<div class="pt-80">
		<h2 class="text-sm">made by Gheruha Maxim</h2>
	</div>
</div>
