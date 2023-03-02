<script>
	import AgeCounter from '$lib/ageCounter.svelte';
	import Flushed from '$lib/twemojis/flushed.svelte';
	import DarkTheme from '../+layout.svelte';

	let isHidden = false;

	// Check if localStorage is defined
	if (typeof localStorage !== 'undefined') {
		isHidden = localStorage.getItem('isHidden') === 'true';
	}

	function toggleHide() {
		isHidden = !isHidden;

		// Check if localStorage is defined
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('isHidden', isHidden);
		}
	}
</script>

<svelte:head>
	<title>/about</title>
</svelte:head>

<div class="flex flex-col items-center justify-center gap-5">
	<p class="text-4xl font-semibold">About</p>

	<div class="flex flex-col items-center justify-center text-xl">
		<div>
			I'm a <AgeCounter isDark={DarkTheme} />
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
					<a href="/projects">
						<button class="blue-button text-lg">Everything &rarr;</button>
					</a>
				</div>
			</div>
		</div>
	</div>

	<div id="Links" class="py-5 text-2xl font-semibold">Links</div>
	<div class="flex flex-col items-center gap-5">
		<div class="flex flex-row items-center gap-5">
			<a href="/yt" class="duration-200 hover:scale-105 active:scale-90" target="blank">
				<img src="/logos/youtube.svg" alt="youtube link" class="h-10" />
			</a>
			<a href="/discord" class="duration-200 hover:scale-105 active:scale-90" target="blank">
				<img src="/logos/discord.svg" alt="discord link" class="h-10" />
			</a>
			<a href="/github" class="duration-200 hover:scale-105 active:scale-90" target="blank">
				<img src="/logos/github.svg" alt="github link" class="h-10" />
			</a>
		</div>
		<div class="flex flex-row items-center gap-5">
			<a href="/twitter" class="duration-200 hover:scale-105 active:scale-90" target="blank">
				<img src="/logos/twitter.svg" alt="twitter link" class="h-10" />
			</a>
			<a href="/xbox" class="duration-200 hover:scale-105 active:scale-90" target="blank">
				<img src="/logos/xbox.svg" alt="xbox link" class="h-10" />
			</a>
			<a href="/steam" class="duration-200 hover:scale-105 active:scale-90" target="blank">
				<img src="logos/steam.svg" alt="steam link" class="h-10" />
			</a>
			<a href="/reddit" class="duration-200 hover:scale-105 active:scale-90" target="blank">
				<img src="/logos/reddit.svg" alt="reddit link" class="h-10" /></a
			>
		</div>
	</div>

	<div class="pt-10">
		<div class="px-5">
			for any suggestions/reports email me @
			<div
				class="relative inline-block rounded-xl  bg-dark p-1 duration-200 hover:scale-102 active:scale-95"
			>
				<a href="mailto:oueslatim@pm.me" class="text-white">oueslatim@pm.me</a>
			</div>
		</div>
	</div>
	<div
		class="bg-dark text-white p-3 rounded-xl hover:scale-102 active:scale-95 duration-200 {isHidden
			? 'hidden'
			: 'block'}"
	>
		Looking for the website credits? <a href="/credits">Look here.</a>
		<button
			class="items-center rounded-lg duration-200 hover:scale-105 hover:bg-dark_light active:scale-95 px-2 py-1 text-xl"
			on:click={toggleHide}>&times;</button
		>
	</div>
</div>
