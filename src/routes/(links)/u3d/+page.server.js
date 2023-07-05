import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(308, 'https://github.com/user5522/u3d');
}
