<script context="module">
	import { browser, dev } from '$app/env';

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	// export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>About Me</h1>
</div>

<style lang="less">
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
