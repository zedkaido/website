<svelte:head>
    <title>Zed Kaido: Artificial Intelligence</title>
    <meta
        name="description"
        content="AI is a game changer. How will it affect the present and future to come?"/>
    <meta name="keywords" content="ai, artificial intelligence, machine learning, new technology, midjourney, stable diffusion, chatGPT">
</svelte:head>

<script>
 import PostListTemplate from '../../PostListTemplate.svelte';
 import posts from '$lib/data/posts.json';

 const categoryPosts = posts.filter((post) => post.category === "artificial-intelligence").sort((a, b) => b.id - a.id);
</script>

<section>
    <div class="header">
        <a href="/blog">Blog</a> > <h3 class="noMargin medium-font">Artificial Intelligence</h3>
    </div>
    <div class="spacer"/>

    <PostListTemplate posts={categoryPosts}>
    </PostListTemplate>
</section>
