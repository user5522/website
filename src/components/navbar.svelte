<div class="fixed top-0 z-50 w-screen p-3">
  <nav id="navbar" class="flex flex-row items-center p-5 rounded-xl bg-dark">
    <div class="flex flex-row items-center gap-2 duration-300" id="logo">
      <img
        src="/Logo-flat.svg"
        class="items-center h-10 rounded-full bg-dark_light"
        alt="logo"
      />
      <a href="/">
        <button
          id="logo_text"
          class="p-3 text-xl font-semibold duration-200 rounded-lg hover:bg-dark_light hover:scale-110 active:scale-90"
          alt="logo"
        >
          User5522
        </button>
      </a>
    </div>
    <div id="largeScreenItems" class="absolute right-10">
      <a href="/Vbot">
        <button
          class="p-3 hover:scale-110 text-xl active:scale-90 duration-200 hover:bg-dark_light rounded-lg"
        >
          Vbot
        </button>
      </a>
      <a href="/About">
        <button
          href="/About"
          class="p-3 hover:scale-110 text-xl active:scale-90 duration-200 hover:bg-dark_light rounded-lg"
        >
          About
        </button>
      </a>
    </div>
    <script>
      let y = 0;

      function toggleBurgerMenu() {
        var x = document.getElementById("BurgerMenu");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
    </script>
    <div class="sm:hidden">
      <div class="flex items-center">
        <button
          onClick="toggleBurgerMenu()"
          class="absolute p-3 text-xl duration-100 rounded-lg hover:bg-dark_light hover:scale-110 active:scale-90 right-10"
        >
          <img src="/burger.svg" alt="hamburger menu" />
        </button>
      </div>
      <div id="BurgerMenu" class="">
        <div class="w-40 h-96">
          <div>Test</div>
        </div>
      </div>
    </div>
  </nav>
</div>

<!-- svelte-ignore a11y-missing-attribute -->
<style>
  @media only screen and (max-width: 640px) {
    #largeScreenItems {
      display: none;
    }
  }
</style>
