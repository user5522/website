<script>
  import Navbar from "$lib/navbar.svelte";
  import WavesStart from "$lib/waves_start.svelte";
  import Footer from "$lib/footer.svelte";
  import { onMount } from "svelte";
</script>

<svelte:head>
  <title>/blog</title>
</svelte:head>

<div class="bg-white">
  <Navbar />
  <WavesStart />
</div>
<div class="init-div">
  <div class="flex flex-col items-center justify-center pb-20">
    <div class="flex flex-row">
      <p class="text-4xl">Blog</p>
    </div>
    <div>
      <div class="px-10 text-xl">Everything I want to blog about</div>
    </div>
  </div>

  <div class="flex flex-row items-center justify-center px-10 pb-10">
    <div id="search">
      <input
        id="searchInput"
        type="text"
        class="w-72 rounded-xl bg-dark p-3 sm:w-128"
        placeholder="Search all of my blogs [WIP]"
      />
    </div>
    <div>
      <img src="/icons/search.svg" class="h-10 pl-2" alt="search" />
    </div>
  </div>

  <div class="pb-10">
    <div id="doubleposts" class="flex flex-col gap-5 px-5 sm:flex-row">
      <a
        href="/blog#placeheld-link"
        id="placeheld-link"
        class="rounded-xl bg-dark p-5 text-white duration-200 hover:scale-105 active:scale-95 sm:w-1/2"
      >
        <div id="post_img" class="flex justify-center">
          <img src="/Logo_flat.svg" alt="User5522 logo" />
        </div>
        <div
          id="post_title"
          class="flex flex-col items-baseline gap-1 py-2 sm:flex-row"
        >
          <div class="text-xl font-semibold">This is a much longer title</div>
          <div class="text-md text-lighter_true_gray">
            Post date: DD/MM/YYYY
          </div>
        </div>
        <div id="post_description" class="text-lg">
          This is a description about this post's content, it is supposed to be
          a summary for people to know what they will be reading.
        </div>
      </a>
      <a
        href="/blog#placeheld-link"
        id="placeheld-link"
        class="rounded-xl bg-dark p-5 text-white duration-200 hover:scale-105 active:scale-95 sm:w-1/2"
      >
        <div id="post_img">
          <img src="/placeholder.png" alt="placeholder" />
        </div>
        <div
          id="post_title"
          class="flex flex-col items-baseline gap-1 py-2 sm:flex-row"
        >
          <div class="text-xl font-semibold">This is a much longer title</div>
          <div class="text-md text-lighter_true_gray">
            Post date: DD/MM/YYYY
          </div>
        </div>
        <div id="post_description" class="text-lg">
          This is a description about this post's content, it is supposed to be
          a summary for people to know what they will be reading.
        </div>
      </a>
    </div>
  </div>
</div>
<Footer />
