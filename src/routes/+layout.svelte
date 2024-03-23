<script lang="ts">
	import { page } from '$app/stores';
	import { theme } from '$lib/stores';
	import '../app.css';
	import ThemeSwitch from '$lib/components/themeSwitch.svelte';
</script>

<svelte:head>
	{#if !$page.error}
		<title>User5522</title>
	{/if}
	<meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme} />
	<link rel="stylesheet" href={`/theme/${$theme}.css`} />
</svelte:head>

<ThemeSwitch style="place-right" />
<main class="page">
	<slot />
</main>
