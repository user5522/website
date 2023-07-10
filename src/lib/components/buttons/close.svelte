<script>
	export let onClose;
</script>

<button on:click={onClose} class="rounded-full select-none">
	<img
		src="/icons/close.svg"
		alt="Close popup"
		class="p-2 duration-200 rounded-full bg-dark_light bg-opacity-60 backdrop-blur hover:scale-110 hover:bg-red-900 active:scale-90"
		loading="lazy"
	/>
</button>
