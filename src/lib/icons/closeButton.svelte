<script>
	export let onClose;
</script>

<button on:click={onClose} class="absolute top-5 right-5 z-50"
	><img
		src="/icons/close.svg"
		alt="Close popup"
		class="rounded-full bg-dark_light bg-opacity-60 p-2 backdrop-blur duration-200 hover:scale-110 hover:bg-red-900 active:scale-90"
	/></button
>
