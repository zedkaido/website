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
 import { onMount } from 'svelte';
</script>

<div class="header">
    <h5>Reading about music is almost as good as listening to it, almost.</h5>
</div>
<div class="spacer"/>

<div class="categories">
    <h4>Categories</h4>
    <div class="dashedDivider"/>
    <div class="spacer"/>
    <a href="/blog/categories/music-releases">Music Releases</a>
    <a href="/blog/categories/internet">Internet</a>
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
 }
</style>
