<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { quartOut } from 'svelte/easing';
	import { recipeCache } from '$lib/stores';
	import axios from 'axios';
	import { delay } from '$lib/stores';

	export let recipe;
	export let index;

	const { file, image, name } = recipe;

	const slide = (node, { duration, delay = 0 }) => ({
		delay,
		duration,
		css: (t) => {
			const eased = quartOut(t);
			return `
                opacity: ${eased};
                transform: scale(${0.95 + eased / 20});
            `;
		}
	});

	const getFullRecipe = async () => {
		const url = `https://raw.githubusercontent.com/jeremyjacob/AccidentalChef/data/recipes/${file}.json`;
		const res = await axios.get(url);
		recipeCache.update((v) => {
			v[file] = res.data;
			return v;
		});
	};

	const hover = async (e: MouseEvent) => {
		if ($recipeCache[file]) return;
		await getFullRecipe();
		console.log($recipeCache[file]);
	};

	const click = async (e: MouseEvent) => {
		e.preventDefault();
		while (!$recipeCache[file]) await delay(10);
		goto('/recipes/' + file);
	};
</script>

<div
	class="card"
	in:slide={{ duration: 500, delay: index * 50 }}
	on:click={click}
	on:mouseenter={hover}
>
	<a href="/{recipe.file}" on:click={(e) => e.preventDefault()}>
		<img src={recipe.image} alt="" />
		<h2>{recipe.name}</h2>
		<div />
		<span>{recipe.time} minutes</span>
	</a>
</div>

<style lang="less">
	div.card {
		display: inline-block;
		width: 12em;
		height: 14.5em;
		margin: 0.8em;
		border: 1px solid black;
		overflow: hidden;
		box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
		padding: 1em;
		padding-bottom: 0.6em;
		cursor: pointer;

		a {
			text-decoration: none;
			color: inherit;
			height: 100%;
			display: flex;
			flex-direction: column;

			img {
				width: 100%;
			}

			h2 {
				font-size: 1.1em;
				margin-top: 0.4em;
			}

			div {
				flex-grow: 1;
			}

			span {
				margin-left: auto;
				font-family: 'Vollkorn', serif;
				color: hsl(0, 0%, 60%);
				font-size: 0.85em;
			}
		}
	}
</style>
