import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(308, 'https://betauser5522.vercel.app');
}
