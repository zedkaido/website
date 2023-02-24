<script>
 import PostCard from './PostCard.svelte';
 import QuoteCard from './QuoteCard.svelte';
 export let posts;
 posts.sort((a, b) => b.id - a.id);
</script>

<section>
    <div class="posts">
        {#each posts as post}
            {#if post.category === "quotes"}
                <QuoteCard post={post} />
            {:else}
                <PostCard post={post} />
            {/if}
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
