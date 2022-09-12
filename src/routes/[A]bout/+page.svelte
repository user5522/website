<script>
  import Navbar from "/src/components/navbar.svelte";
  import WavesStart from "/src/components/waves_start.svelte";
  import Footer from "/src/components/footer.svelte";
  import { onMount } from "svelte";
  import { clickToCopy } from "/src/components/clickToCopy.js";

  onMount(() => {
    var start = new Date("11/24/2006 11:50 AM"); //fucking americans man
    var timer;

    function age() {
      var now = new Date();
      var age = now.getTime() - start.getTime();
      var year = age / 31556926000;
      document.getElementById("age").innerHTML = year.toFixed(3);
      document.getElementById("perage").innerHTML = year.toFixed(1);
    }

    timer = setInterval(age, 1);
  });
</script>

<svelte:head>
  <title>/About</title>
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
      <p class="text-4xl">User5522</p>
      <p class="text-xs">/Username5522</p>
    </div>

    <div class="flex flex-row items-baseline pb-16">
      <div class="p-1">H, I'm a</div>
      <div id="age" />
      <div class="p-1">years old Tunisian mf & I like learning stuff</div>
    </div>

    <div class="text-xl mb-7">What I can do:</div>
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
        <div class="flex flex-row items-baseline">
          <div>- get 0 bitches/</div>
          <div id="perage" />
          <div class="pl-1">years</div>
        </div>
        <div>- make useless lists</div>
      </div>
    </div>

    <div class="text-xl mb-7 mt-7">What I learned so far:</div>
    <div class="flex flex-col items-center">
      <div>
        <div>- uhhhhhhhhhhhhh</div>
        <div>- html, css & js</div>
        <div>- svelte, i think</div>
        <div>- React, a fair amount</div>
        <div>- React native, also a fair amount</div>
        <div>- Rust, basic knowledge</div>
        <div>- How to win an epic Amongus game (safe) [no virus]</div>
        <div>- Making logos, i think (maybe) (possible) (perhaps)</div>
      </div>
    </div>

    <div class="text-3xl mb-7 mt-7">Links</div>
    <div class="flex flex-col items-center gap-5">
      <div class="flex flex-row items-center gap-5">
        <a
          href="https://youtube.com/channel/UCVpdDpi-FiqPg9-pqRJZjHQ"
          target="_blank"
        >
          <img src="/Youtube.svg" alt="youtube link" class="h-10" />
        </a>
        <a href="https://discord.com/users/619210431809978368" target="_blank">
          <img src="Discord.svg" alt="discord link" class="h-10" />
        </a>
        <a
          href="https://account.xbox.com/en-us/profile?gamertag=Username6736"
          target="_blank"
        >
          <img src="/Xbox.svg" alt="xbox link" class="h-9" />
        </a>
      </div>
      <div class="flex flex-row items-center gap-5">
        <a href="https://twitter.com/User_5522" target="_blank">
          <img src="/Twitter.svg" alt="twitter link" class="h-9" />
        </a>
        <a href="https://steamcommunity.com/id/username5522/" target="_blank">
          <img src="/Steam.svg" alt="steam link" class="h-10" />
        </a>
        <a href="https://github.com/user5522" target="_blank">
          <img src="/Github.svg" alt="github link" class="h-12" />
        </a>
      </div>
    </div>
    <div class="flex flex-row gap-1 pt-5 items-baseline">
      <div>for any suggestions/reports email me @</div>
      <div
        use:clickToCopy
        class="inline-block bg-dark p-1 duration-200 rounded-lg hover:scale-105 active:scale-95"
      >
        oueslatim268@gmail.com
      </div>
    </div>
  </div>
  <Footer />
</div>
