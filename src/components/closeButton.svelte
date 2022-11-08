<script>
  export let onClose;
</script>

<button on:click={onClose} class="absolute top-2 right-10 z-50"
  ><img
    src="/icons/close.svg"
    alt="Close popup"
    class="rounded-full bg-dark_light p-2 duration-200 hover:scale-110 hover:bg-red-900 active:scale-90"
  /></button
>
