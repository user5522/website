<script>
	import CloseButton from '$lib/components/buttons/close.svelte';
	export let showModal;

	let dialog;

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore  a11y-click-events-have-key-events a11y-autofocus -->
<dialog
	class="max-w-screen-md max-h-full text-black bg-white backdrop:overscroll-contain sm:max-h-140 sm:rounded-xl dark:bg-dark-500 dark:text-white backdrop:backdrop-grayscale backdrop:bg-black backdrop:bg-opacity-50"
	autofocus
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<div on:click|stopPropagation class="flex flex-col gap-3">
		<div class="text-3xl font-bold">
			<slot name="header" />
		</div>
		<div>
			<slot name="content" />
			<div class="absolute sm:top-10 sm:right-20 top-5 right-16">
				<div class="fixed {showModal ? 'block' : 'invisible'}">
					<CloseButton onClose={() => dialog.close()} />
				</div>
			</div>
		</div>
	</div>
</dialog>

<style>
	dialog > div {
		padding: 2em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.3s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
