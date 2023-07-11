<script>
	import { socials } from '$lib/utilities/socials.js';
	import Seperator from '$lib/components/seperator.svelte';
	export let glitch = false;

	let websiteLinks = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Projects',
			href: '/projects'
		},
		{
			name: 'Collections',
			href: '/collections'
		},
		{
			name: 'Graphic designs',
			href: '/projects/designs'
		},
		{
			name: 'Accusations',
			href: '/accusations'
		},
		{
			name: 'Credits',
			href: '/credits'
		}
	];
	let testingLinks = [
		{ name: 'Long Page', href: '/long' },
		{ name: 'Sandbox Page', href: '/sandbox' },
		{ name: 'Beta Website', href: '/beta' }
	];
</script>

<footer class="w-full bg-dark dark:bg-opacity-70 bg-opacity-90 absolute bottom-0">
	<Seperator />
	<div class="max-w-5xl gap-7 px-5 py-10 mx-auto flex flex-col border border-red-600">
		<div class="flex flex-row">
			<a href="/" class="mr-auto ml-0 h-20 w-20 sm:h-32 sm:w-32 rounded-full">
				<img
					src="/logo.svg"
					alt="monochrome logo"
					class="rounded-full h-20 w-20 grayscale sm:h-32 sm:w-32"
					loading="lazy"
				/>
			</a>
			<div class="flex flex-row ml-auto mr-0">
				<div class="flex flex-col gap-2 pr-32">
					<div class="font-semibold text-base text-white">User5522</div>
					<ul>
						{#each websiteLinks as websiteLink}
							<li>
								<a
									href={websiteLink.href}
									class="text-gray-300 hover:underline dark:text-gray-300 text-sm"
								>
									{websiteLink.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
				<div class="flex flex-col gap-2 pr-32">
					<div class="font-semibold text-base text-white">Labs</div>
					<ul>
						{#each testingLinks as testingLink}
							<li>
								<a
									href={testingLink.href}
									class="text-gray-300 hover:underline dark:text-gray-300 text-sm"
								>
									{testingLink.name}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
		<Seperator />
		<div class="flex flex-col gap-3 sm:flex-row">
			<div class="text-gray-300">
				Found some <div
					class="glitch inline-block bg-dark_light text-gray-300 p-0.5 rounded-xl"
					on:mouseenter={(glitch = true)}
					on:mouseleave={(glitch = false)}
				>
					bugs
				</div>
				?
				<a
					href="https://github.com/user5522/website/issues"
					target="blank"
					class="underline text-gray-300 dark:text-gray-300 hover:no-underline"
					rel="noreferrer">report them by submitting an issue here!</a
				>
			</div>
			<div class="sm:mr-0 sm:ml-auto">
				<ul class="flex flex-row justify-center gap-2">
					{#each socials as social}
						<li>
							<a href={social.href} target="blank rounded-full">
								<img
									src={social.imgURL}
									class="self-center inline-block w-7 h-7"
									alt="{social.name} Logo"
									loading="lazy"
								/>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
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
