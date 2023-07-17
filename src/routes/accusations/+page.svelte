<script>
	import Footer from '$lib/components/footer.svelte';
	import Back from '$lib/components/buttons/back.svelte';
	import Data from '$lib/accusations/accusations.json';

	let titles = Data.map((item) => item.title);
</script>

<div class="flex flex-col w-full max-w-5xl gap-3 mx-auto 2xl:max-w-7xl">
	<div class="fixed top-5 left-5 sm:top-10 sm:left-10">
		<Back label="Homepage" href="/" />
	</div>
	<div class="flex flex-col items-center justify-center px-5 pt-24 pb-5">
		<ul class="grid list-disc list-inside gap-x-4 sm:grid-cols-2 2xl:gap-x-20 2xl:grid-cols-3">
			{#each titles as title}
				<li>{title}</li>
			{/each}
		</ul>
	</div>
</div>
<Footer />
