<script>
 export let post;
</script>

<a class="post" href={ post.thumbnail ? post.url + "#thumbnail" : post.url }>
    {#if post?.thumbnail}
        <img class={"postThumbnail" + (post.title || post.summary || post.author || post.date ? " borderBottom" : "")} src={post.thumbnail} alt={post.thumbnail_alt} />
    {/if}

    {#if post?.title}
        <div class={"postTitle" + (post.summary || post.author || post.date ? " borderBottom" : "") + " zeroMargin"}>
            <h3>{@html post.title}</h3>
        </div>
    {/if}

    {#if post?.summary}
        <div class="postSummary borderBottom zeroMargin">
            <p>{@html post.summary}</p>
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
</a>

<style>
 .post {
     display: flex;
     flex-direction: column;
     width: 100%;
     border: var(--default-border);
     border-radius: var(--default-border-radius);
     overflow: hidden;
     cursor: pointer;
     text-decoration: none;
     text-underline-offset: 0px;
 }

 .post:hover {
     transform: translate(-0.25rem, -0.25rem);
     box-shadow: var(--secondary-color) 0.25rem 0.25rem;
     background-color: var(--accent);
     color: var(--contrast-accent);
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
