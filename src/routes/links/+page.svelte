<script>
  import Navbar from "$lib/navbar.svelte";
  import WavesStart from "$lib/waves_start.svelte";
  import Footer from "$lib/footer.svelte";
</script>

<svelte:head>
  <title>/links</title>
</svelte:head>

<div class="bg-white">
  <Navbar />
  <WavesStart />
</div>
<div class="init-div px-5 pb-20">
  <div class="flex flex-col items-center justify-center pb-20 sm:px-10">
    <div class="text-4xl">Redirecting links</div>
    <div class="text-xl">All the links that I couldn't bother noting</div>
  </div>

  <div class="flex flex-col items-center gap-5 text-xl">
    <div class="pr-1">
      Discord <a href="/links/discord" class=" inline-block">[Link]</a>
    </div>
    <div class="pr-1">
      Github <a href="/links/github" class=" inline-block">[Link]</a>
    </div>
    <div class="pr-1">
      Reddit <a href="/links/reddit" class=" inline-block">[Link]</a>
    </div>
    <div class="pr-1">
      Steam <a href="/links/steam" class=" inline-block">[Link]</a>
    </div>
    <div class="pr-1">
      Twitter <a href="/links/twitter" class=" inline-block">[Link]</a>
    </div>
    <div class="pr-1">
      Vbot <a href="/links/vbot" class=" inline-block">[Link]</a>
    </div>
    <div class="pr-1">
      Xbox <a href="/links/xbox" class=" inline-block">[Link]</a>
    </div>
    <div class="pr-1">
      Youtube <a href="/links/yt" class=" inline-block">[Link]</a>
    </div>
  </div>
</div>
<Footer />
