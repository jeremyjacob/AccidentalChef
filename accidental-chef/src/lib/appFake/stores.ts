import type { Writable } from 'svelte/store';

interface Page {
	path: string;
	params: {
		[key: string]: string;
	};
}

export let page: Writable<Page>;
