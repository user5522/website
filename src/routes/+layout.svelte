<script>
	import { page } from '$app/stores';
	import '../app.css';
</script>

{#if $page.error || $page.route.id !== '/'}
	<slot />
{:else}
	<div class="flex flex-col items-center justify-center w-full max-w-4xl gap-2 px-3 pt-2 mx-auto">
		<slot />
	</div>
{/if}
