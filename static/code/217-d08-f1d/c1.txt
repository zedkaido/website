import { writable } from 'svelte/store';

const isBrowser = typeof window !== 'undefined';
const storedTheme = isBrowser ? localStorage.theme : null;
const theme = writable(storedTheme || 'system');

if (isBrowser) {
	theme.subscribe(v => {
		localStorage.theme = v;
	});
}

export { theme };
