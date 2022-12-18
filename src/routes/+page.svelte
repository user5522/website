<script>
  import SvelteSeo from "svelte-seo";
  import { writable } from "svelte/store";
  import Modal, { bind } from "svelte-simple-modal";
  import Accusations from "$lib/accusations.svelte";
  import CloseButton from "$lib/closeButton.svelte";
  import Navbar from "$lib/navbar.svelte";
  import WavesStart from "$lib/wavesStart.svelte";
  import Subtitle from "$lib/subtitle.svelte";
  import Footer from "$lib/footer.svelte";

  const modal = writable(null);
  const showModal = () => modal.set(bind(Accusations));
</script>

<SvelteSeo
  title="User5522.tk"
  description="Welcome to my website! A place where I share information about all my stuff!"
  keywords="user5522 u5522 user5522.tk username5522 Epik_Kid"
  openGraph={{
    title: "User5522.tk",
    description:
    "Welcome to my website! A place where I share information about all my stuff!",
    url: "https://user5522.tk/",
    type: "website",
    images: [
      {
        url: "/Logo_flat.svg",
        width: 850,
        height: 650,
        alt: "Logo OG image",
      },
    ],
  }}
/>

<svelte:head>
  <title>Welcome - user5522.tk</title>
</svelte:head>

<div class="bg-white">
  <Navbar />
  <WavesStart />
</div>
<div class="init-div px-5">
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-row items-baseline">
      <div class="text-4xl">User5522</div>
      <div class="text-base">/Username5522</div>
    </div>
    <Subtitle />
    <div class="flex flex-col items-center justify-center px-10">
      <div class="overflow-hidden whitespace-nowrap text-2xl">
        Welcome to <strong>user5522.tk</strong>!
      </div>
      <div class="py-5 text-lg">It's a good website, because:</div>
      <div class="pb-5">
        <div>
          - It is made using <a
            target="_blank"
            href="https://kit.svelte.dev"
            rel="noreferrer">sveltekit</a
          >
        </div>
        <div>- I made it :{")"}</div>
        <div>
          - It's fully opensource on
          <a
            target="_blank"
            href="https://github.com/user5522/website"
            rel="noreferrer"
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
    <div class="pb-5">
      <div
      class="rounded-xl bg-dark p-2 text-lg duration-200 hover:scale-102 active:scale-95"
      >
      Check out my projects, <a href="/projects">dis way.</a>
      </div>
    </div>

    <div
      class="rounded-xl bg-dark p-2 text-lg duration-200 hover:scale-102 active:scale-95"
    >
    Learn a little about me, <a href="/about">here.</a>
    </div>
    <div>
      <div class="pt-10 text-xl"><strong>Note:</strong></div>
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
        styleWindow={{
          background: "#121212",
          borderRadius: ".8rem",
        }}
        ><a>
          <button class="blue-button" on:click={showModal}>
            View false accusations
          </button>
        </a>
        <a href="/accusations" class="text-white">
          <button class="hidden-button">View page</button>
        </a>
      </Modal>
    </div>
  </div>
</div>
<Footer />
