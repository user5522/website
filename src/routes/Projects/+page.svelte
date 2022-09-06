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
<div class="pt-28 bg-black">
  <div class="flex flex-col p-10 items-center justify-center pb-20">
    <div class="flex flex-row">
      <p class="text-4xl">Projects</p>
    </div>
    <div class="flex flex-row gap-1 ">
      <div class="inline-block">
        Some projects I made/working on that I want to share with you
        <img src="/flushed.svg" alt="flushed emote" class="h-7" />
      </div>
    </div>
  </div>
  <div>
    <div id="TwoPosts" class="gap-3 flex sm:flex-row flex-col p-3">
      <div id="post1" class="bg-dark h-auto w-auto rounded-2xl">
        <div class="">
          <img
            src="/placeholder.png"
            alt="placeholder post img"
            class="h-auto w-auto"
          />
        </div>
        <div class="">
          <div class="text-xl font-bold m-5">Placeholder project title</div>
        </div>
        <div class="">
          <div class="text-lg m-5">
            Placeholder project description that is going to be/ supposed to be
            very long, awesome and very discriptive about the
            project/product/design I made, yay!!
          </div>
        </div>
      </div>

      <div id="post1" class="bg-dark h-auto w-auto rounded-2xl">
        <div class="">
          <img
            src="/placeholder.png"
            alt="placeholder post img"
            class="h-auto w-auto"
          />
        </div>
        <div class="">
          <div class="text-xl font-bold m-5">Placeholder project title</div>
        </div>
        <div class="">
          <div class="text-lg m-5">
            Placeholder project description that is going to be/ supposed to be
            very long, awesome and very discriptive about the
            project/product/design I made, yay!!
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>
