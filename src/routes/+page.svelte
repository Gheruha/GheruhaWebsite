<script>
	import Image from '$lib/images/gmail.png';
	import css from '$lib/images/css.png';
	import javascript from '$lib/images/javascript.png';
	import tailwind from '$lib/images/tailwind.png';
	import svelte from '$lib/images/svelte.png';
	import c from '$lib/images/c++.png';
	import python from '$lib/images/python.png';
	import java from '$lib/images/java.png';
	import about from '$lib/images/about.png';
	import skills from '$lib/images/skills.png';
	import projects from '$lib/images/projects.png';

	// @ts-ignore
	function explore_more(e) {
		const section = document.getElementById(e);
		if (section) {
			section.scrollIntoView({
				behavior: 'smooth'
			});
		}
	}

	let isHovered = false;

	function handleHover() {
		isHovered = !isHovered;
	}

	// Animation
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>

<!-- Main Class -->
<body>
	<div class="scroll-watcher" />
	<div class="w-full h-full" id="main-div">
		<!-- Hero Section div-->
		<div class="flex pl-28 pr-28">
			<div class="pt-72 pr-12 flex flex-col items-start">
				<h1 class="pl-32 text-7xl font-medium">Gheruha</h1>
				<p class="pl-32 font-light">
					Hey I am a developer! This is my personal website. Here you will see documentation, notes <br
					/>
					and so on. Feel free to explore my website! Hope you will enjoy it and welcome to my world!
				</p>
				<div class="flex pt-4 pb-8 pl-32 space-x-2">
					<img src={css} alt="css" width="20px" class="transition-all hover:scale-150" />
					<img src={javascript} alt="js" width="20px" class="transition-all hover:scale-150" />
					<img src={tailwind} alt="tailwind" width="20px" class="transition-all hover:scale-150" />
					<img src={svelte} alt="svelte" width="20px" class="transition-all hover:scale-150" />
					<img src={c} alt="c++" width="20px" class="transition-all hover:scale-150" />
					<img src={python} alt="python" width="20px" class="transition-all hover:scale-150" />
					<img src={java} alt="java" width="20px" class="transition-all hover:scale-150" />
				</div>
				<div class="pl-32">
					<button
						class="underline text-blue-500 hover:text-blue-300 transition-all"
						on:click={() => explore_more('about-me')}>Explore more</button
					>
				</div>
			</div>
			<div class="pt-56">
				<img
					src={Image}
					alt="Me"
					width="300px"
					class="rounded-full border dark:border-zinc-700 profile-photo transition-all hover:scale-110 duration-300"
				/>
			</div>
		</div>

		<!-- About me div-->

		<div class="pl-28 pr-28">
			<div class="pt-96 flex items-start">
				<img
					src={about}
					alt="about"
					width="500"
					class="transition-all hover:scale-110 duration-300"
				/>

				<div class="flex flex-col text-left pl-16" id="about-me">
					<h2 class="text-3xl font-medium pt-28">About me</h2>
					<p>
						My name is Gheruha Maxim. I love sports, food and computers. My main passion is
						programming, everything related to it. I am a person who particularly pursues personal,
						mental and physical development. I just love having people I can learn from. People with
						healthy values, with a good future and with a lot of enthusiasm in their character. I am
						very sociable and happy to work with people. My main goals are to become the best
						version of myself, to be a very good programmer and to work with a top team. <br />
						<button
							class="underline text-blue-500 hover:text-blue-300 transition-all"
							on:click={() => explore_more('skills')}>My skills</button
						>
					</p>
				</div>
			</div>
		</div>

		<article>
			<div class="pl-28 pr-28">
				<div class="pt-96 flex items-start justify-between" id="skills">
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div class="card rounded-md" on:mouseenter={handleHover} on:mouseleave={handleHover}>
						<div class="icon big-icon">🌁</div>

						<div class="content p-4">
							<h3 class="text-3xl font-medium">Front-End</h3>
							<p>
								I am in love with him. One of my best cards.I have knowledge in Html , CSS and
								Tailwind.
							</p>
						</div>
					</div>
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div class="card rounded-md" on:mouseenter={handleHover} on:mouseleave={handleHover}>
						<div class="icon big-icon">💻</div>

						<div class="content p-4">
							<h3 class="text-3xl font-medium">Back-End</h3>
							<p>
								We all know that Front-End without Back-End does not work. I have knowledge in
								Python , Javascript and Svelte
							</p>
						</div>
					</div>
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div class="card rounded-md" on:mouseenter={handleHover} on:mouseleave={handleHover}>
						<div class="icon big-icon">📊</div>

						<div class="content p-4">
							<h3 class="text-3xl font-medium">Database</h3>
							<p>
								And of course, what will be the world without databases? Currently I am still
								learning about it. But I know for sure I will be good with them.
							</p>
						</div>
					</div>

					<img
						src={skills}
						alt="skills"
						width="300"
						class="transition-all hover:scale-110 duration-300"
					/>
				</div>
			</div>
		</article>

		<article>
			<div class="pl-28 pr-28">
				<div class="pt-96 flex justify-center">
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						class="project-card rounded-md"
						on:mouseenter={handleHover}
						on:mouseleave={handleHover}
					>
						<div class="icon big-icon">
							<img src={projects} alt="projects" width="300" />
						</div>

						<div class="content p-4">
							<h3 class="text-3xl font-medium">Projects</h3>
							<p>Here I will post my projects, I have some but I will do this later :D</p>
						</div>
					</div>
				</div>
			</div>
		</article>
	</div>
</body>

<style>
	.big-icon {
		font-size: 90px;
	}
</style>
