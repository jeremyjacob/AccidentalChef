<script lang="ts">
	import { quartOut } from 'svelte/easing';
	export let recipe: Recipe;
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
</script>

<div class="card" in:slide={{ duration: 500, delay: index * 50 }}>
	<img src={recipe.image} alt="" />
	<h2>{recipe.name}</h2>
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

		img {
			width: 100%;
		}

		h2 {
			font-size: 1.1em;
			margin-top: 0.4em;
		}
	}
</style>
