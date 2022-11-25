<script>
  import Navbar from "$lib/navbar.svelte";
  import WavesStart from "$lib/waves_start.svelte";
  import Footer from "$lib/footer.svelte";
</script>

<!-- <div class="flex flex-col items-center pt-10 text-xl">
  credits aren't ready for now. Please come back later
</div>
<div class="flex justify-center py-10">
  <a href="/">
    <button class="blue-button">Back to Homepage</button>
  </a>
</div> -->

<svelte:head>
  <title>/credits</title>
</svelte:head>

<div class="bg-white">
  <Navbar />
  <WavesStart />
</div>
<div class="init-div px-5">
  <div class="flex flex-col items-center justify-center gap-5">
    <div class="text-4xl">Credits</div>
    <div class="text-xl">A place to say thank you</div>
  </div>
  <div class="mx-auto max-w-6xl gap-16 text-xl">
    <div class="text-2xl">I want to thank:</div>
    <div>
      - <strong
        >All of my friends, family & everyone who had an influence on me (in a
        good way)</strong
      >
    </div>
    <div>
      - <strong>The people behind Sveltekit</strong>, for making a great, fast &
      reliable javascript framework.
    </div>
    <div>
      - <a href="https://clembs.com" target="_blank" rel="noreferrer"
        ><strong>Clembs</strong></a
      >, idk I'm pretty sure he inspired me & told me about SvelteKit
    </div>
    <div>
      - <strong><a href="/">Myself</a></strong>, because damn brother, this took
      forever to make.
    </div>
    <div>
      - All the contributors: <strong>me</strong>, <strong>myself</strong> &
      <strong>I</strong>.
    </div>
    <div>
      - <strong>FontAwesome</strong>, for their huge collection of free icons
    </div>
  </div>
</div>
<Footer />
