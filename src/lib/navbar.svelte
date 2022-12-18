<script>
	import { onMount } from 'svelte';

	let clicks = 0;
	let spinning = false;

	function handleClick() {
		clicks++;

		if (clicks >= 4) {
			spinning = true;
			clicks = 0;
			setTimeout(() => {
				spinning = false;
			}, 10000);
		}
	}

	onMount(() => {
		window.onscroll = function () {
			scrollFunction();
		};

		function scrollFunction() {
			if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				document.getElementById('padding').style.padding = '0px';
				document.getElementById('navbar').style.borderRadius = '0px';
				document.getElementById('navbar').classList.add('sm:bg-opacity-50');
				document.getElementById('navbar').classList.add('sm:backdrop-blur-md');
				document.getElementById('padding').style.transitionDuration = '400ms';
				document.getElementById('navbar').style.transitionDuration = '400ms';
			} else {
				document.getElementById('padding').style.padding = '12px';
				document.getElementById('navbar').style.borderRadius = '12px';
				document.getElementById('navbar').classList.remove('sm:bg-opacity-50');
				document.getElementById('navbar').classList.remove('sm:backdrop-blur-md');
				document.getElementById('padding').style.transitionDuration = '400ms';
				document.getElementById('navbar').style.transitionDuration = '400ms';
			}
		}
	});
</script>

<div class="pb-28">
	<div
		id="padding"
		class="fixed top-0 z-50 flex w-full flex-col justify-center overflow-auto p-3 align-middle"
	>
		<div id="navbar" class="flex flex-row rounded-xl bg-dark p-4 shadow-lg">
			<div class="flex w-1/2 flex-row items-center gap-1 duration-300 sm:gap-2" id="branding">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div id="logo" class="duration-200 hover:scale-105 active:scale-95" on:click={handleClick}>
					<img
						id="brandingLogo"
						src="/Logo_flat.svg"
						class="h-9 items-center rounded-full bg-dark_light bg-opacity-50 backdrop-blur-md sm:h-10"
						alt="logo"
						class:spin={spinning}
					/>
				</div>
				<a href="/" class="text-white">
					<button
						id="brandingWoodmark"
						class="rounded-lg p-2 text-base font-bold duration-200 hover:scale-105 hover:bg-dark_light hover:bg-opacity-50 active:scale-95 sm:text-lg"
						alt="branding woodmark"
					>
						User5522
					</button>
				</a>
			</div>
			<div class="flex w-1/2 justify-end">
				<a href="/projects" class="text-white">
					<button
						class="rounded-lg p-2 text-base font-medium duration-200 hover:scale-105 hover:bg-dark_light active:scale-95 sm:text-lg"
					>
						Projects
					</button>
				</a>
				<a href="/collections" class="text-white">
					<button
						class="rounded-lg p-2 text-base font-medium duration-200 hover:scale-105 hover:bg-dark_light active:scale-95 sm:text-lg"
					>
						Collections
					</button>
				</a>
				<a href="/about" class="text-white">
					<button
						class="rounded-lg p-2 text-base font-medium duration-200 hover:scale-105 hover:bg-dark_light active:scale-95 sm:text-lg"
					>
						About
					</button>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.spin {
		animation: spin 0.5s linear infinite;
	}
</style>
