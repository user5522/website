<script>
  import Navbar from "/src/components/navbar.svelte";
  import WavesStart from "/src/components/waves_start.svelte";
  import Footer from "../../components/footer.svelte";
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
      <div class="px-10">
        Some projects I made/working on that I want to share with you
        <img
          src="/twemojis/flushed.svg"
          alt="flushed emote"
          class="inline-block h-7"
        />
      </div>
    </div>
  </div>
  <div>
    <div id="TwoPosts" class="flex flex-col gap-5 px-5 pb-5 sm:flex-row">
      <a
        class="h-auto w-full rounded-2xl bg-dark text-white duration-200 hover:scale-102 active:scale-95 sm:w-1/2"
        href="/projects/vbot"
      >
        <div class="flex h-56 w-full justify-center bg-black pt-14">
          <img src="/vbot.svg" alt="placeholder post img" class="h-28" />
        </div>
        <div>
          <div class="m-5 text-xl font-bold">Vbot</div>
        </div>
        <div>
          <div class="m-5 text-lg">
            A multi-purpose Discord bot that is built to be fast and responsive
            & easy to use (& all the rest of the marketting crap).<br />
            still BETA
          </div>
        </div>
      </a>
      <a
        class="h-auto w-full rounded-2xl bg-dark text-white duration-200 hover:scale-102 active:scale-95 sm:w-1/2"
        href="/projects/banners"
      >
        <div class="">
          <div class="flex justify-center">
            <img
              src="/banners/banners.png"
              alt="Banners"
              class="rounded-t-2xl"
            />
          </div>
        </div>
        <div>
          <div class="m-5 text-xl font-bold">Banners & Logos</div>
        </div>
        <div>
          <div class="m-5 text-lg">
            A fair amount of banners that I made for CRBT's old profiles feature
            & some logos for my stuff.
          </div>
        </div>
      </a>
    </div>

    <div id="TwoPosts" class="flex flex-col gap-5 px-5 pb-5 sm:flex-row">
      <a
        class="h-auto w-full rounded-2xl bg-dark text-white duration-200 hover:scale-102 active:scale-95 sm:w-1/2"
        href="#placeholder"
      >
        <div class="flex justify-center">
          <img
            src="/placeholder.png"
            alt="placeholder post img"
            class="rounded-t-2xl"
          />
        </div>
        <div>
          <div class="m-5 text-xl font-bold">Placeholder title</div>
        </div>
        <div>
          <div class="m-5 text-lg">
            Placeholder description that is very discriptive about the
            project/creation I made, and give the reader a general idea about
            it.
          </div>
        </div>
      </a>
      <a
        class="h-auto w-full rounded-2xl bg-dark text-white duration-200 hover:scale-102 active:scale-95 sm:w-1/2"
        href="#placeholder"
      >
        <div class="flex justify-center">
          <img
            src="/placeholder.png"
            alt="placeholder post img"
            class="rounded-t-2xl"
          />
        </div>
        <div>
          <div class="m-5 text-xl font-bold">Placeholder title</div>
        </div>
        <div>
          <div class="m-5 text-lg">
            Placeholder description that is very discriptive about the
            project/creation I made, and give the reader a general idea about
            it.
          </div>
        </div>
      </a>
    </div>
  </div>
  <Footer />
</div>
