<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const isHidden = writable(false);

	// Check if localStorage is defined

	onMount(() => {
		if (typeof localStorage !== 'undefined') {
			isHidden.set(localStorage.getItem(text) === 'true');
		}
	});

	function toggleHide() {
		isHidden.update((value) => {
			const newValue = !value;

			if (typeof localStorage !== 'undefined') {
				localStorage.setItem(text, newValue);
			}

			return newValue;
		});
	}

	export let text;
	export let href;
	export let linkText;
</script>

<div class="py-5" class:hidden={$isHidden}>
	<div
		class="flex flex-row items-center gap-2 px-4 py-2 text-white select-none bg-dark rounded-xl hover-anim"
	>
		<div class="">
			{text} <a {href} class="text-blue-300">{linkText}</a>
		</div>
		<div class="s">
			<button
				class="px-3 py-1 text-xl rounded-full hover:bg-dark_light hover-anim"
				on:click={toggleHide}
			>
				&times;
			</button>
		</div>
	</div>
</div>
