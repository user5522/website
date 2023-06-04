<script>
	import Accusations from '$lib/accusations/accusations.svelte';
	import Subtitle from '$lib/utilities/subtitle.svelte';
	import SvelteSeo from 'svelte-seo';
	import Tip from '$lib/components/tip.svelte';
	import Project from '$lib/cards/project.svelte';
	import Collection from '$lib/cards/collection.svelte';
	import Modal, { bind } from 'svelte-simple-modal';
	import { writable } from 'svelte/store';
	import CloseButton from '$lib/icons/closeButton.svelte';

	const modal = writable(null);
	const showModal = () => modal.set(bind(Accusations));

	let projects = [
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

	let collections = [
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

<SvelteSeo
	title="User5522"
	description="I make stuff, sometimes."
	keywords="user5522, u5522, user5522.tk, username5522, Epik_Kid"
	openGraph={{
		title: 'User5522.tk',
		description: 'I make stuff, sometimes.',
		url: 'https://user5522.tk/',
		type: 'website',
		images: [
			{
				url: '/logo.svg',
				width: 1200,
				height: 630,
				alt: 'User5522 Logo'
			}
		]
	}}
/>

<svelte:head>
	<title>Welcome - user5522.tk</title>
</svelte:head>

<div class="mx-auto flex max-w-4xl flex-col gap-7 justify-center items-center">
	<div class="flex justify-center flex-col items-center">
		<div class="text-4xl font-semibold">User5522</div>
		<Subtitle />
	</div>

	<Tip text="You can learn about me," href="/about" linkText="here." />

	<div class="text-xl sm:text-2xl">Featured projects:</div>
	<div class="grid gap-5 sm:grid-cols-2 sm:max-w-5xl duration-200 2xl:max-w-7xl">
		{#each projects as project}
			<Project
				href={project.href}
				title={project.title}
				description={project.description}
				imgURL={project.imgURL}
				imgAlt={project.imgAlt}
			/>
		{/each}
	</div>

	<Tip text="You may want to see more," href="/projects" linkText="right here." />

	<div class="text-xl sm:text-2xl">Featured collections:</div>
	<div class="grid gap-5 sm:grid-cols-2 sm:max-w-5xl duration-200 2xl:max-w-7xl">
		{#each collections as collection}
			<Collection
				href={collection.href}
				title={collection.title}
				postDate={collection.postDate}
				description={collection.description}
				imgURL={collection.imgURL}
				imgAlt={collection.imgAlt}
			/>
		{/each}
	</div>

	<Tip text="For more, simply" href="/collections" linkText="look here." />

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
			<a href="/accusations" class="dark:text-white text-black hidden-button">View page</a>
		</Modal>
	</div>

	<div>
		<div class="text-green-600 font-semibold italic dark:opacity-50">
			// No promise, but more content soon™<br />
			// Tell me your opinion about this new experimental homepage
			<a href="/about#Links" class="text-blue-800 dark:text-blue-300">using one of these</a>.
		</div>
	</div>
</div>
