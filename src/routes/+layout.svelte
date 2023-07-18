<script>
	import '$lib/styles/global.css';
	import { page } from '$app/stores';
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	$: currentPath = $page.url.pathname;

	onMount(() => {
		theme.subscribe((v) => {
			const bodyClassList = document.body.classList;
			bodyClassList.remove('light', 'system', 'dark');
			bodyClassList.add(v);
		});
	});
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme} />
	<!-- <link rel="stylesheet" href={`/theme/${$theme}.css`} /> -->
</svelte:head>

<div class="page">
	<div class="header">
		<select bind:value={$theme} class="theme-selector">
			<option value="system">System</option>
			<option value="light">Light</option>
			<option value="dark">Dark</option>
		</select>

		<p class="no-margin">in</p>
		<div class="flex-row fill-w align-center justify-space-between">
			<p class="no-margin">art by</p>
		</div>

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
	</div>

	<div class="gap-xl" />

	<slot />

	<div class="gap-2xl" />

	<a class="hidden-link" href="/">¯\_(ツ)_/¯</a><br />
	<div class="gap-sm" />
	<a href="rss.xml" target="_blank" style="margin-left: var(--size);">RSS</a>

	<div class="gap-3xl" />
</div>

<style>
	.page {
		height: 100%;
	}

	.theme-selector {
		appearance: none;
		transform: translateX(-2px) rotate(-90deg);
		-webkit-transform: translateX(-2px) rotate(-90deg); /* Safari */
		-moz-transform: translateX(-2px) rotate(-90deg); /* Firefox */
		-ms-transform: translateX(-2px) rotate(-90deg); /* IE */
		-o-transform: translateX(-2px) rotate(-90deg); /* Opera */
		transform-origin: top left;
		-webkit-transform-origin: top left;
		-moz-transform-origin: top left;
		-ms-transform-origin: top left;
		transform-origin: top left;
		padding-right: 1rem;
		font-size: var(--text-sm);
	}

	@media (max-width: 420px) {
		.theme-selector {
			font-size: var(--text-sm);
			transform: translateY(-2px) translateY(10px) rotate(-90deg);
		}
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
