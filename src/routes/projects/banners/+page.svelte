<script>
  import Navbar from "/src/components/navbar.svelte";
  import WavesStart from "/src/components/waves_start.svelte";
  import Footer from "/src/components/footer.svelte";
</script>

<svelte:head>
  <title>/projects/banners</title>
</svelte:head>

<div class="bg-white">
  <div class="pb-32">
    <Navbar />
  </div>
  <div><WavesStart /></div>
</div>
<div class="bg-black pt-28">
  <div class="flex flex-col items-center justify-center pb-20">
    <div class="flex flex-row items-baseline">
      <p class="text-4xl">Banners & Logos</p>
    </div>
    <div class="flex flex-row items-center pb-10 justify-center">
      A gallery of all/most of my Banners & Logos
    </div>

    <div class="flex flex-row gap-1 items-center text-3xl pt-10 pb-5">
      <a href="https://crbt.app" target="_blank">CRBT</a> Banners
    </div>
    <div class="gap-5 flex flex-col text-xl font-semibold pl-10 pr-10">
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
    <div class="flex items-center text-3xl pt-10 pb-5">Logos</div>
    <div class="justify-center flex">
      <div
        class="gap-5 justify-center items-center ml-10 mr-10 flex flex-col text-xl font-semibold"
      >
        My epic poggers logo
        <div class="flex bg-dark items-center justify-center rounded-xl ">
          <img alt="My logo" src="/Logo_flat.svg" class="h-44 sm:h-64" />
        </div>
        <div class="flex flex-row">
          <a href="/projects/vbot" class="">Vbot</a>
          <div class="inline-block">'s epic poggers logo</div>
        </div>
        <div class="flex bg-dark items-center justify-center p-10 rounded-xl ">
          <img alt="Vbot Logo" src="/vbot.svg" class="h-28 sm:h-36" />
        </div>
        complex-looking eye
        <div>
          <div
            class="flex bg-dark items-center justify-center p-10 rounded-xl "
          >
            <img alt="Complex Eye" src="/ComplexEye.svg" class="h-44 sm:h-56" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>
