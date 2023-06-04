<script>
	import Emailme from '$lib/components/emailme.svelte';
	import Heart from '$lib/twemojis/heart.svelte';
	import tippy from 'svelte-tippy';

	let credits = [
		{
			name: 'Family & Friends',
			name2: '',
			reason: 'For all the good influence they had on me'
		},
		{
			name: 'The Svelte.JS Team',
			name2: '',
			reason: 'For making an awesome JS framework'
		},
		{
			name: 'Vercel',
			name2: 'Clembs',
			reason: 'For being an epic host || For all the tips and help'
		},
		{
			name: 'The mdsvex Team',
			name2: '',
			reason: 'For creating an aweomse MD preprocessor'
		},
		{
			name: 'Tailwind Labs',
			name2: '',
			reason: 'For building a very helpful CSS framework'
		},
		{ name: '& You!', name2: '', reason: 'For visiting this website!' }
	];
	let repitionCount = 3;
</script>

<svelte:head>
	<title>/credits</title>
</svelte:head>

<div class="flex flex-col items-center justify-center gap-5">
	<div class="text-4xl font-semibold">Credits</div>

	<div
		class="mx-auto font-medium flex w-full max-w-3xl flex-col items-center justify-center text-xl"
	>
		<div>Thanks for giving my website a visit, I really hope you enjoyed it!</div>
		<div>It wouldn't have been possible without the help of many awesome people</div>
		<div>Such as:</div>
	</div>
	<div class="grid gap-5 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3">
		{#each credits as { name, name2, reason }}
			<div class="flex flex-col p-2 items-center">
				{#if name2}
					<div class="grid gap-x-5 grid-cols-2">
						{#each Array(repitionCount).fill() as _}
							{#each [name, name2] as credit}
								<div
									class="text-2xl font-semibold"
									use:tippy={{
										content: reason,
										arrow: false,
										animation: 'shift-away',
										interactive: true,
										theme: 'dark',
										placement: 'bottom',
										duration: 0,
										offset: [0, 5]
									}}
								>
									{credit}
								</div>
							{/each}
						{/each}
					</div>
				{:else}
					{#each Array(repitionCount).fill() as _}
						<div
							class="text-2xl font-semibold"
							use:tippy={{
								content: reason,
								arrow: false,
								animation: 'shift-away',
								interactive: true,
								theme: 'dark',
								placement: 'bottom',
								duration: 0,
								offset: [0, 5]
							}}
						>
							{name}
						</div>
					{/each}
				{/if}
			</div>
		{/each}
	</div>

	<div class="flex items-center justify-center gap-1 text-2xl font-semibold">
		Made with <Heart /> by
		<a href="/" class="dark:text-white text-black">User5522</a>.
	</div>

	<Emailme />
</div>
