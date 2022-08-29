<script>
<<<<<<< Updated upstream
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
=======
	import Navbar from '../components/navbar.svelte';
	import WaveStart from '../components/wave_start.svelte';
	import Crimes from '../components/crimes.svelte';
	import { writable } from 'svelte/store';
	import Modal, { bind } from 'svelte-simple-modal';
	import Popup from '../components/crimes.svelte';
	import CloseButton from '../components/closeButton.svelte';

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
		<div>I am NOT wanted in several countries for commiting any sort of federal crimes.</div>
		<div class="pb-10">I am an innocent individual, and I didn't commit any of these crimes:</div>

		<!-- svelte-ignore a11y-missing-attribute -->
		<Modal
			show={$modal}
			unstyled={true}
			classBg="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center bg-orange-100/[.9]"
			classWindowWrap="relative m-2 max-h-full"
			classWindow="relative w-screen max-w-full max-h-full my-2 mx-auto text-orange-200 rounded shadow-md bg-indigo-900"
			classContent="relative p-2 overflow-auto"
			closeButton={CloseButton}
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
>>>>>>> Stashed changes
