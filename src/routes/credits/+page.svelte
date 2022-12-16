<script>
  import Navbar from "$lib/navbar.svelte";
  import WavesStart from "$lib/waves_start.svelte";
  import Footer from "$lib/footer.svelte";
  import Heart from "$lib/emojis/heart.svelte";
  import Flushed from "$lib/emojis/flushed.svelte";
  import { tooltip } from "$lib/tooltip.js";
</script>

<svelte:head>
  <title>/credits</title>
</svelte:head>

<div class="bg-white">
  <Navbar />
  <WavesStart />
</div>
<div class="init-div px-5">
  <div class="flex flex-col items-center justify-center">
    <div class="text-4xl">Credits</div>
    <div class="text-xl">A place to say thank you <Heart /></div>
  </div>
  <div class="flex flex-col items-center justify-center gap-4 text-xl">
    <div>
      This website wouldn't've been as good as it is without these awesome
      people:
    </div>
    <div class="flex flex-col gap-5">
      <div class="pl-8 sm:pl-12">
        <div
          use:tooltip={{ text: "For having a good influence on me" }}
          class="flex w-fit flex-col items-center justify-center rounded-full bg-dark p-4 duration-200 hover:scale-102 active:scale-95"
        >
          <div>My family</div>
          <div>& friends</div>
        </div>
      </div>
      <div class="pl-28 sm:pl-108">
        <div
          use:tooltip={{
            text: "For creating a great framework",
          }}
          class="flex w-fit flex-col items-center justify-center rounded-full bg-dark p-4 duration-200 hover:scale-102 active:scale-95"
        >
          <div>SvelteKit</div>
          <div>Devs</div>
        </div>
      </div>
      <div class="pl-16 sm:pl-32">
        <div
          use:tooltip={{
            text: "For the placeholder image & all the tips",
          }}
          class="flex w-fit flex-col items-center justify-center rounded-full bg-dark p-4 duration-200 hover:scale-102 active:scale-95"
        >
          <div>Clembs</div>
        </div>
      </div>
      <div class="pl-2 sm:pl-80">
        <div
          use:tooltip={{
            text: "For their huge free collection of icons",
          }}
          class="flex w-fit flex-col items-center justify-center rounded-full bg-dark p-4 duration-200 hover:scale-102 active:scale-95"
        >
          <div>FontAwesome</div>
        </div>
      </div>
      <div class="pl-40 sm:pl-36">
        <div
          use:tooltip={{
            text: "For their free hosting",
          }}
          class="flex w-fit flex-col items-center justify-center rounded-full bg-dark p-4 duration-200 hover:scale-102 active:scale-95"
        >
          <div>Vercel</div>
        </div>
      </div>
      <div class="self-center">
        <div
          use:tooltip={{ text: "For visiting my website" }}
          class="flex w-fit flex-col items-center justify-center rounded-full bg-dark p-4 duration-200 hover:scale-102 active:scale-95"
        >
          <div>You <Flushed /></div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center">
    <div class="text-xl">
      Made with <Heart /> by User5522.
    </div>
  </div>
</div>
<Footer />
