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

<div class="pt-10">
	<div class="flex flex-row px-5 items-center">
		<p>For any suggestions</p>
		<button
			class="inline-block text-base align-middle cursor-pointer"
			on:click={handleClick}
			class:scale={scaling}>/</button
		>
		<p>reports email me</p>
		<button class="inline-block cursor-pointer px-1" on:click={handleClick} class:spin={spinning}>
			@
		</button>
		<div class="relative inline-block rounded-xl bg-dark p-1 hover-anim">
			<a href="mailto:oueslatim@pm.me" class="dark:text-white rounded-xl text-white"
				>oueslatim@pm.me</a
			>
		</div>
	</div>
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
