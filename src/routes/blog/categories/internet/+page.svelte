<svelte:head>
    <title>Zed Kaido: Internet</title>
    <meta
        name="description"
        content="The Internet is Awesome! You just gotta use it right!"/>
    <meta name="keywords" content="internet, social media, web">
</svelte:head>

<script>
 import PostListTemplate from '../../PostListTemplate.svelte';
 import posts from '$lib/data/posts.json';

 const categoryPosts = posts.filter((post) => post.category === "internet").sort((a, b) => b.id - a.id);
</script>

<section>
    <div class="header">
        <a href="/blog">Blog</a> > <h3 class="noMargin medium-font">Internet</h3>
    </div>
    <div class="spacer"/>

    <PostListTemplate posts={categoryPosts}>
    </PostListTemplate>
</section>
