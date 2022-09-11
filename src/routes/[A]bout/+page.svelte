<script>
  import Navbar from "/src/components/navbar.svelte";
  import WavesStart from "/src/components/waves_start.svelte";
  import Footer from "/src/components/footer.svelte";
  import { onMount } from "svelte";
  import Popup from "/src/components/discordTag.svelte";
  import { clickToCopy } from "/src/components/clickToCopy.js";
  import Modal, { bind } from "svelte-simple-modal";
  import CloseButton from "/src/components/closeButton.svelte";
  import { writable } from "svelte/store";
  const modal = writable(null);
  const showModal = () => modal.set(bind(Popup));

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
      <p class="ml-16 text-4xl">User5522</p>
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
          href="https://www.youtube.com/channel/UCVpdDpi-FiqPg9-pqRJZjHQ"
          target="_blank"
        >
          <img src="/youtube.svg" alt="youtube link" class="h-10" />
        </a>
        <Modal
          show={$modal}
          unstyled={false}
          closeButton={CloseButton}
          styleContent={{ backgroundColor: "#121212", borderRadius: "0.75rem" }}
        >
          <button on:click={showModal}>
            <img src="/discord.svg" alt="discord username popup" class="h-10" />
          </button>
        </Modal>

        <a
          href="https://account.xbox.com/en-us/profile?gamertag=Username6736"
          target="_blank"
        >
          <img src="/xbox.svg" alt="xbox link" class="h-7" />
        </a>
      </div>
      <div class="flex flex-row items-center gap-5">
        <a href="https://twitter.com/User_5522" target="_blank">
          <img src="/twitter.svg" alt="twitter link" class="h-8" />
        </a>
        <a href="https://steamcommunity.com/id/username5522/" target="_blank">
          <img src="/steam.svg" alt="steam link" class="h-9" />
        </a>
        <a href="https://github.com/user5522" target="_blank">
          <img src="/github.svg" alt="github link" class="h-10" /></a
        >
      </div>
    </div>
    <div class="flex flex-row gap-1 pt-5">
      <div>email me @</div>

      <div use:clickToCopy class="inline-block">oueslatim268@gmail.com</div>
    </div>
  </div>
  <Footer />
</div>
