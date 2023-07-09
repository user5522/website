<script>
	import { storage } from '$lib/firebase.js';
	import { ref, listAll, getDownloadURL, getMetadata } from 'firebase/storage';
	import { createEventDispatcher } from 'svelte';

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

	fetchFilesAndFolders();

	$: {
		dispatch('folderChange', currentFolderPath);
	}
</script>

<header class="flex flex-row">
	<!-- TODO: make the pathbar work properly lol -->
	<div>
		<button
			class="text-blue-300 hover:underline hover:text-[#d1c5e9]"
			on:click={() => browseFolder('')}>index</button
		>
	</div>
	{#if currentFolderPath !== ''}
		{#each currentFolderPath.split('/') as folder}
			<div>
				{folder}
			</div>
			<span class="mx-1">/</span>
		{/each}
	{/if}
</header>
<div class="relative w-full">
	<div class="overflow-x-auto">
		<table class="w-full table-auto">
			<thead>
				<tr>
					<th class="w-8 pl-4"><span /></th>
					<th class="text-left min-w-max">Name</th>
					<th class="w-1 pl-2 text-left">Size</th>
					<th class="w-1 pl-2 text-left whitespace-nowrap">Last Modified</th>
				</tr>
			</thead>
			<tbody>
				{#if currentFolderPath !== ''}
					<tr class="w-full">
						<td />
						<td>
							<button
								class="text-blue-300 text-start hover:underline hover:text-[#d1c5e9]"
								on:click={() => browseFolder('..')}
							>
								.. Back
							</button>
						</td>
						<td />
						<td />
					</tr>
				{/if}
				{#if files.length === 0 && folders.length === 0}
					<tr><td /><td class="whitespace-nowrap">This Folder Is Empty.</td><td /><td /></tr>
				{:else}
					{#each folders as folder}
						<tr>
							<td class="flex justify-center">
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										class="inline-block"
									>
										<path
											d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
										/>
									</svg></span
								>
							</td>
							<td class="pr-2 select-text">
								<button
									class="inline-block text-blue-300 hover:text-[#d1c5e9] hover:underline whitespace-nowrap"
									on:click={() => browseFolder(folder.name)}
								>
									{folder.name}/
								</button>
							</td>
							<td class="px-2 text-center w-min">-</td>
							<td class="px-2 text-center w-min">-</td>
						</tr>
					{/each}
					{#each files as file}
						<tr>
							<td class="flex justify-center">
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
							</td>
							<td>
								<a
									href={file.url}
									class="pr-4 whitespace-nowrap"
									target="_blank"
									rel="noopener noreferrer"
								>
									{file.name}
								</a>
							</td>
							<td class="px-4 text-right whitespace-nowrap w-min">{file.size}</td>
							<td class="px-4 text-center whitespace-nowrap w-min">{file.lastUpdated}</td>
						</tr>
					{/each}
				{/if}
			</tbody>
			<tfoot>
				<tr>
					<td />
					<td>
						{folders.length} Folder{folders.length > 1 || folders.length == 0 ? 's' : ''}, {files.length}
						File{files.length > 1 || files.length == 0 ? 's' : ''}
					</td>
					<td />
					<td />
				</tr>
			</tfoot>
		</table>

		{#if isLoading}
			<div
				class="absolute top-0 left-0 border border-[#292929] flex items-center justify-center w-full h-full bg-[#404040] bg-opacity-100"
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
</div>
