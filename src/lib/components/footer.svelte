<script>
	import { socials } from '$lib/utilities/socials.js';
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

<footer class="flex flex-col w-full gap-3 p-5 text-white bg-true_gray">
	<div class="flex flex-row">
		<div class="flex flex-col gap-5 sm:flex-row sm:gap-16">
			<div class="flex flex-col gap-2">
				<div class="font-semibold uppercase">user5522</div>
				<ul>
					{#each websiteLinks as websiteLink}
						<li>
							<a href={websiteLink.href} class="text-blue-300">{websiteLink.name}</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="flex flex-col gap-2">
				<div class="font-semibold uppercase">beta</div>
				<ul>
					{#each testingLinks as testingLink}
						<li>
							<a href={testingLink.href} class="text-blue-300">{testingLink.name}</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<img
			src="/logo.svg"
			alt="monochrome logo"
			class="ml-auto rounded-full h-28 w-28 bg-light_true_gray grayscale sm:h-32 sm:w-32"
			loading="lazy"
		/>
	</div>

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="flex flex-col gap-3 sm:flex-row">
		<div class="text-lighter_true_gray">
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
				class="underline dark:text-lighter_true_gray text-lighter_true_gray"
				rel="noreferrer">report them by submitting an issue here!</a
			>
		</div>
		<div class="sm:mr-0 sm:ml-auto">
			<ul class="flex flex-row justify-center gap-2">
				{#each socials as social}
					<li>
						<a href={social.href} target="blank">
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
