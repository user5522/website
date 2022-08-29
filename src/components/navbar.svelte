<script>
  import { M } from "svelte-motion";

  let isShown = false;
  const setIsShown = () => (isShown = !isShown);
  let imgURL = "/burger.svg";
  const setImgURL = () => (imgURL = "/burger_king.svg");

  let isActive = false;
  const setIsActive = () => (isActive = !isActive);

  let i = 90;

  // window.onscroll = function () {
  // 	scrollFunction();
  // };

  // function scrollFunction() {
  // 	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80	) {
  // 		document.getElementById('navbar').style.padding = '5px';
  // 		document.getElementById('logo').style.height = '50px';
  // 		document.getElementById('logo_text').style.padding = '8px';
  // 		document.getElementById('burgerking_menu').style.padding = '8px';
  // 		setIsShown(false);
  // 	} else {
  // 		document.getElementById('navbar').style.padding = '10px';
  // 		document.getElementById('logo').style.height = '60px';
  // 		document.getElementById('logo_text').style.padding = '12px';
  // 		document.getElementById('burgerking_menu').style.padding = '12px';
  // 	}
  // }

  const showMenu = () => {
    setIsShown((current) => !current);
  };
</script>

<div class="fixed top-0 z-50 w-screen p-3">
  <nav class="flex flex-row items-center p-5 rounded-xl bg-dark">
    <div class="flex flex-row items-center gap-2 duration-300" id="logo">
      <M.div animate={{ rotate: i }} transition={{ duration: 0.5 }} let:motion>
        <button on:click={() => (i += 90)} use:motion
          ><img
            src="/Logo-flat.svg"
            class="items-center h-10 rounded-full bg-dark_light"
            alt="logo"
          /></button
        >
      </M.div>
      <button
        href="/"
        id="logo_text"
        class="p-3 text-xl font-semibold duration-200 rounded-lg hover:bg-dark_light hover:scale-110 active:scale-90"
        alt="logo"
      >
        User5522
      </button>
    </div>
    <div class="md:hidden">
      <div class="flex items-center">
        <button
          id="burgerking_menu button"
          class="absolute p-3 text-xl duration-100 rounded-lg hover:bg-dark_light hover:scale-110 active:scale-90 right-10"
          onClick={() => {
            showMenu();
          }}
        >
          <img src={imgURL} alt="hamburger menu" />
        </button>
      </div>
    </div>
  </nav>
</div>

<!-- <div id="HamburgerMenu" class:open={isShown} /> -->

<!-- svelte-ignore a11y-missing-attribute -->
