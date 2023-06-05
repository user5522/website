<script>
	import Footer from '$lib/components/footer.svelte';
	import Back from '$lib/components/back.svelte';
	import Data from '$lib/accusations/accusations.json';

	let titles = Data.map((item) => item.title);
</script>

<svelte:head>
	<title>/accusations</title>
</svelte:head>

<div class="mx-auto flex w-full max-w-5xl 2xl:max-w-7xl flex-col gap-3">
	<a href="/" class="fixed top-5 left-5 sm:top-10 sm:left-10">
		<Back label="Homepage" />
	</a>
	<div class="flex flex-col items-center justify-center px-5 pb-5 pt-24">
		<ul class="grid gap-x-4 sm:grid-cols-2 2xl:gap-x-20 2xl:grid-cols-3 list-disc list-inside">
			{#each titles as title}
				<li>{title}</li>
			{/each}
		</ul>
	</div>
</div>
<Footer />
