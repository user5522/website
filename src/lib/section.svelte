<script>
	export let date;
</script>

<div class="text-xl">
	<div class="text-3xl font-medium hover:font-bold cursor-pointer">
		# <div class="active:underline inline-block">{date}</div>
	</div>
	<slot />
</div>
