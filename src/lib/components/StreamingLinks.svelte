<script>
	/* @type {string} */
	export let nft = '';

	/* @type {string} */
	export let spotify =
		'https://open.spotify.com/artist/6bW3RzyZ1QkPZhJ3rrIxR1?si=heDLqOJKRyG9ZMYCOaTz8w';

	/* @type {string} */
	export let tidal = 'https://tidal.com/browse/artist/36763030';

	/* @type {string} */
	export let appleMusic = 'https://music.apple.com/us/artist/zed-kaido/1665747270';

	/* @type {string} */
	export let youtubeVideo = '';

	/* @type {string} */
	export let bandcamp = 'https://zedkaido.bandcamp.com/';

	/* @type {boolean} */
	export let download = false;

	/* @type {string} */
	export let downloadLink = '';
</script>

<div class="streamingLinks">
	{#if nft}
		<a href={nft} target="_blank">
			<div class="link" style="background-color: var(--color-2); color: var(--color-1);">
				🔥 BUY NFT 🔥
			</div>
		</a>
	{/if}
	{#if download && downloadLink}
		<a href={downloadLink} target="_blank" download>
			<div class="link" style="background-color: var(--color-2); color: var(--color-1);">
				↓ Download M4A
			</div>
		</a>
	{/if}
	{#if spotify}
		<a href={spotify} target="_blank">
			<div class="link" style="background-color: #1DB954; color: #101010;">Spotify</div>
		</a>
	{/if}
	{#if appleMusic}
		<a href={appleMusic} target="_blank">
			<div class="link" style="background-color: #E60532; color: #ffffff;">Apple Music</div>
		</a>
	{/if}
	{#if tidal}
		<a href={tidal} target="_blank">
			<div class="link" style="background-color: #101010; color: #ffffff;">Tidal</div>
		</a>
	{/if}
	{#if youtubeVideo}
		<a href={youtubeVideo} target="_blank">
			<div class="link" style="background-color: #FF0000; color: #ffffff;">YouTube Video</div>
		</a>
	{/if}
	{#if bandcamp}
		<a href={bandcamp} target="_blank">
			<div class="link" style="background-color: #61B6CC; color: #101010;">
				Bandcamp <span style="font-size: var(--text-sm)">(studio quality download)</span>
			</div>
		</a>
	{/if}
</div>

<style>
	.streamingLinks {
		max-width: var(--size-6xl);
		border-left: var(--border);
		border-right: var(--border);
	}

	.link {
		padding: var(--padding);
		border-bottom: var(--border);
		/* text-transform: lowercase; */
	}

	.link:hover {
		text-decoration: underline;
	}
</style>
