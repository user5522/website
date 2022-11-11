<script>
  import Navbar from "../components/navbar.svelte";
  import WavesStart from "../components/waves_start.svelte";
  import { writable } from "svelte/store";
  import Modal, { bind } from "svelte-simple-modal";
  import Popup from "../components/accusations.svelte";
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
  <Navbar />
  <WavesStart />
</div>
<div class="init-div">
  <div class="flex flex-col items-center justify-center pb-20">
    <div class="flex flex-row items-baseline">
      <div class="text-4xl">User5522</div>
      <div class="text-base">/Username5522</div>
    </div>
    <Subtitle />
    <div class="flex flex-col items-center justify-center px-10">
      <div class="text-2xl">Welcome to user5522.tk!</div>
      <div class="my-5 text-lg">It's a good website, because</div>
      <div>
        <div>
          - It is made using <a target="_blank" href="https://kit.svelte.dev"
            >sveltekit</a
          >
        </div>
        <div>- I made it :{")"}</div>
        <div>
          - It's fully opensource on
          <a
            target="_blank"
            href="https://github.com/user5522/user5522.github.io"
          >
            github
          </a> (just like most of my projects)
        </div>
        <div>- It's good looking (real)</div>
        <div>- It'll support more languages soon™</div>
        <div>
          - I have nothing else to compliment, but <a href="/about#Links"
            >maybe you do</a
          >
        </div>
      </div>
    </div>
    <div class="px-10">
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
        ><a>
          <button class="blue-button" on:click={showModal}>
            View false accusations
          </button>
        </a>
        <a href="/accusations" class="text-white">
          <button class="hidden-button"> View page </button>
        </a>
      </Modal>
    </div>
  </div>
  <Footer />
</div>
