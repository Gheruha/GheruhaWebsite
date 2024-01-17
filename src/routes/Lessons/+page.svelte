<script>
	import ThemeSwitch from '$lib/themeSwitch/themeSwitch.svelte';
	import lesson2 from '$lib/images/lessons2.png';
	import java from '$lib/images/java.png';
	import lesson1 from '$lib/images/lessons1.png';

	// @ts-ignore
	function explore_more(e) {
		const section = document.getElementById(e);
		if (section) {
			section.scrollIntoView({
				behavior: 'smooth'
			});
		}
	}
</script>

<body>
	<!-- ThemeSwitch Div -->
	<div class="flex justify-start fixed p-2">
		<ThemeSwitch />
	</div>

	<!-- Main Div -->
	<div class="w-full h-full" id="main-div">
		<!-- Hero Section div-->
		<div class="flex pl-28 pr-28">
			<div class="pt-72 pr-12 flex flex-col items-start">
				<h1 class="pl-32 text-7xl font-medium">Learn to code</h1>
				<p class="pl-32 font-light">
					Hello again 👋! Time for coding now! Explore all the available lessons from me. Happy
					Coding!
				</p>

				<div class="pl-32 pt-8">
					<button
						class="underline text-blue-500 hover:text-blue-300 transition-all"
						on:click={() => explore_more('about-me')}>Explore more</button
					>
				</div>
			</div>
			<div class="pt-56">
				<img
					src={lesson1}
					alt="Me"
					width="300px"
					class="rounded-full border dark:border-zinc-700 profile-photo transition-all hover:scale-110 duration-300"
				/>
			</div>
		</div>

		<!-- Lessons available div-->
		<div class="pl-28 pr-28">
			<div class="pt-96 flex items-start">
				<img
					src={lesson2}
					alt="lesson"
					width="500"
					class="transition-all hover:scale-110 duration-300"
				/>

				<div class="flex flex-col text-left pl-16 pb-96" id="about-me">
					<h2 class="text-3xl font-medium pt-28">Available lessons:</h2>
					<div class="flex items-center pt-12">
						<a href="/java"
							><img src={java} alt="java" width="50px" class="transition-all hover:scale-125" /></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
