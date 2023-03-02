<script>
	import tippy from 'svelte-tippy';

	var t = new Date() - new Date('2006-11-24');
	t /= 1000 * 60 * 60 * 24 * 365;
	let age = Math.floor(t) + '.' + (t % 1).toFixed(2).substring(2);
</script>

<button
	use:tippy={{
		content: '24/11/2006',
		arrow: false,
		animation: 'shift-away',
		interactive: true,
		theme: 'dark',
		placement: 'bottom',
		duration: 0,
		offset: [0, 5]
	}}
	class="relative duration-200 hover:scale-102 active:scale-95"
>
	<strong class="rounded-xl bg-dark p-1"
		><div id="age" class="inline-block text-white">
			{age}
		</div>
	</strong></button
>
