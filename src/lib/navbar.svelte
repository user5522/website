<script>
	import { onMount } from 'svelte';
	import { clickOutside } from '$lib/clickOutside.js';

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
			}, 10000);
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
		observer.observe(observedSpan);
		return () => observer.unobserve(observedSpan);
	});

	const navItems = [
		// isHide is for the mobile hamburger menu
		{ name: 'Projects', href: '../projects', isHide: true, isPCHide: false },
		{ name: 'Collections', href: '../collections', isHide: true, isPCHide: false },
		{ name: 'About', href: '../about', isHide: true, isPCHide: false },
		{ name: 'Credits', href: '../credits', isHide: true, isPCHide: true }
	];

	let linksVisible = false;
	function handleClickOutside() {
		linksVisible = false;
	}
</script>

<div use:clickOutside on:click_outside={handleClickOutside}>
	<div class="duration-400  {isAnimated ? 'pb-[100px]' : 'pb-16'}">
		<div
			class="duration-400 fixed top-0 z-50 flex w-full flex-col justify-center overflow-auto align-middle transition-all {isAnimated
				? 'p-3'
				: ''}"
		>
			<div
				class="duration-400 flex flex-row bg-dark p-4 shadow-lg transition-all {isAnimated
					? 'rounded-xl'
					: 'sm:bg-opacity-50 sm:backdrop-blur-md'}"
			>
				<div class="flex w-1/2 flex-row items-center gap-1 duration-300 sm:gap-2" id="branding">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						id="logo"
						class="duration-200 hover:scale-105 active:scale-95"
						on:click={handleClick}
					>
						<img
							id="brandingLogo"
							src="/logo.svg"
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
				<div class="flex w-1/2 justify-end gap-2">
					{#each navItems as navItem}
						<a
							href={navItem.href}
							class="text-white {navItem.isPCHide ? 'sm:hidden' : 'sm:block'} {navItem.isHide
								? 'hidden'
								: 'block'}"
						>
							<button
								class=" rounded-lg p-2 text-base font-medium duration-200 hover:scale-105 hover:bg-dark_light active:scale-95 sm:text-lg"
							>
								{navItem.name}
							</button>
						</a>
					{/each}
					<div class="block sm:hidden">
						<button
							class="items-center rounded-lg duration-200 hover:scale-105 hover:bg-dark_light active:scale-95"
							on:click={() => (linksVisible = !linksVisible)}
						>
							<p class="rotate-90 p-2 text-xl">|||</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="{isAnimated ? 'px-3' : ''} duration-400 fixed z-50 w-full transition-all {linksVisible
			? 'block sm:hidden'
			: 'hidden'}"
		id="links-container"
	>
		<div
			id="links-subcontainer"
			class="{isAnimated
				? 'rounded-xl'
				: ''} duration-400 flex h-1/2 w-full flex-col gap-2 bg-dark p-4 transition-all"
		>
			{#each navItems as navMenuItem}
				<a
					href={navMenuItem.href}
					class="block rounded-xl p-2 text-white duration-200 hover:scale-102 hover:bg-dark_light active:scale-95"
				>
					{navMenuItem.name}
				</a>
			{/each}
			<div class="block rounded-xl bg-dark_darker p-3 hover:scale-102 active:scale-95 duration-200">
				// This menu is still experimental!<br />
				// Click anywhere outside to close it!
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
