<script>
	import Data from '$lib/accusations/accusations.json';

	let titles = Data.map((item) => item.title);
</script>

<div class="flex flex-col items-center justify-center bg-dark py-5 text-white">
	<ul>
		{#each titles as title}
			<li>- {title}</li>
		{/each}
	</ul>
</div>
