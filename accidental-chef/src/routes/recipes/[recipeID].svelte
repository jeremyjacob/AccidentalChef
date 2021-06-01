<script lang="ts">
	import { page } from '$app/stores';

	console.log($page);
	const id = $page.params.recipeID;
</script>

<div class="content">
	<h1>Recipe</h1>
</div>

<style lang="less">
	div.content {
		display: flex;
		justify-content: center;
	}
</style>
