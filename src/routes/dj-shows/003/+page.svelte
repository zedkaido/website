<script>
	import VideoPlayerWrapper from '$lib/components/VideoPlayerWrapper.svelte';
	import YoutubeEmbed from '$lib/components/YoutubeEmbed/Youtube.svelte';
	import AudioPlayer from '$lib/components/AudioPlayer/AudioPlayer.svelte';
	import CompactAudioPlayer from '$lib/components/CompactAudioPlayer.svelte';
	import ShowContent from '../ShowContent.svelte';
	import TrackList from '../TrackList.svelte';
	import shows from '$lib/data/dj-shows.json';
	const show = shows.find((show) => show.id === 3);
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
			<b>00:00</b> | Intro<br />
			<b>00:15</b> | Mesta - Oceans Orientalis, Ilhan Ersahin<br />
			<b>04:42</b> | Qu'attendez Vous de Moi ? - Degiheugi<br />
			<b>07:50</b> | Rosewood - Bonobo<br />
			<b>11:31</b> | Petit Prince Du Macadam - Folamour<br />
			<b>13:37</b> | Doula (Guerra G, Tiago Sena Remix) - Xaxim, Castelo Branco, Luê<br />
			<b>17:14</b> | Nois No Mesmo Busão (Seletor Chico Remix) - Zaíra e Rapadura<br />
			<b>22:04</b> | Ivoire (feat. Kio Amachree) - Folamour<br />
			<b>29:28</b> | Ome - Black Motion feat. Brenden Praise<br />
			<b>34:18</b> | Tondo - Disclosure, Eko Roosevelt<br />
			<b>39:29</b> | Ghetto in Paradise - Guts<br />
			<b>42:32</b> | EPICA Take 2 - Jean-M Jarre, French 79<br />
		</TrackList>
	{:else}
		...
	{/if}
</ShowContent>
