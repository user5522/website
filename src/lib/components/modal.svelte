<script>
	import CloseButton from '$lib/icons/closeButton.svelte';
	export let showModal;

	let dialog;

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	class="max-w-screen-md max-h-full sm:max-h-140 sm:rounded-xl bg-white text-black dark:bg-dark dark:text-white backdrop:backdrop-grayscale backdrop:bg-black backdrop:bg-opacity-50"
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<div on:click|stopPropagation>
		<slot name="header" />

		<slot />
		<!-- svelte-ignore a11y-missing-attribute a11y-autofocus -->
		<div class="absolute sm:top-10 sm:right-20 top-5 right-16">
			<a autofocus on:click={() => dialog.close()} class="fixed">
				<CloseButton />
			</a>
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
