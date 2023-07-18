<script>
	import { page } from '$app/stores';
	import photos from '$lib/data/photography.json';
	photos.sort((a, b) => b.id - a.id);

	/** @type {'grid' | 'list'} */
	let layout = 'grid';

	/** @type {string} */
	let currentPath = '';
	$: {
		currentPath = $page.url.href;
		layout = currentPath?.includes('#list') ? 'list' : 'grid';
	}
</script>

<svelte:head>
	<title>Zed Kaido: Photography</title>
	<meta name="description" content="There's something magical in freezing a moment in time!" />
	<meta name="keywords" content="zed kaido photos, photography, photos, pictures" />
</svelte:head>

{#if layout === 'grid'}
	<a href="#list" on:click={() => (layout = 'list')}>view as a list</a>
{:else}
	<a href="#grid" on:click={() => (layout = 'grid')}>view as a grid</a>
{/if}

<div class="gap" />

<layout>
	<div class={layout}>
		{#each photos as photo}
			<a href={photo.url} target="_blank" id={photo.id?.toString()}>
				{#if layout === 'list'}
					<img
						loading="lazy"
						style="margin-bottom: var(--gap);"
						src={photo.url}
						alt={photo.thumbnail_alt}
					/>
				{:else}
					<img loading="lazy" src={photo.thumbnail} alt={photo.thumbnail_alt} />
				{/if}
			</a>
		{/each}
	</div>
</layout>

<style>
	layout {
		display: block;
		max-width: var(--size-10xl);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		grid-gap: var(--gap);
	}

	.list {
		display: flex;
		flex-direction: column;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
