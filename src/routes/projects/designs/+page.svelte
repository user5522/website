<script>
	import Tip from '$lib/components/tip.svelte';

	let CRBTbannerItems = [
		{
			title: 'Colorflow Banner',
			imgURL: '/banners/colorflow.png',
			imgAlt: 'Colorflow banner'
		},
		{
			title: 'Bubbles Banner',
			imgURL: '/banners/bubbles.png',
			imgAlt: 'Bubbles banner'
		},
		{
			title: 'Curve Banner [Remade]',
			imgURL: '/banners/curve.png',
			imgAlt: 'Curve banner, but remade'
		},
		{
			title: 'Shapes Banner',
			imgURL: '/banners/shapes.png',
			imgAlt: 'Shapes banner'
		},
		{
			title: 'Wallpaper Banner [remade]',
			imgURL: '/banners/wallpaper.png',
			imgAlt: "Wallpaper banner, but guess what? it's remade!"
		},
		{
			title: 'More banners soon..',
			imgURL: '/banners/banners.png',
			imgAlt: 'More banners comming soon.. maybe.'
		}
	];
	let projectBannerItems = [
		{
			title: 'SquareGame Banner',
			imgURL: '/banners/SquareGame.png',
			imgAlt: 'SquareGame banner'
		},
		{
			title: 'Snak Banner',
			imgURL: '/banners/Snak.png',
			imgAlt: 'Snak banner'
		},
		{
			title: 'Vbot Banner',
			imgURL: '/banners/Vbot.png',
			imgAlt: 'Vbot banner'
		},
		{
			title: 'More banners soon..',
			imgURL: '/banners/banners.png',
			imgAlt: 'More banners comming soon.. maybe.'
		}
	];

	let ClembsVisible = false;
	let clicks = 0;

	function handleClick() {
		clicks++;

		if (clicks >= 5) {
			ClembsVisible = true;
			const timeout = setTimeout(() => {
				clicks = 0;
				ClembsVisible = false;
				clearTimeout(timeout);
			}, 10000);
		}
	}
</script>

<svelte:head>
	<title>/projects/designs</title>
</svelte:head>

<div class="flex flex-col items-center justify-center px-5">
	<div class="flex flex-col items-center justify-center">
		<div class="flex flex-row">
			<p class="text-4xl font-semibold">Graphic designs</p>
		</div>
		<div class="flex flex-row gap-1">
			<div class="px-10 text-xl">A showcase of most of my illustrations & designs</div>
		</div>
	</div>

	<div class="flex flex-row items-center gap-1 pt-10 pb-5 text-3xl">
		<a href="https://crbt.app" target="_blank" rel="noreferrer">CRBT</a> Banners
	</div>
	<div class="grid gap-10 sm:grid-cols-2">
		{#each CRBTbannerItems as CRBTbannerItem}
			<div>
				<div class="flex justify-center pb-2 text-xl font-semibold sm:justify-start">
					{CRBTbannerItem.title}
				</div>
				<img
					src={CRBTbannerItem.imgURL}
					class="rounded-xl hover-anim"
					alt={CRBTbannerItem.imgAlt}
				/>
			</div>
		{/each}
	</div>
	<div class="flex flex-row items-center gap-1 pt-10 pb-5 text-3xl">Projects' Banners</div>
	<Tip text="Corresponding projects can be found" href="/projects" linkText="in here." />

	<div class="grid gap-10 sm:grid-cols-2">
		{#each projectBannerItems as projectBannerItem}
			<div>
				<div class="flex justify-center pb-2 text-xl font-semibold sm:justify-start">
					{projectBannerItem.title}
				</div>
				<img
					src={projectBannerItem.imgURL}
					class="rounded-xl hover-anim"
					alt={projectBannerItem.imgAlt}
				/>
			</div>
		{/each}
	</div>

	<div id="Logos" class="flex items-center pt-10 pb-5 text-3xl">Logos</div>
	<div class="flex flex-col gap-10 sm:flex-row">
		<div class="flex flex-col">
			<div class="flex justify-center pb-2 text-xl font-semibold sm:justify-start">
				User5522 Logo
			</div>
			<div class="rounded-xl bg-dark hover-anim">
				<img src="/logo.svg" class="mh-40 w-full sm:h-52" alt="Logo" />
			</div>
		</div>

		<div class="flex flex-col">
			<div class="flex sm:items-center justify-center pb-2 text-xl font-semibold sm:justify-start">
				Vbot Logo
			</div>

			<button class="rounded-xl bg-dark cursor-default hover-anim" on:click={handleClick}>
				<img src="/vbot/vbot.svg" class="h-40 w-full p-8 sm:h-52 sm:p-10" alt="Logo" />
			</button>
			<div
				class="flex sm:items-center justify-center pb-2 text-xl font-semibold sm:justify-start rotate-180 {ClembsVisible
					? 'block'
					: 'hidden'}"
			>
				© Clembs
			</div>
		</div>
	</div>
</div>
