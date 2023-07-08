<script>
	import { storage } from '$lib/firebase.js';
	import { ref, listAll, getDownloadURL } from 'firebase/storage';
	import { createEventDispatcher } from 'svelte';

	let folders = [];
	let files = [];
	let currentFolderPath = '';
	let isLoading = false;

	const dispatch = createEventDispatcher();

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
				return {
					name: itemRef.name,
					url: fileUrl
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

	fetchFilesAndFolders();

	$: {
		dispatch('folderChange', currentFolderPath);
	}
</script>

<!--
href={index === 0
	? '/'
	: `/${currentFolderPath
			.split('/')
			.slice(0, index + 1)
			.join('/')}`}
on:click={(event) => {
	event.preventDefault();
	browseFolder(
		currentFolderPath
			.split('/')
			.slice(0, index + 1)
			.join('/')
	);
}} 
-->

<header class="flex flex-row">
	<!-- TODO: make this work properly lol -->
	<div>Index</div>
	{#if currentFolderPath !== ''}
		{#each currentFolderPath.split('/') as folder, index (folder)}
			<div>
				{folder}
			</div>
			<span class="mx-1">/</span>
		{/each}
	{/if}
</header>
<div class="relative w-full">
	<table class="w-full">
		<thead>
			<tr class="flex justify-start"><th class="pl-8">Name</th></tr>
		</thead>
		<tbody>
			{#if currentFolderPath !== ''}
				<tr class="w-full">
					<button
						class="px-3 text-blue-300 text-start hover:underline"
						on:click={() => browseFolder('..')}
					>
						.. Back
					</button>
				</tr>
			{/if}
			{#if files.length === 0 && folders.length === 0}
				<tr><p class="pl-3">This Folder Is Empty.</p></tr>
			{:else}
				{#each folders as folder}
					<tr>
						<button
							class="items-baseline pl-2 select-text"
							on:click={() => browseFolder(folder.name)}
						>
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									class="inline-block"
								>
									<path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
								</svg></span
							>
							<p class="inline-block text-blue-300 hover:underline">{folder.name}/</p>
						</button>
					</tr>
				{/each}
				{#each files as file}
					<tr>
						<a href={file.url} class="pl-2" target="_blank" rel="noopener noreferrer">
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
									class="{file.name.slice(-4) == '.png' ||
									file.name.slice(-4) == '.jpg' ||
									file.name.slice(-4) == 'webp'
										? 'block'
										: 'hidden'} inline-block"
								>
									<path
										clip-rule="evenodd"
										d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
										fill-rule="evenodd"
									/>
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
									class="{file.name.slice(-4) == '.mp4' ||
									file.name.slice(-4) == '.mov' ||
									file.name.slice(-4) == 'webm'
										? 'block'
										: 'hidden'} inline-block"
								>
									<path
										clip-rule="evenodd"
										d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z"
										fill-rule="evenodd"
									/>
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									fill="none"
									stroke="currentColor"
									stroke-width="1.5"
									viewBox="0 0 24 24"
									class="{file.name.slice(-4) == '.gif'
										? 'block'
										: 'hidden'} inline-block fill-none stroke-current text-gray-300"
								>
									<path
										d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</span>
							<p class="inline-block text-blue-300 hover:underline">{file.name}</p>
						</a>
					</tr>
				{/each}
			{/if}
		</tbody>
		<tfoot>
			<tr class="flex justify-start"
				><td class="pl-2"
					>{folders.length} Folder{folders.length > 1 || folders.length == 0 ? 's' : ''}, {files.length}
					File{files.length > 1 || files.length == 0 ? 's' : ''}</td
				></tr
			>
		</tfoot>
	</table>

	{#if isLoading}
		<div
			class="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-[#404040] bg-opacity-100"
		>
			<div class="lds-spinner">
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	{/if}
</div>
