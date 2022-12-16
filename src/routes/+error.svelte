<!-- <script>
  document.getElementById("pathname").innerHTML =
    "Error 404: Not found " + window.location.pathname;
</script>

  <body class="text-white">
    <div class="flex flex-col items-center px-10">
      <div id="pathname" class="flex flex-row gap-3 pt-10 text-4xl" />
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
          <button class="blue-button">Contact</button>
        </a>
      </div>
    </div>
  </body>
   <div
    style="
      @media (min-width: 640px) {
        font-size: 128px;
        font-weight: bold;
      }
      font-size: 100px;
      font-weight: 600;
      z-index: -20;
      position: absolute;
      right: 0px;
      opacity: 30%;
      color: white;
    "
  >
    Damn.
  </div> -->
<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  onMount(() => {
    document.getElementById("pathname").innerHTML = window.location.pathname;
  });
</script>

<svelte:head>
  <title>{$page.error.message}</title>
</svelte:head>

<div class="flex flex-col items-center justify-center gap-5 p-5">
  <div class="flex flex-col items-center justify-center gap-1">
    <div class="text-4xl font-semibold">
      {$page.status}: {$page.error.message}
    </div>
    <div class="text-3xl" id="pathname" />
  </div>
  <div>
    <div class="text-2xl">This looks like an error.. & that's unfortunate.</div>
    <div class="flex flex-col gap-5">
      <div class="flex justify-center text-2xl">
        Maybe try one of these solutions:
      </div>
      <div
        class="rounded-xl bg-dark p-3 text-lg duration-200 hover:scale-102 active:scale-95"
      >
        <li>- Checking if the URL/Link you received exists</li>
        <li>- Taking a quick sip of water</li>
        <li>- Looking over for any typos in the URL</li>
        <li>
          - <a
            href="https://google.com/search?q=have+you+tried+turning+it+off+and+on+again"
            target="_blank"
            rel="noreferrer">Turning it off & on again?</a
          >
        </li>
      </div>
      <div class="flex justify-center text-xl">
        If none of these solutions work:
      </div>
    </div>
  </div>
  <div class="flex flex-row gap-5">
    <a href="/">
      <button class="blue-button">Return to homepage</button>
    </a>
    <a href="/about#Links">
      <button class="blue-button">Contact me</button>
    </a>
  </div>
</div>
<div
  class="absolute top-0 right-0 -z-20 rotate-180 text-8xl font-semibold text-white opacity-30 sm:text-9xl"
>
  Damn.
</div>
