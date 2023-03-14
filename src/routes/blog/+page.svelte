<svelte:head>
    <title>Zed Kaido: Blog</title>
    <meta
        name="description"
        content="Get a unique insight into the world of music through the eyes of a software engineer. A fresh take."/>
    <meta name="keywords" content="music production, coding, software engineering, tips and tricks, industry experts, new music releases, insights">
</svelte:head>

<script>
 import PostListTemplate from './PostListTemplate.svelte';
 import posts from '$lib/data/posts.json';
 import { onMount } from 'svelte';
</script>

<div class="spacer"/>

<div class="categories">
    <a class="zkLink" href="/blog/categories/music-releases">Music Releases</a>
    <a class="zkLink" href="/blog/categories/photography">Photography</a>
    <a class="zkLink" href="/blog/categories/thoughts">Thoughts</a>
    <a class="zkLink" href="/blog/categories/artificial-intelligence">Artificial Intelligence</a>
    <a class="zkLink" href="/blog/categories/internet">Internet</a>
</div>
<div class="spacer"/>
<div class="divider"/>
<div class="spacer"/>

<PostListTemplate posts={posts}>
</PostListTemplate>

<style>
 .categories {
     display: flex;
     flex-direction: column;
     gap: 10px;
 }

 .categories a {
     background-color: var(--primary-color);
     color: var(--text-color);
     font-family: var(--medium-font);
     padding: 20px 24px;
 }
</style>
