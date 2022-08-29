<script>
  import Navbar from "../components/navbar.svelte";
  import WaveStart from "../components/wave_start.svelte";
  import Crimes from "../components/crimes.svelte";
  import { writable } from "svelte/store";
  import Modal, { bind } from "svelte-simple-modal";
  import Popup from "../components/crimes.svelte";
  import CloseButton from "../components/closeButton.svelte";

  const modal = writable(null);
  const showModal = () => modal.set(bind(Popup));
</script>

<div class="bg-white">
  <div class="pb-32"><Navbar /></div>
  <div><WaveStart /></div>
</div>
<div class="p-24 bg-black">
  <div class="flex flex-col items-center justify-center">
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
          View
        </button>
      </a>
    </Modal>

    <div class="flex flex-col" />
  </div>
</div>
