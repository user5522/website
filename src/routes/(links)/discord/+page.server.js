import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(308, 'https://discord.com/users/619210431809978368');
}
