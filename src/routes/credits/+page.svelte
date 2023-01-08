<script>
	import Heart from '$lib/twemojis/heart.svelte';
	import Flushed from '$lib/twemojis/flushed.svelte';
	import tippy from 'svelte-tippy';

	const getRandomX = () => {
		return `${Math.random() * 100}%`;
	};
</script>

<svelte:head>
	<title>/credits</title>
</svelte:head>

<div class="flex flex-col items-center justify-center">
	<div class="text-4xl">Credits</div>
	<div class="text-xl">
		A place to say thanks <Heart />
	</div>
</div>
<div class="flex flex-col items-center justify-center gap-4 text-xl">
	<div>
		Thanks for visiting <strong>user5522.tk</strong>, I really appreciate it (probably)
	</div>
	<div
		class="h-full flex flex-col rounded-xl bg-dark duration-200 hover:scale-102 active:scale-95 sm:backdrop-blur-sm p-5 gap-5"
	>
		<div class="text-xl text-center">You might enjoy this website, because:</div>
		<ul>
			<li>
				- It is built with <a target="_blank" href="https://kit.svelte.dev" rel="noreferrer"
					>sveltekit</a
				>
			</li>
			<li>- It's created by me {':)'}</li>
			<li>
				- it's open source on
				<a target="github" href="https://github.com/user5522/website" rel="noreferrer"> GitHub </a> (just
				like most of my projects btw)
			</li>
			<li>- It's visually appealing in my opinion</li>
			<li>- It'll support more languages soon™ (maybe)</li>
			<li>
				- I have nothing else to compliment, but <a href="/about#Links">maybe you do</a>.
			</li>
		</ul>
	</div>
	<div>
		<strong>user5522.tk</strong> would not be as good as it is without the help of these amazing people:
	</div>
	<div class="flex flex-col gap-5">
		<div style="margin-left: {getRandomX()}">
			<div
				use:tippy={{
					content: 'for having a good influence on me',
					arrow: false,
					animation: 'shift-away',
					interactive: true,
					theme: 'dark',
					placement: 'bottom',
					duration: 0,
					offset: [0, 5]
				}}
				class="flex whitespace-nowrap w-fit flex-col items-center justify-center rounded-full bg-dark p-4 duration-200 hover:scale-102 active:scale-95"
			>
				<li>My family</li>
				<li>& friends</li>
			</div>
		</div>
		<div style="margin-left: {getRandomX()}">
			<div
				use:tippy={{
					content: 'for creating an awesome framework',
					arrow: false,
					animation: 'shift-away',
					interactive: true,
					theme: 'dark',
					placement: 'bottom',
					duration: 0,
					offset: [0, 5]
				}}
				class="flex w-fit flex-col items-center justify-center rounded-full bg-dark p-4 duration-200 hover:scale-102 active:scale-95"
			>
				<div>Svelte</div>
				<div>Devs</div>
			</div>
		</div>
		<div style="margin-left: {getRandomX()}">
			<div
				use:tippy={{
					content: 'for providing free hosting',
					arrow: false,
					animation: 'shift-away',
					interactive: true,
					theme: 'dark',
					placement: 'bottom',
					duration: 0,
					offset: [0, 5]
				}}
				class="flex w-fit flex-col items-center justify-center rounded-full bg-dark p-4 duration-200 hover:scale-102 active:scale-95"
			>
				<div>Vercel</div>
			</div>
		</div>
		<div style="margin-left: {getRandomX()}">
			<div
				use:tippy={{
					content: 'for the placeholder img and all the tips',
					arrow: false,
					animation: 'shift-away',
					interactive: true,
					theme: 'dark',
					placement: 'bottom',
					duration: 0,
					offset: [0, 5]
				}}
				class="flex w-fit flex-col items-center justify-center rounded-full bg-dark p-4 duration-200 hover:scale-102 active:scale-95"
			>
				<div>Clembs</div>
			</div>
		</div>
		<div class="self-center">
			<div
				use:tippy={{
					content: 'for visiting my website',
					arrow: false,
					animation: 'shift-away',
					interactive: true,
					theme: 'dark',
					placement: 'bottom',
					duration: 0,
					offset: [0, 5]
				}}
				class="flex w-fit flex-col items-center justify-center rounded-full bg-dark p-4 duration-200 hover:scale-102 active:scale-95"
			>
				<div>You <Flushed /></div>
			</div>
		</div>
	</div>
</div>

<div class="flex  justify-center">
	<div class="text-xl">
		Made with <Heart /> by User5522.
	</div>
</div>
