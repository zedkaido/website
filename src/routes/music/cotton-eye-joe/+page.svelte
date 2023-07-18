<script>
	import TrackPlayerWrapper from '$lib/components/TrackPlayerWrapper.svelte';
	import AudioPlayer from '$lib/components/AudioPlayer/AudioPlayer.svelte';
	import BigAudioPlayer from '$lib/components/BigAudioPlayer.svelte';
	import StreamingLinks from '$lib/components/StreamingLinks.svelte';
	import TrackContent from '../TrackContent.svelte';
	import tracks from '$lib/data/tracks.json';

	const track = tracks.find((track) => track.id === 4);
</script>

<svelte:head>
	<title>{track?.title} | Zed Kaido</title>
</svelte:head>

<TrackContent>
	{#if track}
		<TrackPlayerWrapper>
			<AudioPlayer src={track.source} preload="none">
				<BigAudioPlayer cover={track.cover} title={track.title} />
			</AudioPlayer>
			<StreamingLinks {...track?.streamingLinks} download={true} downloadLink={track?.source} />
		</TrackPlayerWrapper>
	{:else}
		...
	{/if}
</TrackContent>
