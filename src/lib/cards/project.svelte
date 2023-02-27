<script>
	export let href;
	export let imgURL;
	export let title;
	export let description;
	export let imgAlt;

	export let isDark = false;
</script>

<a
	class="w-full rounded-2xl {isDark
		? 'bg-dark'
		: 'bg-lighter_true_gray'} text-white duration-200 shadow-lg hover:scale-102 active:scale-95"
	{href}
>
	<div>
		<div class="h-full">
			<div class="sm:h-2/3">
				<div class="flex w-full items-center justify-center">
					<img src={imgURL} alt={imgAlt} class="rounded-t-xl" />
				</div>
			</div>
			<div class="p-5 sm:h-1/3">
				<div class="flex flex-row items-baseline">
					<div id="project_title" class=" text-xl font-bold">{title}</div>
				</div>
				<div>
					<div id="project_description" class="text-lg">
						{description}
					</div>
				</div>
			</div>
		</div>
	</div>
</a>
