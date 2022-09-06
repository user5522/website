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
      document.getElementById("age").innerHTML = year.toFixed(10);
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
      <div class="p-1">H(i/ello), I'm a</div>
      <div id="age" />
      <div class="p-1">years old Tunisian mf</div>
    </div>
    <div>What I can do:</div>

    <div class="flex flex-col items-baseline">
      <div>- uhhhhhhhhhhhhh</div>
      <div>- uhhhhhhhhhhhhh</div>
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
    </div>
  </div>
  <Footer />
</div>
