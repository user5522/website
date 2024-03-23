<script>
	import Data from '$lib/accusations/accusations.json';

	let titles = Data.map((item) => item.title);
</script>

<ul>
	{#each titles as title}
		<li>{title}</li>
	{/each}
</ul>
