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
		{
			name: 'Long page',
			href: '/long'
		},
		{
			name: 'Sandbox page',
			href: '/sandbox'
		}
	];

	export let isDark = true;
</script>

<footer class=" bottom-0 w-full bg-true_gray {isDark ? '' : 'bg-opacity-50'} p-5">
	<div class="flex flex-row">
		<div class="flex flex-col">
			<div class="flex flex-col gap-5 sm:flex-row sm:gap-10">
				<div class="flex flex-col">
					<div class="font-semibold {isDark ? 'text-white' : 'text-black'}">Website links:</div>
					{#each websiteLinks as websiteLink}
						<div class={isDark ? 'text-white' : 'text-black'}>
							- <a class={isDark ? '' : 'text-blue-900'} href={websiteLink.href}
								>{websiteLink.name}</a
							>
						</div>
					{/each}
				</div>
				<div class="flex flex-col">
					<div class="font-semibold {isDark ? 'text-white' : 'text-black'}">Redirecting links:</div>
					{#each redirectLinks as redirectLink}
						<div class="flex flex-row gap-1 {isDark ? 'text-white' : 'text-black'}">
							-
							<a href={redirectLink.href} class="flex {isDark ? '' : 'text-blue-900'}"
								>{redirectLink.name}
								<img
									src={redirectLink.imgURL}
									class="relative top-1 h-5 items-baseline pl-1"
									alt={redirectLink.imgAlt}
								/></a
							>
						</div>
					{/each}
				</div>
				<div class="flex flex-col">
					<div class="font-semibold {isDark ? 'text-white' : 'text-black'}">
						Website testing links:
					</div>
					{#each testingLinks as testingLink}
						<div class={isDark ? 'text-white' : 'text-black'}>
							-
							<a href={testingLink.href} class={isDark ? '' : 'text-blue-900'}>{testingLink.name}</a
							>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<img
			src="/logo.svg"
			alt="monochrome logo"
			class="ml-auto h-28 w-28 rounded-full bg-light_true_gray grayscale sm:h-32 sm:w-32"
		/>
	</div>

	<div class="pt-5 {isDark ? 'text-lighter_true_gray' : 'text-true_gray'}">
		Found some annoying <div
			class="glitch inline-block {isDark
				? 'bg-dark_light'
				: 'bg-lighter_true_gray'} p-0.5 rounded-xl"
			on:mouseenter={(glitch = true)}
			on:mouseleave={(glitch = false)}
		>
			bugs
		</div>
		?
		<a
			href="https://github.com/user5522/website/issues"
			target="blank"
			class="{isDark ? 'text-lighter_true_gray' : 'text-true_gray'} underline"
			rel="noreferrer">report them by making an issue here!</a
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
