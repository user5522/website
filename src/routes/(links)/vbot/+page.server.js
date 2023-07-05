import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(308, 'https://discord.com/oauth2/authorize?client_id=771808147530711080&permissions=8&scope=bot+applications.commands');
}
