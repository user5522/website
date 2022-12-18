<script>
	import Navbar from '$lib/navbar.svelte';
	import WavesStart from '$lib/wavesStart.svelte';
	import Footer from '$lib/footer.svelte';
	import { A1F633 } from 'svelte-twitter-emoji';
</script>

<svelte:head>
	<title>/projects</title>
</svelte:head>

<div class="bg-white">
	<Navbar />
	<WavesStart />
</div>
<div class="init-div">
	<div class="flex flex-col items-center justify-center">
		<div class="flex flex-row">
			<p class="text-4xl">Projects</p>
		</div>
		<div class="flex flex-row gap-1">
			<div class="px-10 text-xl">
				Projects I'm working on that I want to share with you
				<A1F633 class="inline-block h-7 w-7" />
			</div>
		</div>
	</div>
	<div class="grid gap-5 p-5 sm:grid-cols-2 2xl:grid-cols-4">
		<a
			class="w-full rounded-2xl bg-dark text-white duration-200 hover:scale-102 active:scale-95"
			href="/projects/vbot"
		>
			<div>
				<div class="h-full">
					<div class="sm:h-2/3">
						<div class="flex w-full items-center justify-center">
							<img src="/banners/Vbot.png" alt="Vbot Banner" class="rounded-t-xl" />
						</div>
					</div>
					<div class="p-5 sm:h-1/3">
						<div class="flex flex-row items-baseline">
							<div id="project_title" class=" text-xl font-bold">Vbot</div>
						</div>
						<div>
							<div id="project_description" class="text-lg">
								A multi-purpose Discord bot that is built to be fast, responsive & easy to use (&
								all the rest of the marketting crap). [in ALPHA]
							</div>
						</div>
					</div>
				</div>
			</div>
		</a>
		<a
			class="h-auto w-full rounded-2xl bg-dark text-white duration-200 hover:scale-102 active:scale-95"
			href="/projects/banners"
		>
			<div>
				<div class="h-full">
					<div class="sm:h-2/3">
						<div class="flex w-full items-center justify-center">
							<img src="/banners/banners.png" alt="banners" class="rounded-t-xl" />
						</div>
					</div>
					<div class="p-5 sm:h-1/3">
						<div class="flex flex-row items-baseline">
							<div id="project_title" class=" text-xl font-bold">Banners & Logos</div>
						</div>
						<div>
							<div id="project_description" class="text-lg">
								A good amount of banners that I made for CRBT's old profiles feature & some logos
								for my other projects.
							</div>
						</div>
					</div>
				</div>
			</div>
		</a>
		<a
			href="/sgsource"
			id="SquareGame"
			class="rounded-xl bg-dark text-white duration-200 hover:scale-102 active:scale-95"
		>
			<div>
				<div class="h-full">
					<div class="flex w-full items-center justify-center sm:h-2/3">
						<img src="/banners/SquareGame.png" class="rounded-t-xl" alt="SquareGame" />
					</div>
					<div class="p-5 sm:h-1/3">
						<div id="project_title" class="flex flex-col text-xl font-semibold sm:flex-row">
							SquareGame
						</div>
						<div id="project_description" class="text-lg">
							A Unity 2D game, about, well.. a 2D square that can move and goes through levels..?
							[in BETA]
						</div>
					</div>
				</div>
			</div>
		</a>
		<a
			class="rounded-2xl bg-dark text-white duration-200 hover:scale-102 active:scale-95"
			href="/snaksource"
			id="Snak"
		>
			<div>
				<div class="h-full">
					<div class="flex items-center justify-center sm:h-2/3">
						<div class="h-full w-full">
							<img src="/banners/Snak.png" alt="Snak" class="rounded-t-xl" />
						</div>
					</div>
					<div class="p-5 sm:h-1/3">
						<div class="flex flex-row items-baseline">
							<div id="project_title" class="text-xl font-bold">Snak</div>
						</div>
						<div>
							<div id="project_description" class="text-lg">
								A, and believe me when I say it, buggy trash snake clone made in Rust with the Bevy
								game engine.
							</div>
						</div>
					</div>
				</div>
			</div>
		</a>
	</div>
</div>
<Footer />
