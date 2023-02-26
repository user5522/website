<script>
	import Flushed from '$lib/twemojis/flushed.svelte';

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
	<button class=" rounded-xl bg-dark p-2 duration-200 hover:scale-105 active:scale-95"
		>Sorted randomly</button
	>
</div>
<div class="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">
	{#each cardItems as cardItem}
		<a
			class="w-full rounded-2xl bg-dark text-white duration-200 hover:scale-102 active:scale-95"
			href={cardItem.href}
		>
			<div>
				<div class="h-full">
					<div class="sm:h-2/3">
						<div class="flex w-full items-center justify-center">
							<img src={cardItem.imgURL} alt={cardItem.imgAlt} class="rounded-t-xl" />
						</div>
					</div>
					<div class="p-5 sm:h-1/3">
						<div class="flex flex-row items-baseline">
							<div id="project_title" class=" text-xl font-bold">{cardItem.title}</div>
						</div>
						<div>
							<div id="project_description" class="text-lg">
								{cardItem.description}
							</div>
						</div>
					</div>
				</div>
			</div>
		</a>
	{/each}
</div>
