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
  class="fixed top-0 z-50 p-3.5 overflow-auto w-full flex flex-col justify-center align-middle"
>
  <nav
    id="navbar"
    class="flex flex-row items-center p-4 bg-dark rounded-xl shadow-lg"
  >
    <div
      class="flex flex-row items-center sm:gap-2 gap-1 duration-300"
      id="logo"
    >
      <img
        src="/Logo_flat.svg"
        class="items-center sm:h-10 h-9 rounded-full bg-dark_light"
        alt="logo"
      />

      <a href="/" class="text-white">
        <button
          id="logo_text"
          class="p-2 sm:text-lg text-base font-semibold duration-200 rounded-lg hover:bg-dark_light hover:scale-110 active:scale-90"
          alt="logo"
        >
          User5522
        </button>
      </a>
    </div>
    <div class="absolute right-10">
      <a href="/projects" class="text-white">
        <button
          class="p-2 hover:scale-110 sm:text-lg text-base active:scale-90 duration-200 hover:bg-dark_light rounded-lg"
        >
          Projects
        </button>
      </a>
      <a href="/about" class="text-white">
        <button
          class="p-2 hover:scale-110 sm:text-lg text-base active:scale-90 duration-200 hover:bg-dark_light rounded-lg"
        >
          About
        </button>
      </a>
    </div>
  </nav>
</div>
