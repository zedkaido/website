<script>
 import PostCard from './PostCard.svelte';
 export let posts;
 posts.sort((a, b) => b.id - a.id);
</script>

<section>
    <div class="posts">
        {#each posts as post}
            <PostCard post={post} />
        {/each}
    </div>
</section>

<style>
 .posts {
     display: flex;
     flex-direction: column;
     gap: var(--default-list-gap);
 }
</style>
