<script>
	import AgeCounter from '$lib/ageCounter.svelte';
	import Heart from '$lib/twemojis/heart.svelte';
	import Flushed from '$lib/twemojis/flushed.svelte';
	import WavingHand from '$lib/twemojis/wavingHand.svelte';
	import tippy from 'svelte-tippy';
</script>

<svelte:head>
	<title>/about</title>
</svelte:head>

<div class="flex flex-col items-center justify-center gap-5">
	<p class="text-4xl">About</p>

	<div class="flex flex-col items-center justify-center text-xl">
		<div>
			Hi I'm Oueslati <WavingHand />,
		</div>
		<div>
			a <button
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
				class="relative duration-200 hover:scale-102 active:scale-95"
			>
				<strong class="rounded-xl bg-dark p-1"><AgeCounter /></strong></button
			>
			year old
			<a href="https://google.com/search?q=north+tunisia" target="_blank" rel="noreferrer"
				>north Tunisian</a
			>
			developer.
		</div>
		<div>These are some things about me</div>
	</div>
	<div class="flex flex-col items-start justify-center gap-5 sm:flex-row">
		<!-- <div class="grid justify-center gap-5 sm:grid-cols-2 2xl:grid-cols-3"> -->
		<div
			id="ilike"
			class="h-full w-full rounded-xl bg-dark duration-200 hover:scale-102 active:scale-95 sm:backdrop-blur-sm"
		>
			<div class="flex flex-col p-5">
				<div class="text-center text-2xl">I Like:</div>
				<div class="flex flex-col pt-5">
					<ul class="text-lg">
						<li>
							-
							<span
								class="bg-gradient-to-r from-orange-700 via-yellow-500 animate-text to-red-800 text-transparent bg-clip-text"
							>
								Digital Designing</span
							>
						</li>
						<li>
							-
							<span
								class="bg-gradient-to-r from-green-600 via-blue-600 animate-text to-purple-600 text-transparent bg-clip-text"
							>
								Developing</span
							>
						</li>
						<li>
							-
							<span
								class="bg-gradient-to-r from-dark_light via-slate-600 to-gray-900 text-transparent bg-clip-text animate-text"
								>Problem solving</span
							>
						</li>
						<li>- Drinking & eating</li>
						<li>- Open-source stuff</li>
						<li>- Breathing</li>
						<li>- Making uselessly long lists</li>
						<li>- The letter H</li>
						<li>
							- You, probably. <Flushed />
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div
			id="skills"
			class="h-full w-full rounded-xl bg-dark duration-200 hover:scale-102 active:scale-95"
		>
			<div class="flex flex-col p-5">
				<div class="text-center text-2xl">Skills:</div>
				<div class="flex flex-col pt-5">
					<ul class="text-lg">
						<li>
							- SvelteKit (<strong>7/10</strong> I really <Heart /> it)
						</li>
						<li>- React (<strong>4/10</strong> not so good)</li>
						<li>- Rust (<strong>3/10</strong> too hard for me)</li>
						<li>- HTML & CSS (<strong>8/10</strong> I'm pretty good)</li>
						<li>- Javascript (<strong>6/10</strong> I can do stuff)</li>
						<li>- Dart (<strong>4/10</strong> Still learning it)</li>
						<li>
							- Python (<strong>3/10</strong> never tried with it)
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="flex flex-col items-start justify-center gap-5 sm:flex-row">
		<div
			id="projects"
			class="h-full w-full rounded-xl bg-dark duration-200 hover:scale-102 active:scale-95"
		>
			<div class="flex flex-col p-5">
				<div class="text-center text-2xl">Projects:</div>
				<div class="flex flex-col pt-5">
					<ul class="text-lg">
						<li>- Vbot - Multipurpose Discord bot</li>
						<li>- SquareGame - 2D Unity game</li>
						<li>- This website - place for all of my stuff</li>
						<!-- <li>- M3F - upcomming clock app in Flutter</li> Too early. -->
						<li>- Snak - broken snake clone made to learn Rust</li>
						<li>- <a href="/projects">Everything else</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div id="Links" class="my-5 text-2xl">Links</div>
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
	<div class="rounded-xl bg-dark p-2 duration-200 hover:scale-102 active:scale-95">
		Looking for the website credits? <a href="/credits">Look here.</a>
	</div>
</div>
