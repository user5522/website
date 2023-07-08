<script>
	import { onMount, onDestroy } from 'svelte';
	import { ref, getDownloadURL } from 'firebase/storage';
	import { storage } from '$lib/firebase.js';
	import { page } from '$app/stores';

	let filePath;
	const supportedImageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
	const supportedVideoExtensions = ['.mp4', '.mov', '.webm'];

	const unsubscribe = page.subscribe((value) => {
		filePath = value.url.pathname;
	});

	let fileExtension = '';
	let fileTag = '';
	let downloadURL = '';

	onMount(async () => {
		if (filePath) {
			try {
				const fileRef = ref(storage, filePath);

				downloadURL = await getDownloadURL(fileRef);
				fileExtension = getFileExtension(filePath);

				if (supportedImageExtensions.includes(fileExtension)) {
					fileTag = 'img';
				} else if (supportedVideoExtensions.includes(fileExtension)) {
					fileTag = 'video';
				} else {
					fileTag = 'script';
				}

				// window.location.href = downloadURL;
			} catch (error) {
				console.error('Error fetching file:', error);
			}
		}
	});

	onDestroy(() => {
		unsubscribe();
	});

	function getFileExtension(filename) {
		const extensionIndex = filename.lastIndexOf('.');
		return extensionIndex === -1 ? '' : filename.slice(extensionIndex);
	}
</script>

<svelte:head>
	{#if fileTag === 'img'}
		<meta property="og:image" content={downloadURL} />
	{:else if fileTag === 'video'}
		<meta property="og:video" content={downloadURL} />
	{/if}
</svelte:head>

{#if fileTag === 'img'}
	<meta property="og:image" content={downloadURL} />
	<img src={downloadURL} />
{:else if fileTag === 'video'}
	<meta property="og:video" content={downloadURL} />
	<video src={downloadURL} controls />
{:else}
	<script src={downloadURL}></script>
{/if}
