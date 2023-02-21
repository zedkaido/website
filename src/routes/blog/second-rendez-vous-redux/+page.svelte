<script>
 import PostTemplate from '../PostTemplate.svelte';
 import posts from '$lib/data/posts.json';
 const post = posts.find(post => post.id === 1);
</script>

<svelte:head>
    <title>Second Rendez-Vous (Redux): A Journey Through Space & Sound | Zed Kaido</title>
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
        <h1>Second Rendez-Vous (Redux): A Journey<br/>Through Space & Sound</h1>
    </div>
    <div slot="content">
        <iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=3682126709/size=small/bgcol=ffffff/linkcol=333333/transparent=true/" seamless><a href="https://zedkaido.bandcamp.com/track/second-rendez-vous-redux">Second Rendez-Vous (Redux) by Zed Kaido</a></iframe>
        <div class="spacer"/>
        <p>
            When it comes to classic tracks, there are few that have stood the test of time quite like <a href="https://open.spotify.com/track/31OX2Wq5revTT0UzpwPJtG?si=b6f1e1ac81a14b0e">"Second Rendez-Vous"</a> by <a href="https://jeanmicheljarre.com/">Jean Michel Jarre</a>. This iconic piece, released in 1986, was a groundbreaking composition that fused together elements of electronic, ambient and space music, creating a unique and timeless sound. The track was a commercial and critical success, and it solidified Jarre's position as one of the pioneers of electronic music.
        </p>

        <h2>A Modern Twist on a<br/> Classic Track</h2>
        <p>
            As a long-time fan of the track, I wanted to put my own spin on it, and bring it to a new audience. I wanted to create a modern, upbeat danceable twist, packed with soaring synths, punchy bass, and driving beats. My vision was to create a track that would transport listeners to another dimension, a journey through space and sound.
        </p>

        <h3>The Process of Creating "Second Rendez-Vous (Redux)"</h3>
        <p>
            Challenging, but rewarding. The final track is 7:27 minutes long, divided into seventeen sections, each with its own story and emotion - I could tell you about each one of them, but I believe it comes to you to define the meaning and the story of the song:
        </p>

        <div class="zkMusicLinks">
            <a href="https://open.spotify.com/track/3yEOjWzIpzqB3WfqfzKyjH?si=7f27640d402d4ded" target="_blank">
                <div class="zkLink" style="background-color: #1DB954;; color: #FFFFFF;">
                    SPOTIFY
                </div>
            </a>
            <a href="https://tidal.com/browse/track/271720996" target="_blank">
                <div class="zkLink" style="background-color: #101010;">
                    TIDAL
                </div>
            </a>
            <a href="https://music.apple.com/us/album/second-rendez-vous-redux/1665747269?i=1665747271" target="_blank">
                <div class="zkLink" style="background-color: #fc3c44;">
                    APPLE MUSIC
                </div>
            </a>
            <a href="https://deezer.page.link/6m2sLS68taqEeYKSA" target="_blank">
                <div class="zkLink" style="background-color: #202020;">
                    DEEZER
                </div>
            </a>
            <a href="https://music.youtube.com/watch?v=0PMRIEptYNU&feature=share" target="_blank">
                <div class="zkLink" style="background-color: #FF0000;">
                    YOUTUBE MUSIC
                </div>
            </a>
            <a href="https://zedkaido.bandcamp.com/track/second-rendez-vous-redux" target="_blank">
                <div class="zkLink" style="background-color: #629aa9;">
                    BANDCAMP
                </div>
            </a>
        </div>
        <div class="spacer"/>

        <h3>A Complex and Intricate Composition</h3>
        <p>
            The soaring synths, punchy bass, driving beats and the tension and propulsion that's simply impossible to resist - a rich and dynamic soundscape. Thought-provoking at best, enjoyable at least ¯\_(ツ)_/¯
        </p>

        <iframe title="Second Rendez-Vous (Redux) - YouTube Embed" width="100%" height="200px" src="https://www.youtube.com/embed/TMMxn9-0eLs" frameborder="0" allowfullscreen>
        </iframe>
        <div class="spacer"/>

        <h2>Experience the Track in Style with Limited-Edition Merchandise</h2>
        <p>
            In addition to the release of "Second Rendez-Vous (Redux)", I am super excited to unveil my limited-edition line of merchandise designed specifically for this release. From exclusive t-shirts and backpacks to tumblers and other accessories featuring mesmerizing patterns of the track cover, each item is designed to be a stylish and functional accessory for any music lover. Whether you're heading to a festival, hitting the club, or just hanging out with friends, this merchandise will help you rep your love for the track in style.
        </p>
        <p>The merchandise is designed to perfectly capture the spirit of the track, and it's a great way to show your support and appreciation for the music. You can find it in <a href="/merch">/merch</a> - Grab it before it's gone!
        </p>
        <div style="display:flex;">
            <a href="/merch">
                <img class="merchAdvert" alt="Zed Kaido's Second Rendez-Vous (Redux) Merch" src="/blog/second-rendez-vous-redux/merch-01-advert.webp"/>
            </a>
        </div>
        <div class="spacer"/>
    </div>
</PostTemplate>

<style>
 .merchAdvert {
     width: 100%;
 }
</style>
