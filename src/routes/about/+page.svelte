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
      <p class="text-xs">/Username5522</p>
    </div>

    <div class="px-10 pb-16">
      <div class="text-xl">
        H, I'm a <div id="age" class="inline-block" />
        years old Tunisian dude & I like learning stuff
      </div>
    </div>

    <div class="mb-7 text-xl">What I can do:</div>
    <div class="flex flex-col items-center">
      <div>
        <div>- uhhhhhhhhhhhhh</div>
        <div>- literally nothing (for a reasonable amount of time)</div>
        <div>- breath air (abnormal capability)</div>
        <div>
          - Speak:
          <div class="pl-5">- [good] Arabic</div>
          <div class="pl-5">- [enough] English</div>
          <div class="pl-5">- [eh] French</div>
        </div>
        <div class="flex flex-row">
          <div>
            - get 0 bitches/ <div id="perage" class="inline-block" />
            years
          </div>
        </div>
        <div>- make useless lists</div>
      </div>
    </div>

    <div class="mb-7 mt-7 text-xl">What I learned so far:</div>
    <div class="flex flex-col items-center">
      <div>
        <div>- html, css & js</div>
        <div>- svelte, i think</div>
        <div>- React, a fair amount</div>
        <div>- React native, also a fair amount</div>
        <div>- Rust, basic knowledge</div>
        <div>- How to win an epic Amongus game (safe) [no virus]</div>
        <div>- Making logos, i think (maybe) (possible) (perhaps)</div>
      </div>
    </div>

    <div id="Links" class="mb-7 mt-7 text-3xl">Links</div>
    <div class="flex flex-col items-center gap-5">
      <div class="flex flex-row items-center gap-5">
        <a href="https://youtube.com/@user5522" target="_blank">
          <img src="/logos/youtube.svg" alt="youtube link" class="h-10" />
        </a>
        <a href="https://discord.com/users/619210431809978368" target="_blank">
          <img src="/logos/discord.svg" alt="discord link" class="h-10" />
        </a>
        <a
          href="https://account.xbox.com/en-us/profile?gamertag=Username6736"
          target="_blank"
        >
          <img src="/logos/xbox.svg" alt="xbox link" class="h-9" />
        </a>
      </div>
      <div class="flex flex-row items-center gap-5">
        <a href="https://twitter.com/User_5522" target="_blank">
          <img src="/logos/twitter.svg" alt="twitter link" class="h-9" />
        </a>
        <a href="https://steamcommunity.com/id/username5522/" target="_blank">
          <img src="/logos/steam.svg" alt="steam link" class="h-10" />
        </a>
        <a href="https://github.com/user5522" target="_blank">
          <img src="/logos/github.svg" alt="github link" class="h-12" />
        </a>
        <a href="https://reddit.com/user/epicgamerman2" target="_blank">
          <img src="/logos/reddit.svg" alt="reddit link" class="h-12" /></a
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
