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

<div class="mx-auto flex max-w-4xl w-full flex-col gap-16">
	<div id="collection-header">
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

