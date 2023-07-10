<script>
	export let folder;
	export let onFolderClick;
</script>

<tr>
	<td class="flex justify-center">
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
	</td>
	<td class="pr-2 select-text">
		<button
			class="inline-block text-blue-300 hover:text-[#d1c5e9] hover:underline whitespace-nowrap"
			on:click={onFolderClick}
		>
			{folder.name}/
		</button>
	</td>
	<td class="px-2 text-right w-min">-</td>
	<td class="px-2 text-left w-min">-</td>
</tr>
