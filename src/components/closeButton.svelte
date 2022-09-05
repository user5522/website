<script>
  export let onClose;
</script>

<button on:click={onClose} class="absolute z-50 right-10 top-5"
  ><img
    src="/close.svg"
    alt="Close popup"
    class="rounded-full bg-dark_light p-2 hover:bg-red-900 hover:scale-110 active:scale-90 duration-200"
  /></button
>
