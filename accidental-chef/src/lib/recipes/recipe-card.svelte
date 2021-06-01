<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { quartOut } from 'svelte/easing';
	import { onDestroy } from 'svelte';
	export let recipe;
	export let index;

	const slide = (node, { duration, delay = 0 }) => ({
		delay,
		duration,
		css: (t) => {
			const eased = quartOut(t);
			return `
                opacity: ${eased};
                transform: translateY(${1 - eased}em);
            `;
		}
	});

	const click = (e: MouseEvent) => {
		e.preventDefault();
		setTimeout(() => {
			goto('/recipes/' + recipe.file);
		}, 10);
	};
</script>

<div class="card" in:slide={{ duration: 500, delay: index * 50 }}>
	<a href="/{recipe.file}" on:click={click}>
		<img src={recipe.image} alt="" />
		<h2>{recipe.name}</h2>
	</a>
</div>

<style lang="less">
	div.card {
		display: inline-block;
		width: 12em;
		height: 14em;
		margin: 0.8em;
		padding: 1em;
		border: 1px solid black;
		overflow: hidden;
		box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
		cursor: pointer;

		a {
			text-decoration: none;

			img {
				width: 100%;
			}

			h2 {
				font-size: 1.1em;
				margin-top: 0.4em;
			}
		}
	}
</style>
