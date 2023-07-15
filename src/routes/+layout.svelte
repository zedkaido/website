<script>
	import '$lib/styles/global.css';
	import { page } from '$app/stores';

	$: currentPath = $page.url.pathname;
</script>

<div class="page">
	<p class="no-margin">art by</p>

	<div class="gap-xl" />

	<h1 class="no-margin">zed kaido</h1>
	<p class="no-margin">Life is a symphony.<br /> Turn up the volume!</p>

	{#if currentPath === '/'}
		<div class="gap-2xl" />
	{:else}
		<div class="gap-xl" />
	{/if}

	<ul class={currentPath === '/' ? 'vertical-list' : 'horizontal-list'}>
		{#each ['blog', 'music', 'dj-shows', 'photography', 'merch', 'thoughts', 'contact'] as page}
			<li id={page}>
				{#if currentPath.startsWith('/' + page)}
					<a href="/{page}" class="active"> {page} </a>
				{:else}
					<a href="/{page}"> {page} </a>
				{/if}
			</li>
		{/each}
	</ul>

	<div class="gap-xl" />

	<slot />

	<div class="gap-2xl" />

	<a class="hidden-link" href="/">¯\_(ツ)_/¯</a>
</div>

<style>
	.page {
		height: 100%;
		box-sizing: border-box;
		background-color: var(--color-2);
		padding: 10%;
		overflow: auto;
	}

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		list-style-type: none;
	}

	.horizontal-list {
		display: flex;
		flex-direction: row;
	}

	.horizontal-list > li {
		margin-right: 1rem;
		margin-bottom: 0.31rem;
	}

	.vertical-list {
		display: flex;
		flex-direction: column;
	}

	.vertical-list > li {
		margin-bottom: 0.69rem;
		font-size: var(--text-3xl);
	}

	.active {
		text-decoration: underline;
	}
</style>
