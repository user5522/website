<script>
	import { onMount } from 'svelte';
	import { clickOutside } from '$lib/utilities/clickOutside';
	import Theme from '$lib/theme/theme.svelte';
	import Seperator from '$lib/components/seperator.svelte';

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
		{ name: 'Projects', href: '../projects', isHide: true },
		{ name: 'Collections', href: '../collections', isHide: true },
		{ name: 'Credits', href: '../credits', isHide: true }
	];

	let linksVisible = false;
	function handleClickOutside() {
		linksVisible = false;
	}
</script>

<header use:clickOutside on:click_outside={handleClickOutside}>
	<div class="duration-400 w-full {isAnimated ? 'pb-[100px]' : 'pb-16'}">
		<div
			class="duration-400 fixed top-0 z-50 w-full justify-center overflow-auto align-middle transition-all {isAnimated
				? 'p-3'
				: 'shadow-lg'}"
		>
			<nav
				class="duration-400 flex flex-row items-center gap-2 dark:bg-dark bg-white p-4 shadow-lg transition-all {isAnimated
					? 'rounded-xl'
					: 'dark:sm:bg-opacity-50 sm:bg-opacity-50 sm:backdrop-blur-md dark:sm:backdrop-blur-md'}"
			>
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions a11y-click-events-have-key-events -->
				<img
					id="brandingLogo"
					src="/logo.svg"
					class="duration-200 bg-opacity-50 rounded-full h-9 bg-dark_light backdrop-blur-md sm:h-10 hover:scale-105 active:scale-95"
					alt="logo"
					class:spin={spinning}
					loading="lazy"
					on:click={handleClick}
				/>
				<a
					href="/"
					id="brandingWoodmark"
					class="p-2 text-base font-bold text-black duration-200 rounded-lg hover:bg-opacity-50 dark:text-white hover:scale-105 hover:bg-dark_light active:scale-95 sm:text-lg"
				>
					User5522
				</a>
				<div class="flex flex-row items-center gap-2 ml-auto mr-0">
					{#each navItems as navItem}
						<a
							href={navItem.href}
							class="{navItem.isHide
								? 'hidden sm:block'
								: 'block sm:hidden'}  rounded-lg p-2 text-base font-semibold hover:bg-opacity-50 text-black dark:text-white duration-200 hover:scale-105 hover:bg-dark_light active:scale-95 sm:text-lg"
						>
							{navItem.name}
						</a>
					{/each}
					<div class="block sm:hidden">
						<button
							class="items-center duration-200 rounded-lg hover:scale-105 hover:bg-opacity-50 hover:bg-dark_light active:scale-95"
							on:click={() => (linksVisible = !linksVisible)}
						>
							<p class="p-2 text-xl rotate-90">|||</p>
						</button>
					</div>
					<div class="self-center hidden rounded-full sm:block"><Theme /></div>
				</div>
			</nav>
			<div class={isAnimated ? 'hidden' : 'block'}>
				<Seperator />
			</div>
		</div>
	</div>

	<div
		class="{isAnimated
			? 'px-3'
			: ''} shadow-lg duration-400 fixed z-50 w-full transition-all {linksVisible
			? 'block sm:hidden'
			: 'hidden'}"
		id="links-container"
	>
		<div
			id="links-subcontainer"
			class="{isAnimated
				? 'rounded-xl'
				: ''} duration-400 flex h-1/2 w-full flex-col gap-2 dark:bg-dark bg-white p-4 transition-all"
		>
			{#each navItems as navMenuItem}
				<a
					href={navMenuItem.href}
					on:click={() => (linksVisible = !linksVisible)}
					class="block p-2 text-black duration-200 rounded-xl dark:text-white hover:bg-opacity-50 hover:scale-102 hover:bg-dark_light active:scale-95"
				>
					{navMenuItem.name}
				</a>
			{/each}

			<div><Theme /></div>
		</div>
	</div>
</header>
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
