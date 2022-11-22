<script>
  import Navbar from "$lib/navbar.svelte";
  import WavesStart from "$lib/waves_start.svelte";
  import Footer from "$lib/footer.svelte";
  import FlushedEmoji from "$lib/emojis/flushed-emoji.svelte";
</script>

<svelte:head>
  <title>/projects</title>
</svelte:head>

<div class="bg-white">
  <Navbar />
  <WavesStart />
</div>
<div class="init-div">
  <div class="flex flex-col items-center justify-center pb-20">
    <div class="flex flex-row">
      <p class="text-4xl">Projects</p>
    </div>
    <div class="flex flex-row gap-1">
      <div class="px-10 text-xl">
        Some projects I made/working on that I want to share with you
        <FlushedEmoji />
      </div>
    </div>
  </div>
  <div>
    <div id="TwoPosts" class="flex flex-col gap-5 px-5 pb-5 sm:flex-row">
      <a
        class="h-auto w-full rounded-2xl bg-dark text-white duration-200 hover:scale-102 active:scale-95 sm:w-1/2"
        href="/projects/vbot"
      >
        <div
          class="flex h-56 w-full flex-row items-center justify-center bg-black pt-14"
        >
          <img
            src="/vbot.svg"
            alt="vbot project logo"
            class="h-20 sm:h-28"
            id="post_img"
          />
        </div>
        <div class="flex flex-row items-baseline">
          <div id="post_title" class="pl-5 pt-3 text-xl font-bold">Vbot</div>
        </div>
        <div>
          <div id="post_description" class="px-5 py-3 text-lg">
            A multi-purpose Discord bot that is built to be fast, responsive &
            easy to use (& all the rest of the marketting crap).<br />
            [still in it's ALPHA stage]
          </div>
        </div>
      </a>
      <a
        class="h-auto w-full rounded-2xl bg-dark text-white duration-200 hover:scale-102 active:scale-95 sm:w-1/2"
        href="/projects/banners"
      >
        <div class="flex w-full items-center justify-center">
          <img
            src="/banners/banners.png"
            alt="banners"
            class="rounded-t-xl"
            id="post_img"
          />
        </div>
        <div class="flex flex-row items-baseline">
          <div id="post_title" class="pl-5 pt-5 text-xl font-bold">
            Banners & Logos
          </div>
        </div>
        <div>
          <div id="post_description" class="px-5 py-3 text-lg">
            A fair amount of banners that I made for CRBT's old profiles feature
            & some logos for my other projects.
          </div>
        </div>
      </a>
    </div>

    <div id="TwoPosts" class="flex flex-col gap-5 px-5 pb-5 sm:flex-row">
      <a
        class="h-auto w-full rounded-2xl bg-dark text-white duration-200 hover:scale-102 active:scale-95 sm:w-1/2"
        href="#placeholder1"
        id="placeholder1"
      >
        <div class="flex w-full items-center justify-center">
          <img
            src="/placeholder.png"
            alt="banners"
            class="rounded-t-xl"
            id="post_img"
          />
        </div>
        <div class="flex flex-row items-baseline">
          <div id="post_title" class="pl-5 pt-5 text-xl font-bold">
            Placeholder title
          </div>
        </div>
        <div>
          <div id="post_description" class="px-5 py-3 text-lg">
            Placeholder description that is very discriptive about the
            project/creation I made, and gives the reader a general idea about
            it.
          </div>
        </div>
      </a>
      <a
        class="h-auto w-full rounded-2xl bg-dark text-white duration-200 hover:scale-102 active:scale-95 sm:w-1/2"
        href="#placeholder2"
        id="placeholder2"
      >
        <div class="flex w-full items-center justify-center">
          <img
            src="/placeholder.png"
            alt="banners"
            class="rounded-t-xl"
            id="post_img"
          />
        </div>
        <div class="flex flex-row items-baseline">
          <div id="post_title" class="pl-5 pt-5 text-xl font-bold">
            Placeholder title
          </div>
        </div>
        <div>
          <div id="post_description" class="px-5 py-3 text-lg">
            Placeholder description that is very discriptive about the
            project/creation I made, and gives the reader a general idea about
            it.
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
<Footer />
