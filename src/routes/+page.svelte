<script>
	// import SvelteSeo from 'svelte-seo';
	import { writable } from 'svelte/store';
	import Accusations from '$lib/accusations.svelte';
	import Modal, { bind } from 'svelte-simple-modal';
	import CloseButton from '$lib/closeButton.svelte';
	import Subtitle from '$lib/subtitle.svelte';

	const modal = writable(null);
	const showModal = () => modal.set(bind(Accusations));

	const cardItems = [
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
		}
	];

	const collections = [
		{
			title: 'Clembs SMP early access screenshots',
			description:
				'Some screenshots from the Clembs Minecraft SMP winter early access, thought I would share them here since it will be reset soon.',
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

<!-- <SvelteSeo
	title="User5522.tk"
	description="Welcome to my website! A place where I share information about all my stuff!"
	keywords="user5522, u5522, user5522.tk, username5522, Epik_Kid"
	openGraph={{
		title: 'User5522.tk',
		description: 'Welcome to my website! A place where I share information about all my stuff!',
		url: 'https://user5522.tk/',
		type: 'website',
		images: [
			{
				url: '/logo.svg',
				width: 850,
				height: 650,
				alt: 'OG Logo image'
			}
		]
	}}
/> -->

<svelte:head>
	<title>Welcome - user5522.tk</title>
</svelte:head>

<div class="mx-auto flex max-w-4xl flex-col gap-7 justify-center items-center">
	<div class="flex justify-center flex-col items-center">
		<div class="text-4xl font-semibold">User5522</div>
		<Subtitle />
	</div>

	<div class="bg-dark p-3 rounded-xl hover:scale-102 active:scale-95 duration-200">
		You can learn about me, <a href="/about">here.</a>
	</div>

	<div class="text-xl sm:text-2xl">Featured projects:</div>
	<div class="grid gap-5 sm:grid-cols-2 sm:max-w-5xl duration-200 2xl:max-w-7xl">
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
							<div id="project_title" class=" text-xl font-bold">
								{cardItem.title}
							</div>
							<div id="project_description" class="text-lg">
								{cardItem.description}
							</div>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
	<div class="bg-dark p-3 rounded-xl hover:scale-102 active:scale-95 duration-200">
		You might wanna see more, <a href="/projects">right here.</a>
	</div>

	<div class="text-xl sm:text-2xl">Featured collections:</div>
	<div class="grid gap-5 sm:grid-cols-2 sm:max-w-5xl duration-200 2xl:max-w-7xl">
		{#each collections as collection}
			<a
				href={collection.href}
				id="Clembs-SMP-Early-access-screentshots"
				class="rounded-xl bg-dark text-white duration-200 hover:scale-102 active:scale-95"
			>
				<div>
					<div class="h-full w-full">
						<div id="post_img" class="flex justify-center sm:h-2/3">
							<img src={collection.imgURL} alt={collection.imgAlt} class="rounded-t-xl" />
						</div>
						<div class="p-5 sm:h-1/3">
							<div id="post_title" class="flex w-full flex-col items-baseline gap-1 py-2">
								<div class="text-xl font-semibold">
									{collection.title}
								</div>
								<div class="text-md text-lighter_true_gray">
									Post date: {collection.postDate}
								</div>
							</div>
							<div id="post_description" class="text-lg">
								{collection.description}
							</div>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
	<div class="bg-dark p-3 rounded-xl hover:scale-102 active:scale-95 duration-200">
		For more, simply <a href="/collections">look here.</a>
	</div>

	<div>
		<strong class="text-xl">Unimportant note:</strong>
		<div>
			Despite what you may have heard, I am not a wanted criminal in multiple countries.<br />
			In fact, I am a law-abiding citizen who has never committed any federal offenses.
		</div>
	</div>
	<div class="flex flex-row gap-5">
		<!-- svelte-ignore a11y-missing-attribute -->
		<Modal
			show={$modal}
			unstyled={false}
			closeButton={CloseButton}
			styleWindow={{
				borderRadius: '.8rem',
				backgroundColor: '#121212'
			}}
			><a>
				<button class="blue-button" on:click={showModal}>False accusations </button>
			</a>
			<a href="/accusations" class="text-white">
				<button class="hidden-button">View page</button>
			</a>
		</Modal>
	</div>

	<div>
		<div class="text-green-600 italic opacity-50">
			// No promise, but more content soon™<br />
			// Tell me your opinion about this new experimental homepage
			<a href="/about#Links">using one of these</a>.
		</div>
	</div>
</div>
