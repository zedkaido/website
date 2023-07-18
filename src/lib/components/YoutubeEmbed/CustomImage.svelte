<script>
	/** @type {string} */
	export let title = '';

	/** @type {string} */
	export let image = '';

	/** @type {boolean} */
	export let play = false;
</script>

{#key play}
	<img
		src="{image}"
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
