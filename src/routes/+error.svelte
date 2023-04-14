<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		document.getElementById('pathname').innerHTML = window.location.pathname;
	});
</script>

<svelte:head>
	<title>{$page.error.message}</title>
</svelte:head>

<div class="flex flex-col items-center justify-center gap-5 p-5 ">
	<div class="flex flex-col items-center justify-center gap-1">
		<div class="text-4xl font-semibold">
			{$page.status}: {$page.error.message}
		</div>
		<div class="text-3xl" id="pathname" />
	</div>
	<div>
		<div class="text-2xl">This looks like an error.. & that's unfortunate.</div>
		<div class="flex flex-col gap-5">
			<div class="flex justify-center text-2xl">Maybe try one of these solutions:</div>
			<div
				class="rounded-xl bg-dark text-white p-3 text-lg duration-200 hover:scale-102 active:scale-95">
				<li>- Checking if the URL/Link you received exists</li>
				<li>- Taking a quick sip of water</li>
				<li>- Looking over for any typos in the URL</li>
				<li>
					- <a
						href="https://google.com/search?q=have+you+tried+turning+it+off+and+on+again"
						class="text-blue-300"
						target="_blank"
						rel="noreferrer">Turning it off & on again?</a>
				</li>
				<li>- Waiting till this gets fixed</li>
			</div>
			<div class="flex justify-center text-xl">If none of those solutions worked:</div>
		</div>
	</div>
	<div class="flex flex-row gap-5">
		<a href="/">
			<button class="blue-button">Return to homepage</button>
		</a>
		<a href="/about#Links">
			<button class="blue-button">Contact me</button>
		</a>
	</div>
</div>
<div
	class="absolute top-0 right-0 -z-20 rotate-180 text-8xl font-semibold dark:text-white text-black opacity-50 dark:opacity-30 sm:text-9xl">
	Damn.
</div>
