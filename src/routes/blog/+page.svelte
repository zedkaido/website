<script>
	import posts from '$lib/data/posts.json';
</script>

<svelte:head>
	<title>Zed Kaido: Blog</title>
	<meta
		name="description"
		content="Discover Zed Kaido's little corner of the internet packed with blog posts, music releases, insights, photography, art and much more!"
	/>
	<meta
		name="keywords"
		content="blog posts, music production, insights, coding, software engineering, tips and tricks"
	/>
</svelte:head>

<ul>
	{#each posts as post}
		<li id={post.id?.toString()}>
			<p>{post.date}:<br /> <a href={post.url}> {post.title}</a></p>
		</li>
	{/each}
</ul>

<style>
	li {
		list-style-type: none;
	}
</style>
