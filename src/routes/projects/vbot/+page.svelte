<script>
  import Navbar from "$lib/navbar.svelte";
  import WavesStart from "$lib/waves_start.svelte";
  import Footer from "$lib/footer.svelte";
</script>

<svelte:head>
  <title>/projects/vbot</title>
</svelte:head>

<div class="bg-white">
  <Navbar />
  <WavesStart />
</div>
<div class="init-div px-5">
  <div class="flex flex-col">
    <div class="flex justify-center">
      <div class="text-4xl">Vbot</div>
    </div>
    <div class="flex flex-col items-center justify-center pb-20 sm:px-10">
      <div class="text-2xl">An open-source multipurpose Discord app</div>
      <div class="text-xl font-semibold">
        Everything in this page is still a work-in-progress!
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-10">
    <div class="flex flex-col gap-10 sm:flex-row">
      <div class="flex justify-center sm:w-1/3">
        <div class="rounded-xl bg-dark">
          <img
            src="/vbot/vbotbranding.png"
            alt="vbot branding"
            class="h-56 p-10 drop-shadow-2xl"
          />
        </div>
      </div>
      <div class="sm:w-1/3">
        <div class="flex flex-row justify-center text-xl font-semibold">
          Now rewritten in Discord.JS
        </div>
        <div class="text-lg">
          Vbot was rewritten from the ground up using <a
            href="https://discord.js.org/#/"
            target="_blank"
            rel="noreferrer">Discord.JS</a
          > to have the latest and greatest features and yeah speed vroooom efficiency
          yeeeeeeee, if you haven't noticed yet this is still a WIP and i want to
          see what a long ass marketting paragraph would look like. so far so good,
          right?
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-5 sm:flex-row">
      <div class="sm:w-2/3 sm:pl-32">
        <div
          class="flex flex-row justify-center text-xl font-semibold sm:justify-start"
        >
          Blablabla more marketting crap
        </div>
        <div class="text-lg">
          insert cool thing that isn't available, i literally don't care if you
          like this or not, you can give feedback using <a href="/about#Links"
            >one of these</a
          >, invite V
          <div class="inline-block text-sm">(ery good ro)</div>
          bot to benefit absolutely nothing.
        </div>
      </div>
      <div class="flex justify-center sm:w-1/3 sm:pr-32">
        <a href="../rl/vbot" target="blank">
          <button class="blue-button text-lg">Invite Vbot</button>
        </a>
      </div>
    </div>
  </div>
</div>
<Footer />
