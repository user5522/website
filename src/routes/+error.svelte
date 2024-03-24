<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let catImageUrl = '';

	onMount(async () => {
		const response = await fetch('https://cataas.com/cat');
		catImageUrl = response.url;
	});
</script>

<svelte:head>
	<title>{$page.status}: {$page.error?.message}</title>
</svelte:head>

<a href="/">home</a>
<h1>Oh no! An error occured!</h1>
<p>here is a random cat instead:</p>
{#if catImageUrl}
	<img src={catImageUrl} style="max-width: 500px;" alt="random cat" />
{:else}
	<p>loading..</p>
{/if}
