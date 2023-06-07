<script>
	import data from '$lib/utilities/subtitles.json';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	let randomSubtitle = ' [Loading a subtitle..]';

	const dispatch = createEventDispatcher();

	onMount(() => {
		selectRandomSubtitle();
	});

	function selectRandomSubtitle() {
		const keys = Object.keys(data);
		const randomKey = keys[Math.floor(Math.random() * keys.length)];
		randomSubtitle = data[randomKey].subtitle + '.';
	}

	function reroll() {
		selectRandomSubtitle();
		dispatch('reroll');
	}
</script>

<div class="flex flex-col sm:flex-row gap-5 items-center">
	<div class="pl-auto self-center">
		<div class="text-xl">A professional{randomSubtitle}</div>
	</div>
	<div class="">
		<button
			class="flex flex-row items-center gap-2 p-2 bg-dark rounded-xl sm:rounded-full hover-anim"
			on:click={reroll}
		>
			<div class="duration-500 active:rotate-360">
				<img src="/icons/arrow_path.svg" alt="arrow path" class="w-6 h-6" loading="lazy" />
			</div>
			<p class="sm:hidden font-semibold">Reroll</p>
		</button>
	</div>
</div>
