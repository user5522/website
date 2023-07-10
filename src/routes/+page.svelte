<script>
	import { storage } from '$lib/firebase.js';
	import { ref, listAll, getDownloadURL, getMetadata } from 'firebase/storage';
	import { createEventDispatcher } from 'svelte';
	import Loading from '$lib/components/loading.svelte';
	import FolderBreadcrumbs from '$lib/components/folderBreadcrumbs.svelte';
	import Back from '$lib/components/back.svelte';
	import FileTableRow from '../lib/components/fileTableRow.svelte';
	import FolderTableRow from '../lib/components/folderTableRow.svelte';

	let folders = [];
	let files = [];
	let currentFolderPath = '';
	let isLoading = false;

	const dispatch = createEventDispatcher();

	function formatDate(date) {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		const hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');
		return `${year}-${month}-${day} ${hours}:${minutes}`;
	}

	function formatSize(size) {
		if (size < 1024) {
			return size + ' B';
		} else if (size < 1048576) {
			return Math.round(size / 1024) + ' KiB';
		} else {
			return (size / 1048576).toFixed(1) + ' MiB';
		}
	}

	async function browseFolder(folderRef) {
		isLoading = true;
		if (folderRef === '..') {
			const folders = currentFolderPath.split('/');
			folders.pop();
			currentFolderPath = folders.join('/');
		} else if (folderRef === '') {
			currentFolderPath = '';
		} else {
			currentFolderPath += `/${folderRef}`;
		}
		await fetchFilesAndFolders();
	}

	async function fetchFilesAndFolders() {
		const listRef = ref(storage, currentFolderPath);

		try {
			const res = await listAll(listRef);

			folders = res.prefixes.map((folderRef) => ({
				name: folderRef.name
			}));

			const filePromises = res.items.map(async (itemRef) => {
				const fileUrl = await getDownloadURL(itemRef);
				const metadata = await getMetadata(itemRef);
				return {
					name: itemRef.name,
					url: fileUrl,
					size: formatSize(metadata.size),
					lastUpdated: formatDate(new Date(metadata.updated))
				};
			});

			files = await Promise.all([...filePromises]);

			const timeout = setTimeout(() => {
				isLoading = false;
				clearTimeout(timeout);
			}, 100);
		} catch (error) {
			console.error('Error fetching file list:', error);
		}
	}

	function navigateToFolder(folderName) {
		const folders = currentFolderPath.split('/');
		const index = folders.indexOf(folderName);
		if (index !== -1) {
			currentFolderPath = folders.slice(0, index + 1).join('/');
		}
	}

	fetchFilesAndFolders();

	$: {
		dispatch('folderChange', currentFolderPath);
	}
</script>

<header class="flex flex-row">
	<FolderBreadcrumbs
		{currentFolderPath}
		onClickIndex={() => browseFolder('')}
		onClickFolder={() => navigateToFolder()}
	/>
</header>
<div class="relative w-full">
	<div class="overflow-x-auto">
		<table class="w-full table-auto">
			<thead>
				<tr>
					<th class="w-8 px-4"><span class="icons" /></th>
					<th class="text-left min-w-max">Name</th>
					<th class="w-1 px-2 text-left">Size</th>
					<th class="w-1 px-2 text-left whitespace-nowrap">Last Modified</th>
				</tr>
			</thead>
			<tbody>
				{#if currentFolderPath !== ''}
					<Back onClick={() => browseFolder('..')} />
				{/if}
				{#if (files.length == folders.length) === 0}
					<tr><td /><td class="whitespace-nowrap">This Folder Is Empty.</td><td /><td /></tr>
				{:else}
					{#each folders as folder}
						<FolderTableRow {folder} onFolderClick={() => browseFolder(folder.name)} />
					{/each}
					{#each files as file}
						<FileTableRow {file} />
					{/each}
				{/if}
			</tbody>
			<tfoot>
				<tr>
					<td />
					<td>
						{#if (folders.length == files.length) === 0}
							0 Folders, 0 Files
						{/if}
						{#if folders.length !== 0}
							{folders.length} Folder{folders.length > 1 ? 's' : ''},
						{/if}
						{#if files.length !== 0}
							{files.length}
							File{files.length > 1 ? 's' : ''}
						{/if}
					</td>
					<td />
					<td />
				</tr>
			</tfoot>
		</table>

		{#if isLoading}
			<Loading />
		{/if}
	</div>
</div>
