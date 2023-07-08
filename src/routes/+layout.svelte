<script>
	import { page } from '$app/stores';
	import '../app.css';
</script>

{#if $page.error || $page.route.id !== '/'}
	<slot />
{:else}
	<div class="flex flex-col items-center justify-center w-full max-w-3xl gap-2 pt-5 mx-auto">
		<slot />
	</div>
{/if}
