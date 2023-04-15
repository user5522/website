<script>
	var t = new Date() - new Date('2006-11-24');
	t /= 1000 * 60 * 60 * 24 * 365;
	let age = Math.floor(t) + '.' + (t % 1).toFixed(2).substring(2);
</script>

<div id="age" class=" text-white inline-block">
	{age}
</div>
