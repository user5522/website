<script>
	import { page } from '$app/stores';
	import BlueButton from '$lib/components/buttons/blue.svelte';
</script>

<svelte:head>
	<title>{$page.error.message}</title>
</svelte:head>

<div class="flex flex-col items-center justify-center gap-5 p-5">
	<div class="flex flex-col items-center justify-center gap-1">
		<div class="text-4xl font-semibold">
			{$page.status}: {$page.error.message}
		</div>
		<div class="text-3xl">{$page.url.pathname}</div>
	</div>
	<div>
		<div class="text-2xl">This looks like an error.. & that's unfortunate.</div>
		<div class="flex flex-col gap-5">
			<div class="flex justify-center text-2xl">Maybe try one of these solutions:</div>
			<ul
				class="p-3 text-lg text-white list-disc list-inside duration-200 rounded-xl bg-dark hover:scale-102 active:scale-95"
			>
				<li>Checking if the URL/Link you received exists</li>
				<li>Taking a quick sip of water</li>
				<li>Looking over for any typos in the URL</li>
				<li>
					<a
						href="https://google.com/search?q=have+you+tried+turning+it+off+and+on+again"
						class="text-blue-300"
						target="_blank"
						rel="noreferrer">Turning it off & on again?</a
					>
				</li>
				<li>Waiting till this gets fixed</li>
			</ul>
			<div class="flex justify-center text-xl">If none of those solutions worked:</div>
		</div>
	</div>
	<div class="flex flex-row gap-5">
		<BlueButton link href="/" label="Return to homepage" />
	</div>
</div>
<div
	class="absolute top-0 right-0 font-semibold text-black rotate-180 opacity-50 select-none text-8xl dark:text-white dark:opacity-30 sm:text-9xl"
>
	Damn.
</div>
