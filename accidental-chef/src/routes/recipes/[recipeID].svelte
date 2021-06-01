<script lang="ts">
	import { page } from '$app/stores';

	console.log($page);
	const id = $page.params.recipeID;
</script>

<div class="content">
	{id}
</div>
