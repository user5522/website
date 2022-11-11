<script>
  import Navbar from "/src/components/navbar.svelte";
  import WavesStart from "/src/components/waves_start.svelte";
  import Footer from "/src/components/footer.svelte";
  import { clickToCopy } from "/src/components/clickToCopy.js";
  import { onMount } from "svelte";

  onMount(() => {
    function age() {
      var t = new Date() - new Date(2006, 11, 24);
      t /= 1000 * 60 * 60 * 24 * 365;
      document.getElementById("age").innerHTML =
        "<span>" + Math.floor(t) + "</span>." + (t % 1).toFixed(3).substr(2);

      document.getElementById("perage").innerHTML =
        "<span>" + Math.floor(t) + "</span>." + (t % 1).toFixed(2).substr(2);
    }

    setInterval(age, 300);
  });
</script>

<svelte:head>
  <title>/about</title>
</svelte:head>

<div class="bg-white">
  <Navbar />
  <WavesStart />
</div>
<div class="init-div">
  <div class="flex flex-col items-center justify-center pb-20">
    <div class="flex flex-row items-baseline">
      <p class="text-4xl">User5522</p>
      <p class="text-base">/Username5522</p>
    </div>

    <div class="px-10 pb-16">
      <div class="text-xl">
        Hi <img
          src="/twemojis/wavinghand.svg"
          alt="waving hand sign emote"
          class="inline-block h-7"
        />,
      </div>
      <div class="text-xl">
        I'm Oueslati, a
        <div id="age" class="inline-block" />
        year old<a
          href="https://www.google.com/search?q=Tunisia"
          target="_blank"
          class="px-1">Tunisian</a
        > guy & I like coding
      </div>
    </div>

    <div class="text-2xl">What I like doing:</div>
    <div class="flex flex-col items-center py-5">
      <div class="text-lg">
        <div>- Uhhhhhhhhhhhhh</div>
        <div>- Literally nothing (for a fair amount of time)</div>
        <div>- Breathing air (abnormal capability)</div>
        <div>- Learning stuff</div>
        <div>- Making useless lists</div>
      </div>
    </div>

    <div class="text-2xl">What I learnt so far:</div>
    <div class="flex flex-col items-center py-5">
      <div class="text-lg">
        <div>- HTML, CSS & Javascript</div>
        <div>- Svelte, I think</div>
        <div>- React, a little</div>
        <div>- React Native, also a little</div>
        <div>- Rust, very basic knowledge</div>
        <div>- How to be funny (I'm lying)</div>
        <div>
          - Making logos, I think (maybe) <a href="/projects/banners#Logos"
            >(did u check these ?)</a
          >
        </div>
      </div>
    </div>

    <div id="Links" class="my-5 text-2xl">Links</div>
    <div class="flex flex-col items-center gap-5">
      <div class="flex flex-row items-center gap-5">
        <a
          href="https://youtube.com/@user5522"
          class="duration-200 hover:scale-110 active:scale-90"
          target="blank"
        >
          <img src="/logos/youtube.svg" alt="youtube link" class="h-10" />
        </a>
        <a
          href="https://discord.com/users/619210431809978368"
          class="duration-200 hover:scale-110 active:scale-90"
          target="blank"
        >
          <img src="/logos/discord.svg" alt="discord link" class="h-10" />
        </a>
        <a
          href="https://account.xbox.com/en-us/profile?gamertag=Username6736"
          class="duration-200 hover:scale-110 active:scale-90"
          target="blank"
        >
          <img src="/logos/xbox.svg" alt="xbox link" class="h-10" />
        </a>
      </div>
      <div class="flex flex-row items-center gap-5">
        <a
          href="https://twitter.com/User_5522"
          class="duration-200 hover:scale-110 active:scale-90"
          target="blank"
        >
          <img src="/logos/twitter.svg" alt="twitter link" class="h-10" />
        </a>
        <a
          href="https://steamcommunity.com/id/username5522/"
          class="duration-200 hover:scale-110 active:scale-90"
          target="blank"
        >
          <img src="/logos/steam.svg" alt="steam link" class="h-10" />
        </a>
        <a
          href="https://github.com/user5522"
          class="duration-200 hover:scale-110 active:scale-90"
          target="blank"
        >
          <img src="/logos/github.svg" alt="github link" class="h-10" />
        </a>
        <a
          href="https://reddit.com/user/epicgamerman2"
          class="duration-200 hover:scale-110 active:scale-90"
          target="blank"
        >
          <img src="/logos/reddit.svg" alt="reddit link" class="h-10" /></a
        >
      </div>
    </div>

    <div class="pt-10">
      <div class="px-10">
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
  <Footer />
</div>
