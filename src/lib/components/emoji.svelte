<script>
	export let emoji;
	export let alt;
</script>

<img
	src="/emojis/{emoji}"
	{alt}
	class="inline-block duration-200 h-7 w-7 hover:scale-105 active:scale-95"
	loading="lazy"
/>
