<script>
	import '$lib/styles/global.css';
</script>

<div class="page">
	<p class="no-margin">art by</p>

	<div class="gap-xl" />

	<h1 class="no-margin">zed kaido</h1>
	<p class="no-margin">Life is a symphony. Turn up the volume!</p>

	<div class="gap-md" />

	<ul>
		<a href="/blog"> blog </a>
		<a href="/music"> music </a>
		<a href="/shows"> dj-shows </a>
		<a href="/merch"> merch </a>
		<a href="/contact"> contact </a>
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
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
</style>
