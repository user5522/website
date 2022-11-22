<script>
  import Navbar from "$lib/navbar.svelte";
  import WavesStart from "$lib/waves_start.svelte";
  import Footer from "$lib/footer.svelte";
  import { clickToCopy } from "$lib/clickToCopy.js";
  import AgeCounter from "$lib/ageCounter.svelte";
  import WaveEmoji from "../../lib/emojis/wave-emoji.svelte";
  import Heart from "../../lib/emojis/heart.svelte";
</script>

<svelte:head>
  <title>/about</title>
</svelte:head>

<div class="bg-white">
  <Navbar />
  <WavesStart />
</div>
<div class="init-div px-5">
  <div class="flex flex-col items-center justify-center gap-5">
    <p class="text-4xl">About</p>

    <div>
      <div class="text-xl">
        Hi I'm Oueslati <WaveEmoji />,
      </div>
      <div class="text-xl">
        a <strong><AgeCounter /></strong>
        year old
        <a
          href="https://google.com/search?q=north+tunisia"
          target="_blank"
          rel="noreferrer">north Tunisia</a
        >
        based developer.
      </div>
    </div>
    <div class="flex flex-col justify-center gap-5 sm:flex-row">
      <div id="whatilike" class="rounded-xl bg-dark">
        <div class="flex flex-col p-5">
          <div class="text-center text-2xl">I Like:</div>
          <div class="flex flex-col py-5">
            <ul class="text-lg">
              <li>- Drinking water</li>
              <li>- Breathing air</li>
              <li>- Eating food</li>
              <li>- Making uselessly long lists</li>
              <li>- Coding & learning</li>
              <li>- You (probably)</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="skills" class="rounded-xl bg-dark">
        <div class="flex flex-col p-5">
          <div class="text-center text-2xl">Skills:</div>
          <div class="flex flex-col py-5">
            <ul class="text-lg">
              <li>- Svelte (<strong>7/10</strong> I <Heart /> svelte)</li>
              <li>- React (<strong>4/10</strong> no so good)</li>
              <li>- Rust (<strong>3/10</strong> yuh)</li>
              <li>- HTML & CSS (<strong>8/10</strong> pretty good)</li>
              <li>- Javascript (<strong>6/10</strong> I can do stuff)</li>
              <li>
                - Python (<strong>3/10</strong> never took the time to learn)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="Links" class="my-5 text-2xl">Links</div>
    <div class="flex flex-col items-center gap-5">
      <div class="flex flex-row items-center gap-5">
        <a
          href="/rl/yt"
          class="duration-200 hover:scale-110 active:scale-90"
          target="blank"
        >
          <img src="/logos/youtube.svg" alt="youtube link" class="h-10" />
        </a>
        <a
          href="/rl/discord"
          class="duration-200 hover:scale-110 active:scale-90"
          target="blank"
        >
          <img src="/logos/discord.svg" alt="discord link" class="h-10" />
        </a>
        <a
          href="/rl/github"
          class="duration-200 hover:scale-110 active:scale-90"
          target="blank"
        >
          <img src="/logos/github.svg" alt="github link" class="h-10" />
        </a>
      </div>
      <div class="flex flex-row items-center gap-5">
        <a
          href="/rl/twitter"
          class="duration-200 hover:scale-110 active:scale-90"
          target="blank"
        >
          <img src="/logos/twitter.svg" alt="twitter link" class="h-10" />
        </a>
        <a
          href="/rl/xbox"
          class="duration-200 hover:scale-110 active:scale-90"
          target="blank"
        >
          <img src="/logos/xbox.svg" alt="xbox link" class="h-10" />
        </a>
        <a
          href="/rl/steam"
          class="duration-200 hover:scale-110 active:scale-90"
          target="blank"
        >
          <img src="logos/steam.svg" alt="steam link" class="h-10" />
        </a>
        <a
          href="/rl/reddit"
          class="duration-200 hover:scale-110 active:scale-90"
          target="blank"
        >
          <img src="/logos/reddit.svg" alt="reddit link" class="h-10" /></a
        >
      </div>
    </div>

    <div class="pt-10">
      <div class="px-5">
        for any suggestions/reports email me @
        <div
          use:clickToCopy
          class="inline-block rounded-lg bg-dark p-1 duration-200 hover:scale-105 active:scale-95"
        >
          oueslatim268@gmail.com
        </div>
      </div>
    </div>
  </div>
</div>
<Footer />
