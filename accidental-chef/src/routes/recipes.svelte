<script lang="ts">
	import RecipeCard from '$lib/recipes/recipe-card.svelte';
	import axios from 'axios';

	const indexURL =
		'https://raw.githubusercontent.com/jeremyjacob/AccidentalChef/data/recipes/index.json';
	let recipes = [];

	axios.get(indexURL).then((res) => (recipes = res.data));
</script>

<svelte:head>
	<title>Recipes</title>
</svelte:head>

<div class="content">
	<h1>Recipes</h1>
	<div>
		{#if recipes}
			{#each recipes as recipe, index}
				<RecipeCard {recipe} {index} />
			{/each}
		{/if}
	</div>
</div>

<style lang="less">
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
