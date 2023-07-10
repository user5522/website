<script>
	let clicks = 0;
	let spinning = false;
	let scaling = false;

	function handleClick() {
		clicks++;

		if (clicks >= 4) {
			spinning = true;
			scaling = true;
			const timeout = setTimeout(() => {
				clicks = 0;
				spinning = false;
				scaling = false;
				clearTimeout(timeout);
			}, 10000);
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex flex-row flex-wrap items-center">
	<p class="whitespace-nowrap">For any suggestions</p>
	<p class="cursor-pointer" on:click={handleClick} class:scale={scaling}>/</p>
	<p class="whitespace-nowrap">reports email me</p>
	<p class="px-1 cursor-pointer" on:click={handleClick} class:spin={spinning}>@</p>
	<a
		href="mailto:oueslatim@pm.me"
		class="p-1 text-white dark:text-white rounded-xl bg-dark hover-anim"
	>
		oueslatim@pm.me
	</a>
</div>

<style>
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.spin {
		animation: spin 0.5s linear infinite;
	}

	@keyframes scale {
		0% {
			font-size: 1rem;
			line-height: 1.5rem;
		}
		50% {
			font-size: 1.5rem;
			line-height: 2rem;
		}
		100% {
			font-size: 1rem;
			line-height: 1.5rem;
		}
	}

	.scale {
		animation: scale 0.5s linear infinite;
	}
</style>
