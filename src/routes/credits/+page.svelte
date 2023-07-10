<script>
	import Emailme from '$lib/components/emailme.svelte';
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

<div class="flex flex-col items-center justify-center gap-5">
	<div class="text-4xl font-semibold">Credits</div>

	<div
		class="flex flex-col items-center justify-center w-full max-w-3xl mx-auto text-xl font-medium text-center"
	>
		<div>Thanks for visiting! I hope you enjoyed my website!</div>
		<div>Special thanks to these awesome people:</div>
	</div>
	<div class="grid gap-5 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3">
		{#each credits as { name, name2, reason }}
			<div class="flex flex-col items-center p-2">
				{#if name2}
					<div class="grid grid-cols-2 gap-x-5">
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

	<div class="flex flex-row items-center gap-1 text-2xl font-semibold">
		<p>By</p>
		<a href="/" class="text-black dark:text-white">User5522</a>
	</div>

	<Emailme />
</div>
