<svelte:head>
    <title>Internet | Blog | Zed Kaido</title>
    <meta
        name="description"
        content="The Internet is Awesome! You just gotta use it right!"/>
    <meta name="keywords" content="internet, social media, web">
</svelte:head>

<script>
 import PostListTemplate from '../../PostListTemplate.svelte';
 import posts from '$lib/data/posts.json';

 const filteredPosts = posts.filter((post) => post.category === "internet");
</script>

<section>
    <div class="header">
        <a href="/blog">Blog</a> > <h3 class="noMargin medium-font">Internet</h3>
    </div>
    <div class="spacer"/>

    <PostListTemplate posts={filteredPosts}>
    </PostListTemplate>
</section>
