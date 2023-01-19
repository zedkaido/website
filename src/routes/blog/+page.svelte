<svelte:head>
    <title>Zed Kaido | Blog</title>
    <meta
        name="description"
        content="Get a unique insight into the world of music through the eyes of a software engineer. A fresh take."/>
    <meta name="keywords" content="music production, coding, software engineering, tips and tricks, industry experts, new music releases, insights">
</svelte:head>

<script>
 import PostListTemplate from './PostListTemplate.svelte';
 import posts from '$lib/data/posts.json';
</script>

<div class="header">
    <h5>Reading about music is almost as good as listening to it, almost.</h5>
</div>
<div class="spacer"/>

<PostListTemplate posts={posts}>
</PostListTemplate>
