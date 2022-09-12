<script>
  import Navbar from "/src/components/navbar.svelte";
  import WavesStart from "/src/components/waves_start.svelte";
  import Footer from "../../components/footer.svelte";
</script>

<svelte:head>
  <title>/Projects</title>
</svelte:head>

<div class="bg-white">
  <div class="pb-32">
    <Navbar />
  </div>
  <div><WavesStart /></div>
</div>
<div class="bg-black pt-28">
  <div class="flex flex-col items-center justify-center pb-20">
    <div class="flex flex-row">
      <p class="text-4xl">Projects</p>
    </div>
    <div class="flex flex-row gap-1">
      <div class="pl-10 pr-10">
        Some projects I made/working on that I want to share with you
        <img src="/flushed.svg" alt="flushed emote" class="inline-block h-7" />
      </div>
    </div>
  </div>
  <div>
    <div id="TwoPosts" class="flex flex-col gap-3 p-3 sm:flex-row">
      <a
        class="w-full h-auto text-white duration-200 sm:w-1/2 bg-dark rounded-2xl hover:scale-102 active:scale-95"
        href="/Projects/Vbot"
      >
        <div class="flex justify-center w-full h-56 bg-black pt-14">
          <img src="/Vbot.svg" alt="placeholder post img" class="h-28" />
        </div>
        <div>
          <div class="m-5 text-xl font-bold">Vbot</div>
        </div>
        <div>
          <div class="m-5 text-lg">
            A multi-purpose Discord bot that is built to be fast and responsive
            & easy to use (& all the marketting crap)<br />
            still BETA
          </div>
        </div>
      </a>
      <a
        class="w-full h-auto text-white duration-200 sm:w-1/2 bg-dark rounded-2xl hover:scale-102 active:scale-95"
        href="/Projects/Banners"
      >
        <div class="">
          <img
            src="/Banners/Banners.svg"
            alt="placeholder post img"
            class="w-full h-full rounded-t-2xl"
          />
        </div>
        <div>
          <div class="m-5 text-xl font-bold">Banners & Logos</div>
        </div>
        <div>
          <div class="m-5 text-lg">
            A fair amount of banners that I made for
            <a href="https://crbt.app" target="_blank"> CRBT </a>'s old profiles
            feature & some logos for my stuff
          </div>
        </div>
      </a>
    </div>
  </div>
  <Footer />
</div>
