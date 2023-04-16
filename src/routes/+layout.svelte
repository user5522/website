<script>
	import Navbar from '$lib/components/navbar.svelte';
	import WavesStart from '$lib/components/wavesStart.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { page } from '$app/stores';
	import '../app.css';

	let layoutExcl = [
		{ id: '/(links/beta' },
		{ id: '/(links)/discord' },
		{ id: '/(links)/github' },
		{ id: '/(links)/reddit' },
		{ id: '/(links)/sgsource' },
		{ id: '/(links)/snaksource' },
		{ id: '/(links)/source' },
		{ id: '/(links)/steam' },
		{ id: '/(links)/twitter' },
		{ id: '/(links)/vbot' },
		{ id: '/(links)/vbot/source' },
		{ id: '/(links)/xbox' },
		{ id: '/(links)/yt' },
		{ id: '/(links)/u3d' },
		{ id: '/accusations' }
	];
</script>

{#if $page.error || layoutExcl.some((item) => $page.route.id.toLowerCase() == item.id)}
	<div class="dark:bg-black dark:text-white bg-white text-black">
		<slot />
	</div>
{:else}
	<div
		class="dark:bg-white bg-dark"
		style="transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;"
	>
		<Navbar />
		<WavesStart />
	</div>

	<div class="init-div">
		<slot />
	</div>
	<Footer />
	<div class="hidden 4xl:block text-xl">sorry, yer screen too big {':('}</div>
{/if}
