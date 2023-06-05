<script>
	let letters = [
		{
			letter: 'U'
		},
		{
			letter: 's'
		},
		{
			letter: 'e'
		},
		{
			letter: 'r'
		},
		{
			letter: '5'
		},
		{
			letter: '5'
		},
		{
			letter: '2'
		},
		{
			letter: '2'
		}
	];
</script>

<div class="text-4xl font-semibold flex flex-row">
	{#each letters as letters}
		<div class="active:pt-4 duration-200 rounded-xl hover:cursor-pointer">{letters.letter}</div>
	{/each}
</div>
