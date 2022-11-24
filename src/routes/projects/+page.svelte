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
  <div class="flex flex-col items-center justify-center">
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
  <div class="grid gap-5 p-5 sm:grid-cols-2">
    <a
      class="rounded-2xl bg-dark text-white duration-200 hover:scale-102 active:scale-95"
      href="/projects/vbot"
    >
      <div
        class="flex h-56 w-full flex-row items-center justify-center bg-black pt-14"
      >
        <img src="/vbot.svg" alt="vbot project logo" class="h-20 sm:h-28" />
      </div>
      <div class="flex flex-row items-baseline">
        <div id="project_title" class="pl-5 pt-3 text-xl font-bold">Vbot</div>
      </div>
      <div>
        <div id="project_description" class="px-5 py-3 text-lg">
          A multi-purpose Discord bot that is built to be fast, responsive &
          easy to use (& all the rest of the marketting crap).<br />
          [still in it's ALPHA stage]
        </div>
      </div>
    </a>
    <a
      class="h-auto w-full rounded-2xl bg-dark text-white duration-200 hover:scale-102 active:scale-95"
      href="/projects/banners"
    >
      <div class="h-full">
        <div class="sm:h-2/3">
          <div class="flex w-full items-center justify-center">
            <img
              src="/banners/banners.png"
              alt="banners"
              class="rounded-t-xl"
            />
          </div>
        </div>
        <div class="sm:h-1/3">
          <div class="flex flex-row items-baseline">
            <div id="project_title" class="pl-5 pt-5 text-xl font-bold">
              Banners & Logos
            </div>
          </div>
          <div>
            <div id="project_description" class="px-5 py-3 text-lg">
              A good amount of banners that I made for CRBT's old profiles
              feature & some logos for my other projects.
            </div>
          </div>
        </div>
      </div>
    </a>
    <a
      href="#SquareGame"
      id="SquareGame"
      class="rounded-xl bg-dark p-5 text-white duration-200 hover:scale-105 active:scale-95"
    >
      <div class="h-full">
        <div class="flex justify-center sm:h-2/3">
          <img src="/placeholder.png" alt="SquareGame Placeholder" />
        </div>
        <div class="sm:h-1/3">
          <div
            id="project_title"
            class="flex flex-col items-baseline gap-1 py-2 text-xl font-semibold sm:flex-row"
          >
            SquareGame
          </div>
          <div id="project_description" class="text-lg">
            A Unity 2D game, about, well.. a 2D square that can move and goes
            through levels..?
          </div>
        </div>
      </div>
    </a>
    <a
      class="h-auto w-full rounded-2xl bg-dark text-white duration-200 hover:scale-102 active:scale-95"
      href="#Snak"
      id="Snak"
    >
      <div class="flex w-full items-center justify-center">
        <img src="/placeholder.png" alt="banners" class="rounded-t-xl" />
      </div>
      <div class="flex flex-row items-baseline">
        <div id="project_title" class="pl-5 pt-5 text-xl font-bold">Snak</div>
      </div>
      <div>
        <div id="project_description" class="px-5 py-3 text-lg">
          A, and believe me when I say it, buggy trash snake clone made in Rust
          with the Bevy game engine.
        </div>
      </div>
    </a>
  </div>
</div>
<Footer />
