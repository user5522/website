(function () {
	const theme = localStorage.getItem('theme') || 'system';
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

	document.documentElement.setAttribute('data-theme', theme);
	if (theme === 'dark' || (theme === 'system' && prefersDark)) {
		document.documentElement.classList.add('dark');
	}
})();