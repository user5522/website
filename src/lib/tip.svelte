<script>
	import { writable } from 'svelte/store';

	const isHidden = writable(false);

	// Check if localStorage is defined
	if (typeof localStorage !== 'undefined') {
		isHidden.set(localStorage.getItem(text) === 'true');
	}

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
	<div class="rounded-xl bg-dark text-white p-2 hover-anim">
		{text} <a {href}>{linkText}</a>
		<button
			class="items-center rounded-lg duration-200 hover:scale-105 hover:bg-dark_light active:scale-95 px-2 py-1 text-xl"
			on:click={toggleHide}
		>
			&times;
		</button>
	</div>
</div>
