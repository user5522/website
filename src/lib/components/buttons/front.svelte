<script>
	export let href;
	export let label = 'Next';
</script>

<a class="flex select-none rounded-xl" {href}>
	<div
		class="flex flex-row items-center gap-2 px-3 py-2 bg-dark md:bg-opacity-50 md:backdrop-blur-lg rounded-xl hover-anim"
	>
		<div class="text-xl font-medium text-white">{label}</div>
		<img src="/icons/arrow_left.svg" class="h-5 rotate-180" alt="right arrow" loading="lazy" />
	</div>
</a>
