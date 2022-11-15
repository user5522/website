<script>
  import Navbar from "$lib/navbar.svelte";
  import WavesStart from "$lib/waves_start.svelte";
  import Footer from "$lib/footer.svelte";
</script>

<svelte:head>
  <title>/rl</title>
</svelte:head>

<div class="bg-white">
  <Navbar />
  <WavesStart />
</div>
<div class="init-div px-5 pb-20">
  <div class="flex flex-col items-center justify-center pb-20 sm:px-10">
    <div class="text-4xl">Redirecting Links</div>
    <div class="text-xl">All the links that I don't want to keep copying</div>
  </div>

  <div class="flex flex-col items-center gap-5 text-xl">
    <div class="flex">
      <img
        src="/logos/discord.svg"
        class="h-7 items-baseline pr-1"
        alt="discord logo"
      />
      Discord
      <a href="/rl/discord" class="inline-block pl-1">[Link]</a>
    </div>
    <div class="flex">
      <img
        src="/logos/github.svg"
        class="h-7 items-baseline pr-1"
        alt="github logo"
      />
      Github
      <a href="/rl/github" class="inline-block pl-1">[Link]</a>
    </div>
    <div class="flex">
      <img
        src="/logos/reddit.svg"
        class="h-7 items-baseline pr-1"
        alt="reddit logo"
      />
      Reddit
      <a href="/rl/reddit" class="inline-block pl-1">[Link]</a>
    </div>
    <div class="flex">
      <img
        src="/logos/steam.svg"
        class="h-7 items-baseline pr-1"
        alt="steam logo"
      />
      Steam
      <a href="/rl/steam" class="inline-block pl-1">[Link]</a>
    </div>
    <div class="flex">
      <img
        src="/logos/twitter.svg"
        class="h-7 items-baseline pr-1"
        alt="twitter logo"
      />
      Twitter
      <a href="/rl/twitter" class="inline-block pl-1">[Link]</a>
    </div>
    <div class="flex">
      <img
        src="/vbot.svg"
        class="relative top-1 h-5 items-baseline pr-1"
        alt="vbot logo"
      />
      Vbot Invite
      <a href="/rl/vbot" class="inline-block pl-1">[Link]</a>
    </div>
    <div class="flex">
      <img
        src="/vbot.svg"
        class="relative top-1 h-5 items-baseline"
        alt="vbot logo"
      />

      <img
        src="/logos/github.svg"
        class="h-7 items-baseline pr-1"
        alt="github logo"
      />
      Vbot Source Code
      <a href="/rl/vsource" class="inline-block pl-1">[Link]</a>
    </div>
    <div class="flex">
      <img
        src="/logos/xbox.svg"
        class="h-7 items-baseline pr-1"
        alt="xbox logo"
      />
      Xbox
      <a href="/rl/xbox" class="inline-block pl-1">[Link]</a>
    </div>
    <div class="flex">
      <img
        src="/logos/youtube.svg"
        class="h-7 items-baseline pr-1"
        alt="youtube logo"
      />
      Youtube
      <a href="/rl/yt" class="inline-block pl-1">[Link]</a>
    </div>
  </div>
</div>
<Footer />
