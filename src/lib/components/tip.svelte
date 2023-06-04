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
	<div class="flex flex-row gap-2 bg-dark text-white rounded-xl p-2 hover-anim">
		<div class="self-center">
			{text} <a {href} class="text-blue-300">{linkText}</a>
		</div>
		<div class="self-center">
			<button
				class="hover:bg-dark_light px-2 py-1 rounded-lg text-xl hover-anim"
				on:click={toggleHide}
			>
				&times;
			</button>
		</div>
	</div>
</div>
