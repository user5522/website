<script>
	export let href;
	export let label = 'Back';
</script>

<div class="flex flex-row items-center">
	<a
		{href}
		class="flex flex-row select-none items-center gap-2 px-3 py-2 bg-dark-500 md:bg-opacity-50 md:backdrop-blur-lg rounded-xl hover-anim"
	>
		<img src="/icons/arrow_left.svg" class="h-5" alt="left arrow" loading="lazy" />
		<div class="text-xl font-medium text-white">{label}</div>
	</a>
</div>
