import { Writable, writable } from 'svelte/store';
import { page } from '$app/stores';
import { onMount } from 'svelte';

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const recipeCache: Writable<{ [key: string]: Recipe }> = writable({});
