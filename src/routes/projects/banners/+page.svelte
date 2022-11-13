<script>
  import Navbar from "$lib/navbar.svelte";
  import WavesStart from "$lib/waves_start.svelte";
  import Footer from "$lib/footer.svelte";
</script>

<svelte:head>
  <title>/projects/banners</title>
</svelte:head>

<div class="bg-white">
  <Navbar />
  <WavesStart />
</div>
<div class="init-div">
  <div class="flex flex-col items-center justify-center px-10 pb-20">
    <div class="flex flex-row items-baseline">
      <div class="text-4xl">Banners & Logos</div>
    </div>
    <div class="flex flex-row items-center justify-center pb-10">
      A gallery of all/most of my Banners & Logos
    </div>

    <div class="flex flex-row items-center gap-1 pt-10 pb-5 text-3xl">
      <a href="https://crbt.app" target="_blank" rel="noreferrer">CRBT</a> Banners
    </div>
    <div class="flex flex-col gap-10">
      <div class="flex flex-col gap-10 sm:flex-row">
        <div>
          <div
            class="flex justify-center pb-2 text-xl font-semibold sm:justify-start"
          >
            Colorflow Banner
          </div>
          <img src="/banners/colorflow.png" class="rounded-xl" alt="test" />
        </div>
        <div>
          <div
            class="flex justify-center pb-2 text-xl font-semibold sm:justify-start"
          >
            Bubbles Banner
          </div>
          <img src="/banners/bubbles.png" class="rounded-xl" alt="test" />
        </div>
      </div>
      <div class="flex flex-col gap-10 sm:flex-row">
        <div>
          <div
            class="flex justify-center pb-2 text-xl font-semibold sm:justify-start"
          >
            Curve Banner [remade]
          </div>
          <img src="/banners/curve.png" class="rounded-xl" alt="test" />
        </div>
        <div>
          <div
            class="flex justify-center pb-2 text-xl font-semibold sm:justify-start"
          >
            Shapes Banner
          </div>
          <img src="/banners/shapes.png" class="rounded-xl" alt="test" />
        </div>
      </div>
      <div class="flex flex-col gap-10 sm:flex-row">
        <div>
          <div
            class="flex justify-center pb-2 text-xl font-semibold sm:justify-start"
          >
            Wallpaper Banner
          </div>
          <img src="/banners/wallpaper.png" class="rounded-xl" alt="test" />
        </div>
        <div>
          <div
            class="flex justify-center pb-2 text-xl font-semibold sm:justify-start"
          >
            More banners soon.
          </div>
          <img src="/banners/banners.png" class="rounded-xl" alt="test" />
        </div>
      </div>
    </div>

    <div id="Logos" class="flex items-center pt-10 pb-5 text-3xl">Logos</div>
    <div class="flex flex-col gap-10 sm:flex-row">
      <div class="flex flex-col">
        <div
          class="flex justify-center pb-2 text-xl font-semibold sm:justify-start"
        >
          User5522 Logo
        </div>
        <div class="rounded-xl bg-dark">
          <img src="/Logo_flat.svg" class="mh-40 w-full sm:h-52" alt="Logo" />
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex justify-center pb-2 text-xl font-semibold sm:justify-start"
        >
          Vbot Logo
        </div>
        <div class="rounded-xl bg-dark">
          <img
            src="/vbot.svg"
            class="h-40 w-full p-8 sm:h-52 sm:p-10"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>
