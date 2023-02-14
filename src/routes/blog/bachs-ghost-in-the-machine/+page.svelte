<script>
 import PostTemplate from '../PostTemplate.svelte';
 import posts from '$lib/data/posts.json';
 const post = posts.find(post => post.id === 2);
</script>

<svelte:head>
    <title>Bach's Ghost In The Machine | Zed Kaido</title>
</svelte:head>

<PostTemplate
    category={post.category}
    thumbnail={post.thumbnail}
    thumbnailAlt={post.thumbnailAlt}
    author={post.author}
    date={post.date}
    updatedDate={post.updatedDate}
    >
    <div id="title" slot="title">
        <h1>Bach's Ghost In The Machine</h1>
    </div>
   <div slot="content">
       <iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=674483766/size=small/bgcol=ffffff/linkcol=333333/transparent=true/" seamless><a href="https://zedkaido.bandcamp.com/track/bachs-ghost-in-the-machine">Bach&#39;s Ghost In The Machine by zedkaido</a></iframe>
       <div class="spacer"/>
       <p>
           A reimagined take on Johann Sebastian Bach's iconic <a href="https://en.wikipedia.org/wiki/Prelude_and_Fugue_in_C_major,_BWV_846" target="_blank">Prelude no.1</a> and inspired by the haunting beauty of Charles Gounod's:<br/><a href="https://en.wikipedia.org/wiki/Ave_Maria_(Bach/Gounod)" target="_blank">Ave Maria</a>.
       </p>
       <p>
           This modern remix blends classical elements with a cutting-edge, electronic soundscape, featuring a dynamic interplay of soaring synths and tribal drums.
       </p>
       <p>Add it to your favourite music library: </p>
        <div class="zkMusicLinks">
            <a href="https://open.spotify.com/track/0z0yzn2wxhPNRHK3ca1PA3?si=6340f670f5b34ce2" target="_blank">
                <div class="zkLink" style="background-color: #1DB954;; color: #FFFFFF;">
                    SPOTIFY
                </div>
            </a>
            <a href="https://tidal.com/browse/track/272593539" target="_blank">
                <div class="zkLink" style="background-color: #101010;">
                    TIDAL
                </div>
            </a>
            <a href="https://music.apple.com/us/album/bachs-ghost-in-the-machine-single/1666944271" target="_blank">
                <div class="zkLink" style="background-color: #fc3c44;">
                    APPLE MUSIC
                </div>
            </a>
            <a href="https://audius.co/zedkaido/bachs-ghost-in-the-machine" target="_blank">
                <div class="zkLink" style="background-color: #7F2AE6;">
                    AUDIUS
                </div>
            </a>
            <a href="https://deezer.page.link/dFA5nNEToRaLaftx5" target="_blank">
                <div class="zkLink" style="background-color: #202020;">
                    DEEZER
                </div>
            </a>
            <a href="https://music.youtube.com/watch?v=A_mZqQ-lyqI&feature=share" target="_blank">
                <div class="zkLink" style="background-color: #FF0000;">
                    YOUTUBE MUSIC
                </div>
            </a>
            <a href="https://zedkaido.bandcamp.com/track/bachs-ghost-in-the-machine" target="_blank">
                <div class="zkLink" style="background-color: #629aa9;">
                    BANDCAMP
                </div>
            </a>
            <a href="https://soundcloud.com/zedkaido/bachs-ghost-in-the-machine" target="_blank">
                <div class="zkLink" style="background-color: #F26F23;">
                    SOUNDCLOUD
                </div>
            </a>
        </div>
       <div class="spacer"></div>
       <iframe width="100%" height="200px" src="https://www.youtube.com/embed/PHMrW97rvPU" title="Bach's Ghost In The Machine - YouTube Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <div class="spacer"></div>
       <p>If you liked it, make sure to check out my uniquely designed <a href="/merch">merch</a>, it sings too!</p>
       <div class="spacer"></div>
    </div>
</PostTemplate>
