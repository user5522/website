<script>
  import { onMount } from "svelte";

  onMount(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        document.getElementById("padding").style.padding = "0px";
        document.getElementById("navbar").style.borderRadius = "0px";
        document.getElementById("navbar").classList.add("sm:bg-opacity-50");
        document.getElementById("navbar").classList.add("sm:backdrop-blur-md");
        document.getElementById("padding").style.transitionDuration = "400ms";
        document.getElementById("navbar").style.transitionDuration = "400ms";
      } else {
        document.getElementById("padding").style.padding = "12px";
        document.getElementById("navbar").style.borderRadius = "12px";
        document.getElementById("navbar").classList.remove("sm:bg-opacity-50");
        document.getElementById("navbar").classList.remove("sm:backdrop-blur-md");
        document.getElementById("padding").style.transitionDuration = "400ms";
        document.getElementById("navbar").style.transitionDuration = "400ms";
      }
    }
  });
</script>

<div class="pb-28">
  <div
    id="padding"
    class="fixed top-0 z-50 flex w-full flex-col justify-center overflow-auto p-3 align-middle"
  >
    <div
      id="navbar"
      class="flex flex-row items-center rounded-xl bg-dark p-4 shadow-lg"
    >
      <div
        class="flex flex-row items-center gap-1 duration-300 sm:gap-2"
        id="logo"
      >
        <img
          src="/Logo_flat.svg"
          class="h-9 items-center rounded-full bg-dark_light bg-opacity-50 backdrop-blur-md sm:h-10"
          alt="logo"
        />
        <a href="/" class="text-white">
          <button
            id="logo_text"
            class="rounded-lg p-2 text-base font-bold duration-200 hover:scale-110 hover:bg-dark_light hover:bg-opacity-50 active:scale-90 sm:text-lg"
            alt="logo"
          >
            User5522
          </button>
        </a>
      </div>
      <div class="absolute right-10">
        <a href="/projects" class="text-white">
          <button
            class="rounded-lg p-2 text-base font-medium duration-200 hover:scale-110 hover:bg-dark_light active:scale-90 sm:text-lg"
          >
            Projects
          </button>
        </a>
        <a href="/about" class="text-white">
          <button
            class="rounded-lg p-2 text-base font-medium duration-200 hover:scale-110 hover:bg-dark_light active:scale-90 sm:text-lg"
          >
            About
          </button>
        </a>
      </div>
    </div>
  </div>
</div>
