<script>
	import shows from '$lib/data/dj-shows.json';
	shows.sort((a, b) => b.id - a.id);
</script>

<svelte:head>
	<title>Zed Kaido: DJ Shows</title>
	<meta
		name="description"
		content="Listen and watch to Zed Kaido's DJ Shows and performances across the world"
	/>
	<meta name="keywords" content="dj, dj shows, dj mixes, dj events, party vibes" />
</svelte:head>

{#each shows as show}
	<ul>
		<li id={show.id.toString()}>
			<p>
				{show.date}:<br />
				<a href={show.url}>{show.title}</a><br />
				<span>{show.location}</span><br />
			</p>
		</li>
	</ul>
{/each}

<style>
	li {
		list-style: none;
	}

	span {
		font-weight: var(--font-text-weight);
	}
</style>
