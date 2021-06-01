<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/blog'}><a sveltekit:prefetch href="/blog">Blog</a></li>
			<li class:active={$page.path === '/recipes'}>
				<a sveltekit:prefetch href="/recipes">Recipes</a>
			</li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
		</ul>
	</nav>

	<div class="corner">
		<!-- TODO put something else here? -->
	</div>
</header>

<style lang="less">
	@background: hsla(0, 0%, 100%, 0.7);

	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	nav {
		display: flex;
		justify-content: center;
		height: 4em;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		display: flex;
		align-items: center;
		position: relative;
		height: 100%;

		&.active {
			a {
				animation: borderFade 0.9s linear forwards;
			}

			:before {
				@size: 6px;
				content: '';
				width: 0;
				height: 0;
				position: absolute;
				bottom: 0;
				left: calc(50% - var(--size));
				border: var(--size) solid transparent;
				border-top: var(--size) solid var(--accent-color);
			}
		}
	}

	nav a {
		display: flex;
		align-items: center;
		padding: 3px 0.5em;
		box-sizing: border-box;
		margin: 0 0.9em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;

		@width: 0.1rem;
		border: @width solid var(--white);

		transition: color 0.2s linear, border 0.3s;

		&:hover {
			border-top: @width solid var(--white);
			border-bottom: @width solid var(--black);
		}

		@keyframes borderFade {
			0% {
				border: @width solid var(--white);
				border-bottom: @width solid var(--black);
				border-left: @width solid var(--white);
				background: white;
			}
			5% {
				border-left: @width solid var(--black);
				border-top: @width solid var(--white);
			}
			7% {
				border-top: @width solid var(--black);
			}
			15% {
				border-right: @width solid var(--white);
			}
			20% {
				border-right: @width solid var(--black);
			}
			22% {
				background: white;
				color: black;
			}
			50% {
				background: black;
				color: white;
			}
			100% {
				background: black;
				color: white;
				border: @width solid var(--black);
			}
		}
	}
</style>
