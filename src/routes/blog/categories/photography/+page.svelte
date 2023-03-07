<svelte:head>
    <title>Zed Kaido: Photography</title>
    <meta
        name="description"
        content="There's something magical in freezing a moment in time!"/>
    <meta name="keywords" content="photography, photos, pictures">
</svelte:head>

<script>
 import PostListTemplate from '../../PostListTemplate.svelte';
 import photos from '$lib/data/photography.json';
 const photoPosts = photos.sort((a, b) => b.id - a.id);
</script>

<section>
    <div class="header">
        <a href="/blog">Blog</a> > <h3 class="noMargin medium-font">Photography</h3>
    </div>
    <div class="header">
        <h5>
            There's something magical in every<br />
            freezed moment in time!
        </h5>
    </div>
    <div class="spacer"/>
    <PostListTemplate posts={photoPosts}>
    </PostListTemplate>
</section>
