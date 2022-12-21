<script>
	import Navbar from '$lib/navbar.svelte';
	import WavesStart from '$lib/wavesStart.svelte';
	import Footer from '$lib/footer.svelte';
	import '../app.css';
	export const prerender = true;
</script>

<div class="bg-white">
	<Navbar />
	<WavesStart />
</div>

<slot />
<Footer />
