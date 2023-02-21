<svelte:head>
    <title>Music Releases | Blog | Zed Kaido</title>
    <meta
        name="description"
        content="Stay up to date on the latest music releases by Zed Kaido with these exclusive blog posts. Discover new music, behind-the-scenes insights, and more."/>
    <meta name="keywords" content="music releases, new music, zed kaido music, exclusive insights, music blog, new music releases, latest music, EDM">
</svelte:head>

<script>
 import PostListTemplate from '../../PostListTemplate.svelte';
 import posts from '$lib/data/posts.json';

 const filteredPosts = posts.filter((post) => post.category === "music-releases");
</script>

<section>
    <div class="header">
        <a href="/blog">Blog</a> > <h3 class="noMargin medium-font">Music-Releases</h3>
    </div>
    <div class="spacer"/>

    <PostListTemplate posts={filteredPosts}>
    </PostListTemplate>
</section>
