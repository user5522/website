<script>
	export let title;
	export let number;
	export let author;
	export let authorLogo;
	export let date;

	import './app.css';
</script>

<svelte:head>
	<title>/collections/ - {title}</title>
</svelte:head>

<div class="mx-auto flex w-full max-w-4xl flex-col gap-3">
	<a href="/collections" class="flex">
		<div class="hover-anim flex flex-row gap-3 rounded-xl bg-dark py-2 px-3">
			<img src="/icons/arrow_left.svg" alt="left arrow" />
			<div class="text-xl font-medium text-white">Back</div>
		</div>
	</a>

	<div id="collection-header" class="pb-10">
		<div id="collection-title" class="flex flex-row  items-baseline gap-1 text-3xl font-semibold">
			<div class="text-2xl text-light_true_gray">#{number}</div>
			<div>{title}</div>
		</div>
		<div class="flex flex-col sm:flex-row">
			<div
				id="collection-author"
				class="flex flex-row items-center justify-start gap-1 text-xl font-semibold text-lighter_true_gray sm:w-1/2"
			>
				<img src={authorLogo} alt="author icon" class="h-10 rounded-full" />
				<div>Author: {author}</div>
			</div>
			<div
				id="collection-date"
				class="flex items-center justify-start pl-10 text-xl font-semibold text-lighter_true_gray sm:w-1/2 sm:justify-end"
			>
				<div>On: {date}</div>
			</div>
		</div>
	</div>

	<div class="text-xl">
		<slot />
	</div>
</div>
