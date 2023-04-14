<script>
	import Collection from '$lib/cards/collection.svelte';
	const cardItems = [
		{
			title: 'Now with mdsvex!',
			description:
				"After lots and lots of messing around & thanks to Clembs' invaluable assistance, collections now utilize .svx files for a user-friendly experience.",
			imgURL: '/collections/nowwithmdsvex.png',
			imgAlt: "Ok guys, I think I won't kms yet",
			href: '/collections/4',
			postDate: '10/01/2023'
		},
		{
			title: 'Goodbye 2022, welcome 2023',
			description:
				"Crazy how the year is literally ending in a few hours. I have no idea what I am going to talk about here, but it's probably a cool post, so read it please :)",
			imgURL: '/collections/welcome2023.png',
			imgAlt: 'I am going to kill myself next year I think',
			href: '/collections/3',
			postDate: '31/12/2022'
		},
		{
			title: 'Clembs SMP early access screenshots',
			description:
				'Some screenshots from the Clembs Minecraft SMP winter early access, thought I would share them here since it will be reset.',
			imgURL: '/collections/csmpea.png',
			imgAlt: 'Clembs SMP Early Access banner',
			href: '/collections/2',
			postDate: '18/12/2022'
		},
		{
			title: 'Initial release!',
			description:
				"Finally, after lots of work, user5522.tk is now at version 1.0.0. This collection talks about everything new and what's (probably) upcomming.",
			imgURL: '/collections/initial-release.png',
			imgAlt: 'Initial release banner',
			href: '/collections/1',
			postDate: '26/11/2022'
		}
	];
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
	<button class=" rounded-xl text-white bg-dark p-2 duration-200 hover:scale-105 active:scale-95"
		>Sorted by latest</button>
</div>

<div class="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">
	{#each cardItems as cardItem}
		<Collection
			href={cardItem.href}
			title={cardItem.title}
			postDate={cardItem.postDate}
			description={cardItem.description}
			imgURL={cardItem.imgURL}
			imgAlt={cardItem.imgAlt} />
	{/each}
</div>
