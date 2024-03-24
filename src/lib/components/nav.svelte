<script lang="ts">
	import { page } from '$app/stores';
	import { links } from '$lib/links';

	let currentPage: string = '';

	for (let i = 0; i < links.length; i++) {
		if ($page.route.id == links[i].href) {
			currentPage = links[i].href;
		}
	}
</script>

<div class="separate">
	{#each links as link}
		{#if currentPage != link.href}
			<a href={link.href}>{link.name}</a>
		{/if}
	{/each}
</div>
