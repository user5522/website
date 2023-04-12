<script>
	export let href;
	export let title;
	export let description;
	export let imgURL;
	export let imgAlt;
</script>

<a {href} class="w-full rounded-2xl bg-dark dark:text-white text-white hover-anim">
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
