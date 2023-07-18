<script>
	import VideoPlayerWrapper from '$lib/components/VideoPlayerWrapper.svelte';
	import YoutubeEmbed from '$lib/components/YoutubeEmbed/Youtube.svelte';
	import AudioPlayer from '$lib/components/AudioPlayer/AudioPlayer.svelte';
	import CompactAudioPlayer from '$lib/components/CompactAudioPlayer.svelte';
	import ShowContent from '../ShowContent.svelte';
	import TrackList from '../TrackList.svelte';
	import shows from '$lib/data/dj-shows.json';
	const show = shows.find((show) => show.id === 1);
</script>

<svelte:head>
	<title>{show?.title} | Zed Kaido</title>
</svelte:head>

<ShowContent>
	{#if show}
		<VideoPlayerWrapper>
			<YoutubeEmbed id={show.youtubeId} customThumb={show.thumbnail} />
			<div class="gap" />
			<AudioPlayer src={show.audio} preload="none">
				<CompactAudioPlayer title={show.title} />
			</AudioPlayer>
		</VideoPlayerWrapper>
		<h4>{show.date} | {show.location}</h4>
		<TrackList>
			<b>00:00</b> | Intro<br />
			<b>00:13</b> | Starry Eyed Surprise - Paul Oakenfold<br />
			<b>04:08</b> | Code Red - DJ Jazzy Jeff<br />
			<b>07:12</b> | Got to Be a Love (Paul Nice Remix) - Greyboy, Quantic, Sharon Jones<br />
			<b>10:43</b> | Hands High - Krafty Kuts<br />
			<b>13:54</b> | Guard The Fort - Krafty Kuts<br />
			<b>18:10</b> | Breezin The Candy Shop - Wuki<br />
			<b>19:50</b> | Bango - Jay Lima<br />
			<b>23:24</b> | Shake Down - Keyklova<br />
			<b>24:43</b> | Mr. Saxobeat - Steve Void & DMNDS<br />
			<b>27:20</b> | Raveille - Timmy Trumpet<br />
			<b>29:14</b> | REKT - LSDREAM & Kayoh<br />
			<b>30:57</b> | Get Up N Go - The Funk Hunters<br />
			<b>34:04</b> | The Beginning - Danni Gato<br />
			<b>38:31</b> | Simple - The Floozies<br />
			<b>41:59</b> | Flute Dub - Subtronics<br />
			<b>44:40</b> | Coco Song - AronChupa, Flamingoz<br />
			<b>47:43</b> | Tupinambá - KSHMR<br />
			<b>50:30</b> | Freaks - Timmy Trumpet, Savage<br />
			<b>53:50</b> | Your Body - Tom Novy, Cat Dealers, Michael Marshall<br />
			<b>54:27</b> | Solta a Pressão - Chemical Surf, Kaskade<br />
			<b>57:54</b> | Outro - M83<br />
		</TrackList>
	{:else}
		...
	{/if}
</ShowContent>
