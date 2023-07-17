<script>
	import { browser } from '$app/environment';

	let darkMode = true;

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<button
	checked={darkMode}
	on:click={handleSwitchDarkMode}
	type="checkbox"
	class="flex flex-row gap-2 p-1 text-black duration-200 rounded-full dark:text-white hover:bg-opacity-50 hover:scale-102 hover:bg-dark-300 active:scale-95"
>
	<div class="{darkMode ? 'bg-white' : 'bg-dark-500'} rounded-xl p-3" />
	<div class="block sm:hidden">{darkMode ? 'Light' + ' ' : 'Dark' + ' '} Theme</div>
</button>
