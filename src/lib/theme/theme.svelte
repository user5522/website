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

<div>
	<button
		checked={darkMode}
		on:click={handleSwitchDarkMode}
		type="checkbox"
		class="rounded-xl p-2 dark:text-white text-black hover:bg-opacity-50 duration-200
	hover:scale-102 hover:bg-dark_light active:scale-95"
	>
		Switch to {darkMode ? 'light' : 'dark'} theme?
	</button>
</div>
