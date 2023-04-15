<script>
	import Footer from '$lib/components/footer.svelte';
	import Data from '$lib/accusations.json';

	let titles = Data.map((item) => item.title);
</script>

<svelte:head>
	<title>/accusations</title>
</svelte:head>
<div class="flex justify-center py-10">
	<a href="/">
		<button class="blue-button">Back to Homepage</button>
	</a>
</div>
<div class="flex flex-col items-center justify-center px-5 pb-5">
	<ul>
		{#each titles as title}
			<li>- {title}</li>
		{/each}
	</ul>
</div>
<Footer />
