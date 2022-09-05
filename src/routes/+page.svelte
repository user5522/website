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
  const showModal = () => modal.set(bind(Popup, "test"));
</script>

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
    <div><Subtitle /></div>
    <div class="p-10">
      Welcome to my website, a place where I publish everything I failed at
      making
    </div>
    <div class="pl-10 pr-10">
      I am NOT wanted in several countries for commiting any sort of federal
      crime.
    </div>
    <div class="pb-10 pr-10 pl-10">
      I am an innocent individual, and I definitely didn't commit any of these
      crimes:
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
            class="sm:p-5 p-4 sm:text-base text-sm text-blue-200 duration-200 bg-blue-800 rounded-xl hover:scale-110 active:scale-90"
            on:click={showModal}
          >
            View false accusations
          </button>
        </a>
        <a href="/Accusations"
          ><button
            class="sm:p-5 p-4 sm:text-base text-sm hover:bg-dark_darker rounded-xl hover:scale-110 active:scale-90 duration-200"
            >View in different page</button
          ></a
        >
      </Modal>
    </div>
  </div>
  <Footer />
</div>
