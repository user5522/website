<script>
	import { onMount, onDestroy } from 'svelte';
	import { ref, getDownloadURL } from 'firebase/storage';
	import { storage } from '$lib/firebase.js';
	import { page } from '$app/stores';

	let filePath;

	const unsubscribe = page.subscribe((value) => {
		filePath = value.url.pathname;
	});

	onMount(async () => {
		if (filePath) {
			try {
				const fileRef = ref(storage, filePath);

				const downloadURL = await getDownloadURL(fileRef);

				window.location.href = downloadURL;
			} catch (error) {
				console.error('Error fetching file:', error);
			}
		}
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>
