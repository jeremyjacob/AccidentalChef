import type { Writable } from 'svelte/store';

interface Options {
	replaceState?: boolean;
	noscroll?: boolean;
}

export let goto = async (href: string, { replaceState, noscroll }: Options = {}) => {};
