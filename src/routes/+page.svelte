<script>
	import SvelteSeo from 'svelte-seo';
	import { writable } from 'svelte/store';
	import Accusations from '$lib/accusations.svelte';
	import Modal, { bind } from 'svelte-simple-modal';
	import CloseButton from '$lib/closeButton.svelte';
	import Subtitle from '$lib/subtitle.svelte';
	import Project from '$lib/cards/project.svelte';
	import Collection from '$lib/cards/collection.svelte';

	const modal = writable(null);
	const showModal = () => modal.set(bind(Accusations));

	const projects = [
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

	let tip1Hide = false;
	let tip2Hide = false;
	let tip3Hide = false;

	if (typeof localStorage !== 'undefined') {
		tip1Hide = localStorage.getItem('tip1Hide') === 'true';
		tip2Hide = localStorage.getItem('tip2Hide') === 'true';
		tip3Hide = localStorage.getItem('tip3Hide') === 'true';
	}

	function toggleHide(tipHide, tipName) {
		tipHide = !tipHide;
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(tipName, JSON.stringify(tipHide));
		}
		if (tipName === 'tip1Hide') {
			tip1Hide = tipHide;
		} else if (tipName === 'tip2Hide') {
			tip2Hide = tipHide;
		} else if (tipName === 'tip3Hide') {
			tip3Hide = tipHide;
		}
	}
</script>

<SvelteSeo
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
/>

<svelte:head>
	<title>Welcome - user5522.tk</title>
</svelte:head>

<div class="mx-auto flex max-w-4xl flex-col gap-7 justify-center items-center">
	<div class="flex justify-center flex-col items-center">
		<div class="text-4xl font-semibold">User5522</div>
		<Subtitle />
	</div>

	<!-- <div class="h-screen justify-center items-center font-extrabold">
		<div class="flex flex-col text-7xl">
			<span class="bg-gradient-to-r from-orange-700 to-red-800 text-transparent bg-clip-text"
				>Designer.</span
			>
			<span class="bg-gradient-to-r from-blue-600  to-purple-600 text-transparent bg-clip-text">
				Developer.</span
			>
			<span class="bg-gradient-to-r from-dark_light to-slate-600 text-transparent bg-clip-text"
				>Student.</span
			>
		</div>
	</div> -->

	<div
		class="bg-dark p-3 text-white whitespace-nowrap overflow-hidden rounded-xl hover:scale-102 active:scale-95 duration-200 {tip1Hide
			? 'hidden'
			: 'block'}"
	>
		You can learn about me, <a href="/about" class="text-blue-300">here.</a>
		<button
			class="items-center rounded-lg duration-200 hover:scale-105 hover:bg-dark_light active:scale-95 px-2 py-1 text-xl"
			on:click={() => toggleHide(tip1Hide, 'tip1Hide') && (tip1Hide = !tip1Hide)}>&times;</button
		>
	</div>

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
	<div
		class="bg-dark p-3 rounded-xl overflow-hidden whitespace-nowrap text-white hover:scale-102 active:scale-95 duration-200 {tip2Hide
			? 'hidden'
			: 'block'}"
	>
		You may want to see more, <a href="/projects" class="text-blue-300">right here.</a>
		<button
			class="items-center rounded-lg duration-200 hover:scale-105 hover:bg-dark_light active:scale-95 px-2 py-1 text-xl"
			on:click={() => toggleHide(tip2Hide, 'tip2Hide') && (tip2Hide = !tip2Hide)}>&times;</button
		>
	</div>

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
	<div
		class="bg-dark p-3 whitespace-nowrap overflow-hidden rounded-xl text-white hover:scale-102 active:scale-95 duration-200 {tip3Hide
			? 'hidden'
			: 'block'}"
	>
		For more, simply <a href="/collections" class="text-blue-300">look here.</a>
		<button
			class="items-center rounded-lg duration-200 hover:scale-105 hover:bg-dark_light active:scale-95 px-2 py-1 text-xl"
			on:click={() => toggleHide(tip3Hide, 'tip3Hide') && (tip3Hide = !tip3Hide)}>&times;</button
		>
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
		<div class="text-green-600 font-semibold italic dark:opacity-50">
			// No promise, but more content soon™<br />
			// Tell me your opinion about this new experimental homepage
			<a href="/about#Links">using one of these</a>.
		</div>
	</div>
</div>
