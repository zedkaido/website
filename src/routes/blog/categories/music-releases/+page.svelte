<svelte:head>
    <title>Zed Kaido | Blog | Music Releases</title>
    <meta
        name="description"
        content="Stay up to date on the latest music releases by Zed Kaido with these exclusive blog posts. Discover new music, behind-the-scenes insights, and more."/>
    <meta name="keywords" content="music release, new music, software engineering, tips and tricks, industry experts, new music releases, insights">
</svelte:head>

<script>
 import PostListTemplate from '../../PostListTemplate.svelte';
 import posts from '$lib/data/posts.json';

 const filteredPosts = posts.filter((post) => post.category === "music-releases");
</script>

<section>
    <div class="header">
        <a href="/blog">Blog</a> > <h3 class="noMargin">Music-Releases</h3>
    </div>
    <div class="spacer"/>

    <PostListTemplate posts={filteredPosts}>
    </PostListTemplate>
</section>
