<svelte:head>
    <title>Thoughts | Blog | Zed Kaido</title>
    <meta
        name="description"
        content="Changing The world one quote at a time"/>
    <meta name="keywords" content="quotes, ideas, thouhgts">
</svelte:head>

<script>
 import PostListTemplate from '../../PostListTemplate.svelte';
 import posts from '$lib/data/posts.json';

 const categoryPosts = posts.filter((post) => post.category === "thoughts").sort((a, b) => b.id - a.id);
</script>

<section>
    <div class="header">
        <a href="/blog">Blog</a> > <h3 class="noMargin medium-font">Thoughts</h3>
    </div>
    <div class="spacer"/>

    <PostListTemplate posts={categoryPosts}>
    </PostListTemplate>
</section>
