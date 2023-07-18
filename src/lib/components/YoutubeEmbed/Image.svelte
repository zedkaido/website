<script>
	/** @type {string} */
	export let id = '';

	/** @type {string} */
	export let title = '';

	/** @type {boolean} */
	export let altThumb = false;

	/** @type {boolean} */
	export let play = false;
</script>

{#key play}
	<img
		src="https://i.ytimg.com/vi/{id}/{altThumb ? 'hqdefault' : 'maxresdefault'}.jpg"
		{title}
		alt="Youtube video: {title}"
		referrerpolicy="no-referrer"
	/>
{/key}

<style>
	img {
		width: 100%;
		aspect-ratio: 16/9;
		object-fit: cover;
	}
</style>
