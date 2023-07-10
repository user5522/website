<script>
	export let file;
</script>

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
		<a href={file.url} class="pr-4 whitespace-nowrap" target="_blank" rel="noopener noreferrer">
			{file.name}
		</a>
	</td>
	<td class="px-4 text-right whitespace-nowrap w-min">{file.size}</td>
	<td class="px-4 text-left whitespace-nowrap w-min">{file.lastUpdated}</td>
</tr>
