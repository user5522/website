import { browser } from '$app/environment';
import { writable } from 'svelte/store';

function createThemeStore() {
	const defaultTheme = 'system';
	const storedTheme = browser ? localStorage.getItem('theme') : null;
	const initialTheme = storedTheme ?? defaultTheme;

	const { subscribe, set } = writable(initialTheme);

	if (browser) {
		const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

		const updateThemeOnChange = (e: MediaQueryListEvent | MediaQueryList) => {
			const currentTheme = localStorage.getItem('theme');
			if (currentTheme === 'system') {
				document.documentElement.classList.toggle('dark', e.matches);
			}
		};

		prefersDarkMode.addEventListener('change', updateThemeOnChange);

		return {
			subscribe,
			set: (value: string) => {
				localStorage.setItem('theme', value);
				document.documentElement.setAttribute('data-theme', value);
				if (value === 'system') {
					updateThemeOnChange(prefersDarkMode);
				} else {
					document.documentElement.classList.toggle('dark', value === 'dark');
				}
				set(value);
			}
		};
	}

	return { subscribe, set };
}

export const theme = createThemeStore();
