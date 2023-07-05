import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(308, 'https://www.reddit.com/u/epicgamerman2');
}
