<script>
	import { onMount } from 'svelte';

	let clicks = 0;
	let spinning = false;

	function handleClick() {
		clicks++;

		if (clicks >= 4) {
			spinning = true;
			const timeout = setTimeout(() => {
				clicks = 0;
				spinning = false;
				clearTimeout(timeout);
			}, 1000);
		}
	}

	let observedSpan;
	let isAnimated = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isAnimated = true;
					}
					if (!entry.isIntersecting) {
						isAnimated = false;
					}
				});
			},
			{ root: null }
		);
		console.log(observedSpan);
		observer.observe(observedSpan);
		return () => observer.unobserve(observedSpan);
	});

	const navItems = [
		{ name: 'Projects', href: 'projects' },
		{ name: 'Collections', href: 'projects' },
		{ name: 'About', href: 'projects' }
	];
</script>

<div class="pb-28">
	<div
		id="padding"
		class="duration-400 transition-all fixed top-0 z-50 flex w-full flex-col justify-center overflow-auto align-middle {isAnimated
			? 'p-3'
			: ''}"
	>
		<div
			id="navbar"
			class="flex flex-row duration-400 transition-all bg-dark p-4 shadow-lg {isAnimated
				? 'rounded-xl'
				: 'sm:bg-opacity-50 sm:backdrop-blur-md'}"
		>
			<div class="flex w-1/2 flex-row items-center gap-1 duration-300 sm:gap-2" id="branding">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div id="logo" class="duration-200 hover:scale-105 active:scale-95" on:click={handleClick}>
					<img
						id="brandingLogo"
						src="/Logo_flat.svg"
						class="h-9 items-center rounded-full bg-dark_light bg-opacity-50 backdrop-blur-md sm:h-10"
						alt="logo"
						class:spin={spinning}
					/>
				</div>
				<a href="/" class="text-white">
					<button
						id="brandingWoodmark"
						class="rounded-lg p-2 text-base font-bold duration-200 hover:scale-105 hover:bg-dark_light hover:bg-opacity-50 active:scale-95 sm:text-lg"
						alt="branding woodmark"
					>
						User5522
					</button>
				</a>
			</div>
			<div class="flex w-1/2 justify-end">
				{#each navItems as navItem}
					<a href={navItem.href} class="text-white">
						<button
							class="rounded-lg p-2 text-base font-medium duration-200 hover:scale-105 hover:bg-dark_light active:scale-95 sm:text-lg"
						>
							{navItem.name}
						</button>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
<span bind:this={observedSpan} />

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
</style>
