<script>
  import Navbar from "../components/navbar.svelte";
  import WavesStart from "../components/waves_start.svelte";
  import { writable } from "svelte/store";
  import Modal, { bind } from "svelte-simple-modal";
  import Popup from "./Accusations/+page.svelte";
  import CloseButton from "../components/closeButton.svelte";
  import Footer from "../components/footer.svelte";
  import Subtitle from "../components/subtitle.svelte";

  const modal = writable(null);
  const showModal = () => modal.set(bind(Popup));
</script>

<svelte:head>
  <title>Welcome</title>
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
      <div class="text-4xl">User5522</div>
      <div class="text-xs">/Username5522</div>
    </div>
    <div><Subtitle /></div>
    <div class="flex flex-col items-center justify-center pl-10 pr-10">
      <div class="text-xl mb-7">My website is epico, because:</div>
      <div>
        - It is made using <a target="_blank" href="https://svelte.dev/"
          >svelte</a
        >
        &
        <a target="_blank" href="https://kit.svelte.dev"> sveltekit </a>
      </div>
      <div>- I made it :{")"}</div>
      <div>
        - It's fully opensource on
        <a
          target="_blank"
          href="https://github.com/user5522/user5522.github.io"
        >
          my github profile
        </a> (just like most of my projects)
      </div>
      <div>- It's good looking (real)</div>
      <div>- It'll support more languages soon™</div>
      <div>- I have nothing else to compliment, but maybe you do</div>
    </div>
    <div class="pl-10 pr-10">
      <div class="pt-10 text-xl">Note:</div>
      <div>
        I am NOT wanted in several countries for commiting any sort of federal
        crime.
      </div>
      <div class="pb-10">
        I am an innocent individual, and I definitely didn't commit any of these
        crimes:
      </div>
    </div>
    <div class="flex flex-row gap-4">
      <!-- svelte-ignore a11y-missing-attribute -->
      <Modal
        show={$modal}
        unstyled={false}
        closeButton={CloseButton}
        styleContent={{ backgroundColor: "#121212", borderRadius: "0.75rem" }}
      >
        <a class="">
          <button
            class="p-4 text-sm text-blue-200 duration-200 bg-blue-800 sm:p-5 sm:text-base rounded-xl hover:scale-110 active:scale-90"
            on:click={showModal}
          >
            View false accusations
          </button>
        </a>
        <a href="/Accusations" class="text-white">
          <button
            class="p-4 text-sm duration-200 sm:p-5 sm:text-base hover:bg-dark_darker rounded-xl hover:scale-110 active:scale-90"
          >
            View in a different page
          </button>
        </a>
      </Modal>
    </div>
  </div>
  <Footer />
</div>
