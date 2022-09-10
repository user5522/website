<script>
  import Navbar from "/src/components/navbar.svelte";
  import WavesStart from "/src/components/waves_start.svelte";
  import Footer from "/src/components/footer.svelte";
  import { onMount } from "svelte";

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
<div class="pt-28 bg-black">
  <div class="flex flex-col items-center justify-center pb-20">
    <div class="flex flex-row items-baseline">
      <p class="ml-16 text-4xl">User5522</p>
      <p class="text-xs">/Username5522</p>
    </div>

    <div class="flex flex-row pb-16 items-baseline">
      <div class="p-1">H, I'm a</div>
      <div id="age" />
      <div class="p-1">years old Tunisian mf & I like learning stuff</div>
    </div>
    <div class="mb-7 text-xl">What I can do:</div>

    <div class="flex flex-col items-center">
      <div>- uhhhhhhhhhhhhh</div>
      <div>- literally nothing for a reasonable amount of time</div>
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

    <div class="mb-7 mt-7 text-xl">What I learned so far:</div>
    <div class="flex flex-col items-center">
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
  <Footer />
</div>
