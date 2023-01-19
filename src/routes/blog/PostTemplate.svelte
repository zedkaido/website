<script>
 export let category;
 export let thumbnail;
 export let thumbnailAlt;
 export let title;
 export let author;
 export let formattedDate;
</script>

<section>
    <div class="header">
        <a href="/blog">Blog</a> > <a href='/blog/categories/{category}'>{category}</a>
    </div>
    <div class="spacer"/>

    {#if thumbnail}
        <img id="thumbnail" src={thumbnail} alt={thumbnailAlt}/>
        <div class="spacer"/>
    {/if}

    <slot id="title" name="title">
    </slot>

    <div class="divider"/>
    <div class="spacer"/>
    {#if formattedDate}
    <h5>{formattedDate}</h5>
    {/if}
    <div class="divider"/>
    <div class="spacer"/>

    <slot name="content">
    </slot>

    <div class="divider"/>
    <div class="spacer"/>

    {#if author}
        Written by <h3 class="noMargin">{author}</h3>
    {/if}
</section>

<style>
 #thumbnail {
     width: 100%;
 }

 .header a {
     text-transform: capitalize;
 }
</style>
