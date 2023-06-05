<script>
	import Data from '$lib/accusations/accusations.json';

	let titles = Data.map((item) => item.title);
</script>

<div class="flex flex-col items-center justify-center py-5">
	<ul class="list-disc list-inside">
		{#each titles as title}
			<li>{title}</li>
		{/each}
	</ul>
</div>
