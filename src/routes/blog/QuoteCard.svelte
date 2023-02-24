<script>
 export let post;
</script>

<div class="post">
    {#if post?.thumbnail}
        <img class={"postThumbnail" + (post.title || post.summary || post.author || post.date ? " borderBottom" : "")} src={post.thumbnail} alt={post.thumbnail_alt} />
    {/if}

    {#if post?.title}
        <div class={"postTitle" + (post.summary || post.author || post.date ? " borderBottom" : "") + " zeroMargin"}>
            <h5>{@html post.title}</h5>
        </div>
    {/if}

    {#if post?.summary}
        <div class={"postSummary" + (post.author || post.date ? " borderBottom" : "") + " zeroMargin"}>
            <p>{@html post.summary}&hellip;</p>
        </div>
    {/if}

    <div class="row">
        {#if post?.author}
            <div class={"postAuthor" + (post.date ? " borderRight" : "") + " zeroMargin"}>
                <h5><span style="font-family: var(--light-font);">by</span> {post.author}</h5>
            </div>
        {/if}
        {#if post?.date}
            <div class="postDate zeroMargin">
                <h5>{post.date}</h5>
            </div>
        {/if}
    </div>
</div>

<style>
 .post {
     display: flex;
     flex-direction: column;
     width: 100%;
     border: var(--quote-border);
     border-radius: var(--default-border-radius);
     overflow: hidden;
     text-decoration: none;
     text-underline-offset: 0px;
 }

 .postThumbnail {
     width: 100%;
 }

 .postTitle {
     padding: var(--default-padding);
 }

 .postSummary {
     padding: var(--default-padding);
 }

 .postAuthor {
     width: 50%;
     padding: var(--default-padding);
 }

 .postDate {
     width: 50%;
     padding: var(--default-padding);
 }
</style>
