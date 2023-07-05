import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(308, 'https://account.xbox.com/en-us/profile?gamertag=Username6736');
}
