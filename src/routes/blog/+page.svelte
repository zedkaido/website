<script>
	import posts from '$lib/data/posts.json';
	posts.sort((a, b) => b.id - a.id);
</script>

<svelte:head>
	<title>Zed Kaido: Blog</title>
	<meta
		name="description"
		content="Discover Zed Kaido's little corner of the internet packed with music releases, insights, photography, art and much more!"
	/>
	<meta
		name="keywords"
		content="music releases, music production, photography, insights, coding, software engineering, tips and tricks, industry experts, new music releases"
	/>
</svelte:head>

{#each posts as post}
	<ul>
		<p>{post.date}:<br /> <a href={post.url}> {post.title}</a></p>
	</ul>
{/each}
