<script>
	export let link = true;
	export let href;
	export let onClick;
	export let label;
</script>

{#if link}
	<a
		{href}
		class="p-4 text-sm font-semibold text-black duration-200 select-none rounded-xl sm:p-5 sm:text-base hover:scale-102 hover:bg-dark_darker hover:bg-opacity-50 active:scale-95 dark:text-white"
	>
		{label}
	</a>
{:else}
	<button
		on:click={onClick}
		class="p-4 text-sm font-semibold text-black duration-200 select-none rounded-xl sm:p-5 sm:text-base hover:scale-102 hover:bg-dark_darker hover:bg-opacity-50 active:scale-95 dark:text-white"
	>
		{label}
	</button>
{/if}
