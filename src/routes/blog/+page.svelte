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
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-row">
      <p class="text-4xl">Blog</p>
    </div>
    <div>
      <div class="px-10 text-xl">Everything I want to blog about</div>
    </div>
  </div>

  <div class="flex flex-row px-10 py-2">
    <button
      class=" rounded-xl bg-dark p-2 duration-200 hover:scale-105 active:scale-95"
      >Sorted by Latest</button
    >
  </div>

  <div>
    <div class="grid gap-5 px-5 sm:grid-cols-2">
      <a
        href="/blog#placeholder"
        id="placeholder"
        class="rounded-xl bg-dark p-5 text-white duration-200 hover:scale-105 active:scale-95"
      >
        <div class="h-full">
          <div id="post_img" class="flex justify-center sm:h-2/3">
            <img src="/placeholder.png" alt="Placeholder" />
          </div>
          <div class="sm:h-1/3">
            <div
              id="post_title"
              class="flex flex-col items-baseline gap-1 py-2 sm:flex-row"
            >
              <div class="text-xl font-semibold">Placeholder post</div>
              <div class="text-md text-lighter_true_gray">
                Post date: DD/MM/YYYY
              </div>
            </div>
            <div id="post_description" class="text-lg">
              This is a description about this post's content, it is supposed to
              be a summary for people to know what they will be reading.
            </div>
          </div>
        </div>
      </a>

      <a
        href="/blog/initial-release"
        id="initial-release"
        class="rounded-xl bg-dark p-5 text-white duration-200 hover:scale-105 active:scale-95"
      >
        <div class="h-full">
          <div id="post_img" class="flex justify-center sm:h-2/3">
            <img src="/Logo_flat.svg" alt="User5522 logo" />
          </div>
          <div class="sm:h-1/3">
            <div
              id="post_title"
              class="flex flex-col items-baseline gap-1 py-2 sm:flex-row"
            >
              <div class="text-xl font-semibold">Initial release!</div>
              <div class="text-md text-lighter_true_gray">
                Post date: DD/MM/YYYY
              </div>
            </div>
            <div id="post_description" class="text-lg">
              Finally, after lots of work, user5522.tk is now at version 1.0.
              This post talks about everything new and what's (probably)
              upcomming
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
<Footer />
