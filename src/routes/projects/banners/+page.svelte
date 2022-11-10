<script>
  import Navbar from "/src/components/navbar.svelte";
  import WavesStart from "/src/components/waves_start.svelte";
  import Footer from "/src/components/footer.svelte";
</script>

<svelte:head>
  <title>/projects/banners</title>
</svelte:head>

<div class="bg-white">
  <Navbar />
  <WavesStart />
</div>
<div class="init-div">
  <div class="flex flex-col items-center justify-center pb-20">
    <div class="flex flex-row items-baseline">
      <div class="text-4xl">Banners & Logos</div>
    </div>
    <div class="flex flex-row items-center justify-center pb-10">
      A gallery of all/most of my Banners & Logos
    </div>

    <div class="flex flex-row items-center gap-1 pt-10 pb-5 text-3xl">
      <a href="https://crbt.app" target="_blank">CRBT</a> Banners
    </div>
    <div class="flex flex-col gap-5 px-10 text-xl font-semibold">
      Shapes Banner
      <img
        src="/banners/shapes.png"
        alt="shapes banner"
        class="min-h-fit rounded-xl"
      />

      Bubbles Banner
      <img
        src="/banners/bubbles.png"
        alt="bubbles banner"
        class="min-h-fit rounded-xl"
      />
      Color Flow Banner
      <img
        src="/banners/colorflow.png"
        alt="color flow banner"
        class="min-h-fit  rounded-xl"
      />
      Curve Banner - (Remade)
      <img
        src="/banners/curve.png"
        alt="curve banner"
        class="min-h-fit  rounded-xl"
      />
      Wallpaper Banner - (Remade)
      <img
        src="/banners/wallpaper.png"
        alt="wallpaper banner"
        class="min-h-fit  rounded-xl"
      />
    </div>
    <div class="flex items-center pt-10 pb-5 text-3xl">Logos</div>
    <div class="flex flex-col gap-10 sm:flex-row">
      <div class="flex flex-col">
        <div
          class="flex justify-center pb-2 text-xl font-semibold sm:justify-start"
        >
          User5522 Logo
        </div>
        <div class="rounded-xl bg-dark">
          <img src="/Logo_flat.svg" class="h-52" alt="Logo" />
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex justify-center pb-2 text-xl font-semibold sm:justify-start"
        >
          Vbot Logo
        </div>
        <div class="rounded-xl bg-dark">
          <img src="/vbot.svg" class="h-52 p-10" alt="Logo" />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>
