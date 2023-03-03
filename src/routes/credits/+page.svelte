<script>
	import Heart from '$lib/twemojis/heart.svelte';
	import Flushed from '$lib/twemojis/flushed.svelte';
	import tippy from 'svelte-tippy';

	const getRandomX = () => {
		return `${Math.random() * 100}%`;
	};
	const getRandomY = () => {
		return `${Math.random() * 10}%`;
	};

	let people = [
		{
			name: 'You',
			reason: 'For visiting this website'
		},
		{
			name: 'Family & Friends',
			reason: 'For having a good influence on me'
		},
		{
			name: 'Svelte',
			reason: 'For being an awesome framework'
		},
		{
			name: 'Vercel',
			reason: 'For being epic'
		},
		{
			name: 'Clembs',
			reason: 'For all the help & the placeholder img'
		}
	];
</script>

<svelte:head>
	<title>/credits</title>
</svelte:head>

<div class="flex flex-col items-center justify-center">
	<div class="text-4xl font-semibold">Credits</div>
</div>
<div class="flex flex-col items-center justify-center gap-4 text-xl">
	<div>
		Thanks for visiting <strong>user5522.tk</strong>, I really appreciate it.
	</div>

	<div class="text-xl text-center">You might've enjoyed this website, because:</div>
	<ul class="bg-dark text-white p-5 rounded-xl hover:scale-102 active:scale-95 duration-200">
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
		<li>- It's visually appealing</li>
		<li>
			- Something that I forgot, but <a href="/about#Links">maybe you didn't</a>.
		</li>
	</ul>

	<div>
		<strong>user5522.tk</strong> wouldn't have been real without these amazing people:
	</div>
	<div class="">
		<div class="grid sm:grid-cols-3 grid-cols-2 gap-5 text-white">
			{#each people as person}
				<div style="margin-top: {getRandomY()}; margin-right: {getRandomX()}">
					<div
						use:tippy={{
							content: person.reason,
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
						<div>{person.name}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<div class="flex  justify-center">
	<div class="text-xl">
		Made with <Heart /> by User5522.
	</div>
</div>
