<script>
 import PostTemplate from '../PostTemplate.svelte';
 import posts from '$lib/data/posts.json';
 const post = posts.find(post => post.id === 4);
</script>

<svelte:head>
    <title>Can Can: Offenbach is In The House | Zed Kaido</title>
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
        <h1>Can Can: Offenbach is<br />In The House</h1>
    </div>
   <div slot="content">
       <iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=1889543827/size=small/bgcol=ffffff/linkcol=333333/transparent=true/" seamless><a href="https://zedkaido.bandcamp.com/track/can-can-offenbach-is-in-the-house">Can Can: Offenbach is In The House by zedkaido</a></iframe>
       <div class="spacer"/>
       <p>
           Behold, the release of "Can Can: Offenbach is in the house", a psytrance track so wild and free that it doth bring to mind the very essence of revelry and joy! From its opening notes, it doth transport thee to a world of sound and color, where thy feet shall tap and thy hips shall sway with abandon.
       </p>
       <p>
           As thou listenest to this most wondrous of tracks, let me delve into the tale of the Can Can dance, that most energetic and lively of dances that inspired this musical creation. In days of yore, in the streets of Paris, the Can Can didst emerge as a symbol of liberation and freedom, with its high-kicking legs and its irreverent spirit. It doth remind us to let loose and be free, to dance, sing and laugh with all our major might!
       </p>
       <iframe width="100%" height="200px" src="https://www.youtube.com/watch?v=kwVP5GDvmgc" title="Can Can: Offenbach is In The House - YouTube Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <div class="spacer"></div>
       <p>
           And what of Jacques Offenbach, the master composer whose "Infernal Galop" didst inspire this very track? He was a man of great talent and vision, who didst create music that spoke to the very soul. His melodies didst soar and his rhythms didst move the heart, and we can only imagine the joy he wouldst feel at the sound of this modern reinvention.
       </p>
       <p>
           So come, my dear readers, let us dance, sing and revel in joy! Let us embrace the spirit of the Can Can, and let our spirits soar with the sound of this wondrous track! For in the end, it is the music that doth bring us together, that doth lift us up and transport us to a world of pure delight.
       </p>
       <p>
           Verily, tarry no longer! Add this most wondrous of musical creations to thy cherished library of sounds, and let its rhythms and melodies fill thy soul with joy and delight! And lo, share it far and wide, that all may partake in the revelry and merriment that it doth inspire. For in the sharing of music, we doth create a community of like-minded souls, bound together by the power of sound and the joy of dance. So go forth, my dear friends, and let "Can Can: Offenbach is in the house" be the soundtrack to thy wildest dreams and most joyous celebrations!
       </p>
        <div class="zkMusicLinks">
            <a href="https://open.spotify.com/track/2WKbHLFbRQN9g0myfjZl8H?si=61f1651738f74a58" target="_blank">
                <div class="zkLink" style="background-color: #1DB954;; color: #FFFFFF;">
                    SPOTIFY
                </div>
            </a>
            <a href="https://tidal.com/browse/track/275748595" target="_blank">
                <div class="zkLink" style="background-color: #101010;">
                    TIDAL
                </div>
            </a>
            <a href="https://music.apple.com/us/album/can-can-offenbach-is-in-the-house/1670703617?i=1670703618" target="_blank">
                <div class="zkLink" style="background-color: #fc3c44;">
                    APPLE MUSIC
                </div>
            </a>
            <a href="https://deezer.page.link/Es5oRVfopLaQEaZW6" target="_blank">
                <div class="zkLink" style="background-color: #202020;">
                    DEEZER
                </div>
            </a>
            <a href="https://music.youtube.com/watch?v=ixSStOeuyUs&feature=share" target="_blank">
                <div class="zkLink" style="background-color: #FF0000;">
                    YOUTUBE MUSIC
                </div>
            </a>
            <a href="https://zedkaido.bandcamp.com/track/can-can-offenbach-is-in-the-house" target="_blank">
                <div class="zkLink" style="background-color: #629aa9;">
                    BANDCAMP
                </div>
            </a>
        </div>
       <div class="spacer"></div>
       <p>If you liked it, make sure to check out my uniquely designed <a href="/merch">merch</a>, it sings too!</p>
       <div class="spacer"></div>
    </div>
</PostTemplate>
