<script>
	const CRBTbannerItems = [
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
	const projectBannerItems = [
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
</script>

<svelte:head>
	<title>/projects/designs</title>
</svelte:head>

<div class="init-div">
	<div class="flex flex-col items-center justify-center px-5">
		<div class="flex flex-col items-center justify-center">
			<div class="flex flex-row">
				<p class="text-4xl">Graphic designs</p>
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
					<img src={CRBTbannerItem.imgURL} class="rounded-xl" alt={CRBTbannerItem.imgAlt} />
				</div>
			{/each}
		</div>
		<div class="flex flex-row items-center gap-1 pt-10 pb-5 text-3xl">Projects Banners</div>
		<div class="grid gap-10 sm:grid-cols-2">
			{#each projectBannerItems as projectBannerItem}
				<div>
					<div class="flex justify-center pb-2 text-xl font-semibold sm:justify-start">
						{projectBannerItem.title}
					</div>
					<img src={projectBannerItem.imgURL} class="rounded-xl" alt={projectBannerItem.imgAlt} />
				</div>
			{/each}
		</div>

		<div id="Logos" class="flex items-center pt-10 pb-5 text-3xl">Logos</div>
		<div class="flex flex-col gap-10 sm:flex-row">
			<div class="flex flex-col">
				<div class="flex justify-center pb-2 text-xl font-semibold sm:justify-start">
					User5522 Logo
				</div>
				<div class="rounded-xl bg-dark">
					<img src="/Logo_flat.svg" class="mh-40 w-full sm:h-52" alt="Logo" />
				</div>
			</div>
			<div class="flex flex-col">
				<div class="flex justify-center pb-2 text-xl font-semibold sm:justify-start">Vbot Logo</div>
				<div class="rounded-xl bg-dark">
					<img src="/vbot/vbot.svg" class="h-40 w-full p-8 sm:h-52 sm:p-10" alt="Logo" />
				</div>
			</div>
		</div>
	</div>
</div>
