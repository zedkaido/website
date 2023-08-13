<script>
	import tracks from '$lib/data/tracks.json';
	tracks.sort((a, b) => b.id - a.id);
</script>

<svelte:head>
	<title>Zed Kaido: Music Releases</title>
	<meta name="description" content="Zed Kaido's music releases" />
	<meta name="keywords" content="zed kaido, music, music releases, tracks" />
</svelte:head>

{#each tracks as track}
	<ul>
		<li id={track.id?.toString()}>
			<p>
				{track.date}:<br />
				<a href={track.url}>{track.title}</a>
			</p>
		</li>
	</ul>
{/each}

<style>
	li {
		list-style-type: none;
	}
</style>
