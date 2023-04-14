<script>
	import Flushed from '$lib/twemojis/flushed.svelte';
	import Project from '$lib/cards/project.svelte';

	const cardItems = [
		{
			title: 'Vbot',
			description:
				'A versatile Discord bot that is optimized for speed, responsiveness, and ease of use.\nCurrently in ALPHA',
			imgURL: '/banners/Vbot.png',
			imgAlt: 'Vbot banner',
			href: '/projects/vbot'
		},
		{
			title: 'Graphic Designs',
			description:
				"A collection of banners and logos that I created for CRBT's old profiles feature and other projects.",
			imgURL: '/banners/banners.png',
			imgAlt: 'banners',
			href: '/projects/designs'
		},
		{
			title: 'SquareGame',
			description:
				'A 2D game built with Unity, about a.. square character that navigates through levels..?\nCurrently in BETA',
			imgURL: '/banners/SquareGame.png',
			imgAlt: 'SquareGame banner',
			href: '/sgsource'
		},
		{
			title: 'u3d',
			description:
				'An attempt to learn Unity 3D, you are a BEAN moving around and can glitch through walls (100% intended)',
			imgURL: '/placeholder.png',
			imgAlt: 'u3d banner',
			href: '/u3d'
		},
		{
			title: 'Snak',
			description:
				'A snake game copycat with a touch of bugs, brought to life using Rust and the Bevy game engine.',
			imgURL: '/banners/Snak.png',
			imgAlt: 'Snak game banner',
			href: '/snaksource'
		}
	];
</script>

<svelte:head>
	<title>/projects</title>
</svelte:head>

<div class="flex flex-col items-center justify-center">
	<div class="flex flex-row">
		<p class="text-4xl font-semibold">Projects</p>
	</div>
	<div class="flex flex-row gap-1">
		<div class=" text-xl">
			Projects I'm working on that I want to share with you
			<Flushed />
		</div>
	</div>
</div>
<div class="flex flex-row  py-2">
	<button class=" rounded-xl bg-dark text-white p-2 duration-200 hover:scale-105 active:scale-95"
		>Sorted randomly</button>
</div>
<div class="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">
	{#each cardItems as cardItem}
		<Project
			href={cardItem.href}
			title={cardItem.title}
			description={cardItem.description}
			imgURL={cardItem.imgURL}
			imgAlt={cardItem.imgAlt} />
	{/each}
</div>
