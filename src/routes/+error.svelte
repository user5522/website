<script>
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>{$page.status}: {$page.error.message}</title>
</svelte:head>

<div
  class="fixed flex flex-col -translate-x-1/2 -translate-y-1/3 top-1/3 left-1/2"
>
  <div class="self-center text-3xl">{$page.status}: {$page.error.message}</div>
  <div class="self-center text-2xl">
    That looks like an error.. Try one of these solutions:
  </div>
  <div class="self-center mt-5 text-xl">
    - Checking if the URL/Link you got is valid<br />
    - Checking if you have permission to access this page<br />
    - Refreshing the page<br />
    - Making sure the website is online (soon)
  </div>
  <div class="self-center mt-10 duration-200 hover:scale-110 active:scale-90">
    <a href="/" class="p-3 text-xl text-blue-300 bg-blue-900 rounded-xl">Home</a
    >
  </div>
</div>
