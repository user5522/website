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

<div class="pb-32">
  <div
    class="fixed top-0 z-50 flex w-full flex-col justify-center overflow-auto p-3.5 align-middle"
  >
    <nav
      id="navbar"
      class="flex flex-row items-center rounded-xl bg-dark p-4 shadow-lg"
    >
      <div
        class="flex flex-row items-center gap-1 duration-300 sm:gap-2"
        id="logo"
      >
        <img
          src="/Logo_flat.svg"
          class="h-9 items-center rounded-full bg-dark_light sm:h-10"
          alt="logo"
        />

        <a href="/" class="text-white">
          <button
            id="logo_text"
            class="rounded-lg p-2 text-base font-semibold duration-200 hover:scale-110 hover:bg-dark_light active:scale-90 sm:text-lg"
            alt="logo"
          >
            User5522
          </button>
        </a>
      </div>
      <div class="absolute right-10">
        <a href="/projects" class="text-white">
          <button
            class="rounded-lg p-2 text-base duration-200 hover:scale-110 hover:bg-dark_light active:scale-90 sm:text-lg"
          >
            Projects
          </button>
        </a>
        <a href="/about" class="text-white">
          <button
            class="rounded-lg p-2 text-base duration-200 hover:scale-110 hover:bg-dark_light active:scale-90 sm:text-lg"
          >
            About
          </button>
        </a>
      </div>
    </nav>
  </div>
</div>
