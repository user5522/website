<script>
	export let link = false;
	export let onClick;
	export let label;
	export let href;
</script>

{#if link}
	<a
		class="p-4 text-sm font-semibold text-blue-300 duration-200 select-none rounded-xl bg-dark_blue hover:scale-102 active:scale-95 sm:p-5 sm:text-base"
		{href}
	>
		{label}
	</a>
{:else}
	<button
		class="p-4 text-sm font-semibold text-blue-300 duration-200 select-none rounded-xl bg-dark_blue hover:scale-102 active:scale-95 sm:p-5 sm:text-base"
		on:click={onClick}
	>
		{label}
	</button>
{/if}
