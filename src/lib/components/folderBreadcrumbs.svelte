<script>
	export let currentFolderPath;
	export let onClickIndex;
	export let onClickFolder;
</script>

<div>
	<button class="text-blue-300 hover:underline hover:text-[#d1c5e9]" on:click={onClickIndex}>
		index
	</button>
</div>

{#if currentFolderPath !== ''}
	{#each currentFolderPath.split('/') as folder}
		<button on:click={onClickFolder}>
			{folder}
		</button>
		<span class="mx-1">/</span>
	{/each}
{/if}
