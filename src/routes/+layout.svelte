<script lang="ts">
	import { page } from '$app/stores';
	import { theme } from '$lib/stores';
	import '../app.css';
	import ThemeSwitch from '$lib/components/themeSwitch.svelte';
</script>

<svelte:head>
	<script src="/theme/themeInit.js"></script>
	{#if !$page.error}
		<title>User5522</title>
	{/if}
	<style>
		:root {
			--background-color: #fff;
			--text-color: #000;
			--link-color: #1a0dab;
		}
		:root.dark {
			--background-color: #202124;
			--text-color: #fff;
			--link-color: #8ab4f8;
		}
		@media (prefers-color-scheme: dark) {
			:root[data-theme='system'] {
				--background-color: #202124;
				--text-color: #fff;
				--link-color: #8ab4f8;
			}
		}
	</style>
</svelte:head>

<ThemeSwitch style="place-right" />
<main class="page">
	<slot />
</main>
