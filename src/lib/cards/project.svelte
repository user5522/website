<script>
	export let href;
	export let title;
	export let description;
	export let imgURL;
	export let imgAlt;

	let id = title.replace(' ', '-').toLowerCase();
</script>

<a
	{href}
	{id}
	class="max-w-xl text-white select-none rounded-xl bg-dark dark:text-white hover-anim"
>
	<div>
		<img src={imgURL} alt={imgAlt} class="rounded-t-xl sm:h-2/3" loading="lazy" />
		<div class="flex flex-col gap-2 p-5 sm:h-1/3">
			<div class="text-xl font-bold">{title}</div>
			<div class="text-lg">
				{description}
			</div>
		</div>
	</div>
</a>
