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

	<div class="text-xl">
		<a
			class="text-black dark:text-white"
			href="https://files.user5522.tk/hellofriends.mp4"
			target="_blank"
		>
			A wonderful heartfelt thank you
		</a>
		to these awesome people:
	</div>
	<div class="grid gap-5 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3">
		{#each credits as { name, name2, reason }}
			<div class="flex flex-col items-center p-2">
				{#if name2}
					<div class="grid grid-cols-2 gap-x-5">
						{#each Array(repitionCount).fill() as _}
							{#each [name, name2] as credit}
								<div
									class="text-2xl"
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
							class="text-2xl"
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

	<div class="flex flex-row items-center gap-1 text-4xl font-semibold">
		<p>By</p>
		<a href="/" class="text-black dark:text-white">User5522</a>
	</div>

	<div class="max-w-xs sm:max-w-full w-full mx-auto">
		<div class="sm:text-6xl text-4xl font-bold text-left">Thanks</div>
		<div class="sm:text-6xl text-4xl font-bold text-right">For Visiting</div>
	</div>

	<Emailme />
</div>
