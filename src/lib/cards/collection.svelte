<script>
	export let href;
	export let title;
	export let description;
	export let imgURL;
	export let imgAlt;
	export let postDate;
</script>

<a
	{href}
	class="rounded-xl bg-dark text-white dark:text-white duration-200 hover:scale-102 active:scale-95"
>
	<div>
		<div class="h-full w-full">
			<div id="post_img" class="flex justify-center sm:h-2/3">
				<img src={imgURL} alt={imgAlt} class="rounded-t-xl object-cover" />
			</div>
			<div class="p-5 sm:h-1/3">
				<div id="post_title" class="flex w-full flex-col items-baseline gap-1 py-2 md:flex-row">
					<div class="text-xl font-semibold md:flex md:w-2/3 md:justify-start">
						{title}
					</div>
					<div class="text-md text-lighter_true_gray md:flex md:w-1/3 md:justify-end">
						Post date: {postDate}
					</div>
				</div>
				<div id="post_description" class="text-lg">
					{description}
				</div>
			</div>
		</div>
	</div>
</a>
