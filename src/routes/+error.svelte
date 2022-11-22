<script>
  import { page } from "$app/stores";
</script>

<div class="flex flex-col items-center px-10 text-white">
  <div class="flex flex-row gap-3 pt-10 text-4xl">
    404: {$page.error.message}
  </div>
  <div class="py-10 text-2xl">
    This looks like an error.. & that's unfortunate.
  </div>
  <div class="pb-5 text-xl">Maybe try one of these solutions:</div>
  <div class="text-lg">
    <div>- Checking if the URL/Link you received is valid</div>
    <div>- Checking for any typos in the URL</div>
    <div>- Checking if you have the permission to view this page</div>
  </div>
  <div class="flex flex-row gap-5 py-10">
    <a href="/">
      <button class="blue-button">Homepage</button>
    </a>
    <a href="/about#Links">
      <button class="blue-button">Contact me</button>
    </a>
  </div>
  <div style="position: absolute; bottom: 0px">
    If none of the solutions given work, then please come back later or contact
    me
  </div>
</div>
