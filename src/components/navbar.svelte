<!-- <script>
  import Motion from "svelte-motion/src/motion/MotionSSR.svelte";
  import { onMount } from "svelte";
  
  onMount(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  
    function scrollFunction() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
      } else {
      }
    }
  });
  let i = 45;
</script> -->

<div
  class="fixed top-0 z-50 p-3 lg overflow-auto w-full flex flex-col justify-center align-middle"
>
  <nav
    id="navbar"
    class="flex flex-row items-center sm:p-5 p-4 bg-dark rounded-xl  shadow-lg"
  >
    <div
      class="flex flex-row items-center sm:gap-2 gap-1 duration-300"
      id="logo"
    >
      <!-- <Motion animate={{ rotate: i }} transition={{ duration: 0.5 }} let:motion> 
      <button on:click={() => (i += 90)}>
      -->
      <img
        src="/Logo_flat.svg"
        class="items-center sm:h-10 h-9 rounded-full bg-dark_light"
        alt="logo"
      />
      <!--
              </button
        >
         </Motion> -->

      <a href="/" class="text-white">
        <button
          id="logo_text"
          class="sm:p-3 p-2 sm:text-xl text-base font-semibold duration-200 rounded-lg hover:bg-dark_light hover:scale-110 active:scale-90"
          alt="logo"
        >
          User5522
        </button>
      </a>
    </div>
    <div class="absolute right-10">
      <a href="/Projects" class="text-white">
        <button
          class="sm:p-3 p-2 hover:scale-110 sm:text-xl text-base active:scale-90 duration-200 hover:bg-dark_light rounded-lg"
        >
          Projects
        </button>
      </a>
      <a href="/About" class="text-white">
        <button
          class="sm:p-3 p-2 hover:scale-110 sm:text-xl text-base active:scale-90 duration-200 hover:bg-dark_light rounded-lg"
        >
          About
        </button>
      </a>
    </div>
  </nav>
</div>
