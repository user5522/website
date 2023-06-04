<script>
	import Collection from '$lib/cards/collection.svelte';
	import { sortPosts } from '$lib/utilities/posts.js';
	import { onMount } from 'svelte';

	let clicked = false;
	let sortedPosts = [];

	const updateSortedPosts = () => {
		sortedPosts = sortPosts(clicked);
	};

	onMount(() => {
		updateSortedPosts();
	});
</script>

<svelte:head>
	<title>/collections</title>
</svelte:head>

<div class="flex flex-col items-center justify-center">
	<div class="flex flex-row">
		<p class="text-4xl font-semibold">Collections</p>
	</div>
	<div>
		<div class="text-xl">Everything I want to share</div>
	</div>
</div>

<div class="flex flex-row py-2">
	<button
		class="rounded-xl bg-dark p-2 text-white duration-200 hover:scale-105 active:scale-95"
		on:click={() => {
			clicked = !clicked;
			updateSortedPosts();
		}}>Sorted by {clicked ? 'oldest' : 'latest'}</button
	>
</div>

<div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
	{#each sortedPosts as post}
		<Collection
			href={`/collections/${post.slug}`}
			title={post.title}
			description={post.description}
			postDate={post.date}
			imgURL={post.imgURL}
			imgAlt={post.imgAlt}
			isPinned={post.pinned}
		/>
	{/each}
</div>
