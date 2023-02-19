<script>
	import Navbar from '$lib/navbar.svelte';
	import WavesStart from '$lib/wavesStart.svelte';
	import Footer from '$lib/footer.svelte';
	import { page } from '$app/stores';
	import '../app.css';
	export const prerender = true;

	let layoutExcl = [
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

{#if $page.error || layoutExcl.some((item) => $page.route.id == item.id)}
	<slot />
{:else}
	<div class="bg-white">
		<Navbar />
		<WavesStart />
	</div>
	<div class="init-div">
		<slot />
	</div>
	<Footer />
{/if}
