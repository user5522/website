<script>
  import Navbar from "../components/navbar.svelte";
  import WavesStart from "../components/waves_start.svelte";
  import { writable } from "svelte/store";
  import Modal, { bind } from "svelte-simple-modal";
  import Popup from "../components/crimes.svelte";
  import CloseButton from "../components/closeButton.svelte";
  import Footer from "../components/footer.svelte";

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
    <div class="flex flex-row">
      <p class="ml-16 text-4xl">User5522</p>
      <p class="mt-6 text-xs">/Username5522</p>
    </div>
    <div class="pb-10 text-xl">professional peepeepoopoo inspector</div>
    <div class="pb-10">
      Welcome to my website, a place where i put everything i failed at making
    </div>
    <div>
      I am NOT wanted in several countries for commiting any sort of federal
      crimes.
    </div>
    <div class="pb-10">
      I am an innocent individual, and I didn't commit any of these crimes:
    </div>
    <div>
      <!-- svelte-ignore a11y-missing-attribute -->
      <Modal
        show={$modal}
        unstyled={false}
        closeButton={CloseButton}
        styleContent={{ backgroundColor: "#121212", borderRadius: "0.75rem" }}
      >
        <a>
          <button
            class="p-5 text-blue-300 duration-200 bg-blue-800 rounded-xl hover:scale-110 active:scale-90"
            on:click={showModal}
          >
            View false accusations
          </button>
        </a>
      </Modal>
    </div>
  </div>
</div>
