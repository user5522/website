<script>
	import { page } from '$app/stores';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';

	let layoutExcl = [{ id: '/accusations' }];
</script>

<svelte:head>
	<title>{$page.error || $page.route.id == '/' ? `` : $page.route.id}</title>
</svelte:head>

{#if $page.error || layoutExcl.some((item) => $page.route.id.toLowerCase() == item.id)}
	<main class="text-black bg-white dark:bg-black dark:text-white pb-108">
		<slot />
	</main>
{:else}
	<Navbar />

	<main
		class="flex flex-col items-center justify-center w-full max-w-5xl gap-3 px-5 pb-108 mx-auto pt-28 2xl:max-w-7xl"
	>
		<slot />
	</main>

	<Footer />
{/if}
