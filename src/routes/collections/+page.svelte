<script>
	const cardItems = [
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

<div class="init-div">
	<div class="flex flex-col items-center justify-center">
		<div class="flex flex-row">
			<p class="text-4xl">Collections</p>
		</div>
		<div>
			<div class="px-10 text-xl">Everything I want to share</div>
		</div>
	</div>

	<div class="flex flex-row px-10 py-2">
		<button class=" rounded-xl bg-dark p-2 duration-200 hover:scale-105 active:scale-95"
			>Sorted by latest</button
		>
	</div>

	<div class="grid gap-5 px-5 sm:grid-cols-2 2xl:grid-cols-4">
		{#each cardItems as cardItem}
			<a
				href={cardItem.href}
				id="Clembs-SMP-Early-access-screentshots"
				class="rounded-xl bg-dark text-white duration-200 hover:scale-102 active:scale-95"
			>
				<div>
					<div class="h-full w-full">
						<div id="post_img" class="flex justify-center sm:h-2/3">
							<img src={cardItem.imgURL} alt={cardItem.imgAlt} class="rounded-t-xl object-cover" />
						</div>
						<div class="p-5 sm:h-1/3">
							<div
								id="post_title"
								class="flex w-full flex-col items-baseline gap-1 py-2 md:flex-row"
							>
								<div class="text-xl font-semibold md:flex md:w-1/2 md:justify-start">
									{cardItem.title}
								</div>
								<div class="text-md text-lighter_true_gray md:flex md:w-1/2 md:justify-end">
									Post date: {cardItem.postDate}
								</div>
							</div>
							<div id="post_description" class="text-lg">
								{cardItem.description}
							</div>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
