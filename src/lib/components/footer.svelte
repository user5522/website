<script>
	export let glitch = false;

	let websiteLinks = [
		{
			name: 'Homepage',
			href: '/'
		},
		{
			name: 'Accusations',
			href: '/accusations'
		},
		{
			name: 'Projects',
			href: '/projects'
		},
		{
			name: 'Vbot (WIP)',
			href: '/projects/vbot'
		},
		{
			name: 'Graphic designs',
			href: '/projects/designs'
		},
		{
			name: 'Credits',
			href: '/credits'
		},
		{
			name: 'Collections',
			href: '/collections'
		}
	];
	let redirectLinks = [
		{
			name: 'Discord',
			href: '/discord',
			imgURL: '/logos/discord.svg',
			imgAlt: 'Discord Logo'
		},
		{
			name: 'Github',
			href: '/github',
			imgURL: '/logos/github.svg',
			imgAlt: 'Github Logo'
		},
		{
			name: 'Reddit',
			href: '/reddit',
			imgURL: '/logos/reddit.svg',
			imgAlt: 'Reddit Logo'
		},
		{
			name: 'Twitter',
			href: '/twitter',
			imgURL: '/logos/twitter.svg',
			imgAlt: 'Twitter Logo'
		},
		{
			name: 'Xbox',
			href: '/xbox',
			imgURL: '/logos/xbox.svg',
			imgAlt: 'Xbox Logo'
		},
		{
			name: 'Youtube',
			href: '/yt',
			imgURL: '/logos/youtube.svg',
			imgAlt: 'Youtube Logo'
		},
		{
			name: 'Invite Vbot',
			href: '/vbot',
			imgURL: '/vbot/vbot.svg',
			imgAlt: 'Vbot Logo'
		}
	];
	let testingLinks = [
		{ name: 'Long Page', href: '/long' },
		{ name: 'Sandbox Page', href: '/sandbox' },
		{ name: 'Beta Website', href: '/beta' }
	];
</script>

<footer class=" bottom-0 w-full bg-true_gray p-5 text-white">
	<div class="flex flex-row">
		<div class="flex flex-col gap-5 sm:flex-row sm:gap-16">
			<div class="flex flex-col">
				<div class="font-semibold uppercase pb-2">user5522</div>
				{#each websiteLinks as websiteLink}
					<ul>
						<li>
							<a href={websiteLink.href} class="text-blue-300">{websiteLink.name}</a>
						</li>
					</ul>
				{/each}
			</div>
			<div class="flex flex-col">
				<div class="font-semibold uppercase pb-2">links</div>
				{#each redirectLinks as redirectLink}
					<ul>
						<li>
							<a href={redirectLink.href} class="flex flex-row gap-1 text-blue-300">
								<img
									src={redirectLink.imgURL}
									class="relative h-5 w-5 self-center"
									alt={redirectLink.imgAlt}
									loading="lazy"
								/>
								{redirectLink.name}
							</a>
						</li>
					</ul>
				{/each}
			</div>
			<div class="flex flex-col">
				<div class="font-semibold uppercase pb-2">beta</div>
				{#each testingLinks as testingLink}
					<ul>
						<li>
							<a href={testingLink.href} class="text-blue-300">{testingLink.name}</a>
						</li>
					</ul>
				{/each}
			</div>
		</div>

		<img
			src="/logo.svg"
			alt="monochrome logo"
			class="ml-auto h-28 w-28 rounded-full bg-light_true_gray grayscale sm:h-32 sm:w-32"
			loading="lazy"
		/>
	</div>

	<div class="pt-5 text-lighter_true_gray">
		Found some <div
			class="glitch inline-block bg-dark_light p-0.5 rounded-xl"
			on:mouseenter={(glitch = true)}
			on:mouseleave={(glitch = false)}
		>
			bugs
		</div>
		?
		<a
			href="https://github.com/user5522/website/issues"
			target="blank"
			class="dark:text-lighter_true_gray text-lighter_true_gray underline"
			rel="noreferrer">report them by submitting an issue here!</a
		>
	</div>
</footer>

<style>
	.glitch {
		transform: translateY(0);
		transition: transform 200ms ease-in-out;
	}

	@keyframes glitch {
		0% {
			transform: translateY(0) scale(1) rotate(0deg);
		}
		25% {
			transform: translateY(-3px) scale(1.1) rotate(-3deg);
		}
		50% {
			transform: translateY(0) scale(1) rotate(0deg);
		}
		75% {
			transform: translateY(-3px) scale(1.1) rotate(-3deg);
		}
		100% {
			transform: translateY(0) scale(1) rotate(0deg);
		}
	}

	.glitch:hover {
		animation: glitch 400ms ease-in-out infinite;
	}
</style>
