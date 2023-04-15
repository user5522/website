<script>
	import AgeCounter from '$lib/utilities/ageCounter.svelte';
	import Flushed from '$lib/twemojis/flushed.svelte';
	import Tip from '$lib/components/tip.svelte';
	import tippy from 'svelte-tippy';

	let linksRow1 = [
		{
			href: '/yt',
			imgURL: '/logos/youtube.svg',
			imgAlt: 'Youtube'
		},
		{
			href: '/discord',
			imgURL: '/logos/discord.svg',
			imgAlt: 'Discord'
		},
		{
			href: '/github',
			imgURL: '/logos/github.svg',
			imgAlt: 'GitHub'
		}
	];
	let linksRow2 = [
		{
			href: '/twitter',
			imgURL: '/logos/twitter.svg',
			imgAlt: 'Twitter'
		},
		{
			href: '/steam',
			imgURL: '/logos/steam.svg',
			imgAlt: 'Steam'
		},
		{
			href: '/xbox',
			imgURL: '/logos/xbox.svg',
			imgAlt: 'Xbox'
		},
		{
			href: '/reddit',
			imgURL: '/logos/reddit.svg',
			imgAlt: 'Reddit'
		}
	];
</script>

<svelte:head>
	<title>/about</title>
</svelte:head>

<div class="flex flex-col items-center justify-center gap-5">
	<p class="text-4xl font-semibold">About</p>

	<div class="flex flex-col items-center justify-center text-xl">
		<div>
			I'm a <button
				use:tippy={{
					content: '24/11/2006',
					arrow: false,
					animation: 'shift-away',
					interactive: true,
					theme: 'dark',
					placement: 'bottom',
					duration: 0,
					offset: [0, 5]
				}}
				class="relative rounded-xl hover-anim"
			>
				<strong class="rounded-xl bg-dark p-1"><AgeCounter /></strong></button
			>
			year old <strong>HS student</strong> & a <strong>self-taught</strong> designer & developer.
		</div>
	</div>
	<div class="flex flex-col items-start justify-center sm:gap-20 gap-5 sm:flex-row">
		<div class="flex flex-col p-2">
			<div class="text-2xl font-semibold">I Like:</div>
			<div class="flex flex-col">
				<ul class="text-lg">
					<li>• Designing</li>
					<li>• Drinking & eating</li>
					<li>• Open-source stuff</li>
					<li>• Developing</li>
					<li>• Making useless long lists</li>
					<li>• The letter H</li>
					<li>• You, probably. <Flushed /></li>
				</ul>
			</div>
		</div>
		<div class="flex flex-col p-2">
			<div class="text-2xl font-semibold">Projects:</div>
			<div class="flex flex-col gap-5">
				<ul class="text-lg">
					<li>• Vbot - Multipurpose Discord bot</li>
					<li>• This website</li>
					<li>• SquareGame - 2D Unity game</li>
					<li>• u3d - My first Unity 3D game attempt</li>
					<li>• Snak - Broken snake clone to learn Rust</li>
				</ul>
				<div class="justify-center flex">
					<a href="/projects" class="blue-button text-lg"> Everything &rarr; </a>
				</div>
			</div>
		</div>
	</div>

	<div id="Links" class="py-5 text-2xl font-semibold">Links</div>
	<div class="flex flex-col items-center gap-5 bg-dark p-5 rounded-xl hover-anim">
		<div class="flex flex-row items-center gap-5">
			{#each linksRow1 as link}
				<a
					href={link.href}
					class="duration-200 hover:scale-105 active:scale-90 rounded-full"
					target="blank"
				>
					<img src={link.imgURL} alt={link.imgAlt} class="h-10" />
				</a>
			{/each}
		</div>
		<div class="flex flex-row items-center gap-5">
			{#each linksRow2 as link}
				<a
					href={link.href}
					class="duration-200 hover:scale-105 active:scale-90 rounded-full"
					target="blank"
				>
					<img src={link.imgURL} alt={link.imgAlt} class="h-10" />
				</a>
			{/each}
		</div>
	</div>

	<div class="pt-10">
		<div class="px-5">
			for any suggestions/reports email me @
			<div class="relative inline-block rounded-xl bg-dark p-1 hover-anim">
				<a href="mailto:oueslatim@pm.me" class="dark:text-white rounded-xl text-white"
					>oueslatim@pm.me</a
				>
			</div>
		</div>
	</div>

	<Tip text="Looking for the website credits?" href="/credits" linkText="Look here." />
</div>
