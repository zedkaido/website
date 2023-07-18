<script>
	/** @type {string} */
	export let title = '';

	/** @type {string} */
	export let id = '';
</script>

<iframe
	src="https://www.youtube.com/embed/{id}?autoplay=1&rel=0"
	{title}
	frameborder="0"
	allow="autoplay; picture-in-picture; clipboard-write"
	allowfullscreen
/>

<style>
	iframe {
		height: auto;
		aspect-ratio: var(--aspect-ratio);
		width: 100%;
	}
</style>
