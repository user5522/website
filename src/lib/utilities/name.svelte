<script>
	import { page } from '$app/stores';

	let hostname = $page.url.hostname.split('.');
	let [subdomain] = hostname;
	let exists = true;

	if (subdomain == $page.url.hostname || subdomain == 'www') {
		subdomain = '';
		exists = false;
	}
</script>

<div
	class="flex {subdomain
		? 'flex-col items-center'
		: 'flex-row items-baseline'} sm:flex-row sm:items-baseline cursor-default"
>
	<div class="flex-none text-2xl font-bold uppercase sm:normal-case">
		{subdomain}{exists ? '.' : ''}
	</div>
	<div class="flex justify-center flex-grow">
		<div class="text-6xl font-bold leading-24">User5522</div>
	</div>
	<div class="{subdomain ? 'uppercase' : ''} sm:normal-case text-2xl font-bold">.tk</div>
</div>
