<script>
	import SvelteSeo from 'svelte-seo';
	import { writable } from 'svelte/store';
	import Modal, { bind } from 'svelte-simple-modal';
	import Accusations from '$lib/accusations.svelte';
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
</script>

<SvelteSeo
	title="User5522.tk"
	description="Welcome to my website! A place where I share information about all my stuff!"
	keywords="user5522 u5522 user5522.tk username5522 Epik_Kid"
	openGraph={{
		title: 'User5522.tk',
		description: 'Welcome to my website! A place where I share information about all my stuff!',
		url: 'https://user5522.tk/',
		type: 'website',
		images: [
			{
				url: '/Logo_flat.svg',
				width: 850,
				height: 650,
				alt: 'Logo OG image'
			}
		]
	}}
/>

<svelte:head>
	<title>Welcome - user5522.tk</title>
</svelte:head>

<div class="init-div px-5">
	<div class="flex flex-col items-center justify-center gap-5">
		<div class="flex justify-center flex-col items-center">
			<div class="flex flex-row items-baseline">
				<div class="text-4xl">User5522</div>
				<div class="text-base">/Username5522</div>
			</div>
			<Subtitle />
		</div>
		<div class="flex flex-col items-center gap-5 justify-center">
			<div class="overflow-hidden whitespace-nowrap text-2xl">
				Welcome to <strong>user5522.tk</strong>!
			</div>
			<div
				class="h-full w-full rounded-xl bg-dark duration-200 hover:scale-102 active:scale-95 sm:backdrop-blur-sm p-5"
			>
				<div class="text-xl text-center">It's a good website, because:</div>
				<div class="pt-5">
					<div>
						- It is made using <a target="_blank" href="https://kit.svelte.dev" rel="noreferrer"
							>sveltekit</a
						>
					</div>
					<div>- I made it :{')'}</div>
					<div>
						- It's fully opensource on
						<a target="_blank" href="https://github.com/user5522/website" rel="noreferrer">
							github
						</a> (just like most of my projects btw)
					</div>
					<div>- It's good looking imo</div>
					<div>- It'll support more languages soon™</div>
					<div>
						- I have nothing else to compliment, but <a href="/about#Links">maybe you do</a>
					</div>
				</div>
			</div>
		</div>
		<div class="text-lg">I have a few projects, that include:</div>

		<div class=" grid gap-5 sm:grid-cols-2 sm:max-w-5xl duration-200 2xl:max-w-7xl">
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

		<div class="rounded-xl bg-dark p-2 text-lg duration-200 hover:scale-102 active:scale-95">
			Additional projects can be viewed, <a href="/projects">right here.</a>
		</div>

		<div class="rounded-xl bg-dark p-2 text-lg duration-200 hover:scale-102 active:scale-95">
			Find out more about me, <a href="/about">here.</a>
		</div>

		<div>
			<strong class="text-xl">Unimportant ote:</strong>
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
					background: '#121212',
					borderRadius: '.8rem'
				}}
				><a>
					<button class="blue-button" on:click={showModal}> View false accusations </button>
				</a>
				<a href="/accusations" class="text-white">
					<button class="hidden-button">View page</button>
				</a>
			</Modal>
		</div>
	</div>
</div>
