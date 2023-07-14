<script>
	import '$lib/styles/global.css';
</script>

<div class="page">
	<p>art by</p>
	<h1>zed kaido</h1>
	<p>Life is a symphony. Turn up the volume!</p>
	<a href="blog"> blog </a>
	<a href="music"> music </a>
	<a href="music"> dj-shows </a>
	<a href="merch"> merch </a>
	<a href="Links"> contact </a>
	<slot />
</div>

<style>
	.page {
		height: 100%;
		box-sizing: border-box;
		background-color: var(--color-2);
		padding: 10%;
	}

	h1 {
		margin: 0;
	}
</style>
