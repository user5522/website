<script>
	import Emoji from '$lib/components/emoji.svelte';
	import Project from '$lib/cards/project.svelte';
	import { sortProjects } from '$lib/utilities/projects.js';
	import { onMount } from 'svelte';

	let clicked = false;
	let sortedProjects = [];
	const updateSortedProjects = () => {
		sortedProjects = sortProjects(clicked);
	};

	onMount(() => {
		updateSortedProjects();
	});
</script>

<div class="flex flex-col items-center justify-center">
	<div class="flex flex-row">
		<p class="text-4xl font-semibold">Projects</p>
	</div>
	<div class="flex flex-row gap-1">
		<div class="text-xl text-center">
			Projects I'm working on that I want to share with you
			<Emoji emoji="flushed.svg" alt="flushed emoji" />
		</div>
	</div>
</div>
<div class="flex flex-row py-2 ml-0 mr-auto">
	<button
		class="p-2 text-white duration-200 rounded-xl bg-dark-500 hover:scale-105 active:scale-95"
		on:click={() => {
			clicked = !clicked;
			updateSortedProjects();
		}}>Sorted by {clicked ? 'oldest' : 'latest'}</button
	>
</div>
<div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
	{#each sortedProjects as project}
		<Project
			href={project.href}
			title={project.title}
			description={project.description}
			imgURL={project.imgURL}
			imgAlt={project.imgAlt}
		/>
	{/each}
</div>
