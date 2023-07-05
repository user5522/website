import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(308, 'https://twitter.com/User_5522');
}
