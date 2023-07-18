<script>
	import VideoPlayerWrapper from '$lib/components/VideoPlayerWrapper.svelte';
	import YoutubeEmbed from '$lib/components/YoutubeEmbed/Youtube.svelte';
	import AudioPlayer from '$lib/components/AudioPlayer/AudioPlayer.svelte';
	import CompactAudioPlayer from '$lib/components/CompactAudioPlayer.svelte';
	import ShowContent from '../ShowContent.svelte';
	import TrackList from '../TrackList.svelte';
	import shows from '$lib/data/dj-shows.json';
	const show = shows.find((show) => show.id === 2);
</script>

<svelte:head>
	<title>{show?.title} | Zed Kaido</title>
</svelte:head>

<ShowContent>
	{#if show}
		<VideoPlayerWrapper>
			<YoutubeEmbed id={show.youtubeId} customThumb={show?.thumbnail} />
			<div class="gap" />
			<AudioPlayer src={show.audio} preload="none">
				<CompactAudioPlayer title={show.title} />
			</AudioPlayer>
		</VideoPlayerWrapper>
		<TrackList>
			<b>00:03</b> | The Heart of Noise, Pt. 1 - Jean-M Jarre<br />
			<b>04:00</b> | Gringos Revenge - Parov Stelar<br />
			<b>07:40</b> | Isla del Sol - Marco Carpentieri<br />
			<b>12:10</b> | Mi Vida - Simon Fava & Yvvan Back<br />
			<b>17:11</b> | Candy Girl (feat. Vallemarie) - Parov Stelar<br />
			<b>20:48</b> | Chicaboom - Leandro Da Silva<br />
			<b>24:28</b> | Mambo No 5 - Jaques Le Noir<br />
			<b>28:50</b> | In The Mood - Jaques Le Noir<br />
			<b>35:13</b> | All That Glitters - Earl<br />
		</TrackList>
	{:else}
		...
	{/if}
</ShowContent>
