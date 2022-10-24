<script>
	import { onMount } from 'svelte';
	import zkMainImage from '$lib/images/zk_main.jpg';
 	import zkContactImage from '$lib/images/zk_contact.webp';
 	import zkRectangle from '$lib/images/zk_rectangle.svg';
 	import zkMixer from '$lib/images/zk_mixer.svg';
 	import zkPlayButton from '$lib/images/zk_play_button.svg';
 	import zkPauseButton from '$lib/images/zk_pause_button.svg';

	let menuItems = [
		{ url: '#zkContent', title: '~' },
		{ url: '#zkMusicLink', title: 'Music' },
		{ url: '#zkDjSessionsLink', title: 'DJ Events' },
		{ url: '#zkLinks', title: 'Links' },
		{ url: '#zkContactMe', title: 'Contact Me' }
	];

	// url: '#zkMerch', title: 'Merch'

	let selectedMenuItem = menuItems[0].url;

	const onSectionClicked = (target, menuItem) => {
		selectedMenuItem = menuItem.url;
		scrollIntoView(target);
	}

	const scrollIntoView = ({ target }) => {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}

 	let zkPlayer;
 	let samplePlaying = false;

	let wi = {
		"events": [
			{
				"description": "...",
				"title": "...",
				"url": ""
			},
			{
				"description": "...",
				"title": "..."
			}
		],
		live: {
			isLive: false,
			url: "https://twitch.tv/zedkaido",
			text: "I AM<br><b>LIVE</b><br>ON TWITCH"
		},
		"musicAnnouncement": "transcend this existance and jump into a state of dance",
		"merch": [
			{
				"img": "img_link_0",
				"price": "...",
				"url": "..."
			},
			{
				"img": "img_link_1",
				"price": "...",
				"url": "..."
			},
			{
				"img": "img_link_1",
				"price": "...",
				"url": "..."
			},
			{
				"img": "img_link_1",
				"price": "...",
				"url": "..."
			}
		],
		"musicLinks": [
			"link0",
			"link1"
		],
		"nextEvent": {
			"description": "...",
			"title": "...",
			"url": ""
		}
	};

	let websiteInfoPromise;

	onMount(async () => {
		websiteInfoPromise = fetchWebsiteInfo();
	});

	const fetchWebsiteInfo = async () => {
		const response = await fetch(`https://zedkaido-fee92-default-rtdb.europe-west1.firebasedatabase.app/website.json`);
		if (response.status === 200) {
			const parsedJson = await response.json();
			if (parsedJson) {
				wi = parsedJson;
				return parsedJson;
			} else {
				throw new Error("unable to parse json");
			}
		} else {
			throw new Error(response.statusText);
		}
	}

	const getRandomInt = (max) => {
		return Math.floor(Math.random() * max);
	}

 	const updatePlayingState = () => {
		if (samplePlaying) {
			samplePlaying = !samplePlaying;
			zkPlayer.pause();
		} else {
			samplePlaying = !samplePlaying;
			if (wi.musicLinks) {
				const fileToPlay = getRandomInt(wi.musicLinks.length)
				zkPlayer.src = wi.musicLinks[fileToPlay];
				zkPlayer.play();
			}
		}
	}

</script>

<svelte:head>
	<title>Zed Kaido (Artist, DJ, Producer, Coder)</title>
	<meta
		name="description"
		content="@zedkaido with music that makes your transcend this existance and jump into a state of dance. "
	/>
</svelte:head>

<section>
	<div id="zkDescription">
		<span id="zkDescriptionArtist">/ˈɑːtɪst/</span>
		<span id="zkDescriptionDj">/ˈdiːdʒeɪ/</span>
		<span id="zkDescriptionProducer">/prəˈdjuːsə/</span>
		<span id="zkDescriptionCoder">/ˈkəʊdə/</span>
	</div>

	<div id="zkScrollIndicator">
		<span>dance within your soul &nbsp; <span style="font-weight: 800; color: var(--accent-color);">&gt; &gt;</span></span>
	</div>

	<div id="zkGoTop">
			 <a href="#zkContent"
					on:click|preventDefault={(t) => {onSectionClicked(t, { url: '#zkContent', title: '~' });}}>
				 ^
			 </a>
	</div>

	<div id="zkContent">
		<span class="zkTitle"><span style="color: var(--accent-color);">@</span>zedkaido</span>

		<div id="zkImageContainer">
			<img draggable="false" class="zkImage" src={zkMainImage} alt="DJ Zed Kaido" />
		</div>

		<div id="zkMusic" class="zkSection">
			<div id="zkMusicLink" class="zkLinkToScroll"></div>
			<div class="zkSectionTitleWrapper">
				<div class="zkSectionTitlePointer"/>
				<span class="zkSectionTitle">MUSIC</span>
			</div>
			<div class="zkHorizontalLinks">
				<a href="https://spotify.com/zedkaido" target="_blank">
					<div class="zkButton" style="background-color: #1DB954;">
						SPOTIFY
					</div>
				</a>
				<a href="https://soundcloud.com/zedkaido" target="_blank">
					<div class="zkButton" style="background-color: #F26F23;">
						SOUNDCLOUD
					</div>
				</a>
				<a href="https://tidal.com/zedkaido" target="_blank">
					<div class="zkButton" style="background-color: #101010;">
						TIDAL
					</div>
				</a>
				<a href="https://itunes.com/zedkaido" target="_blank">
					<div class="zkButton" style="background-color: #fc3c44;">
						ITUNES
					</div>
				</a>
			</div>

			<span id="zkMusicAnnouncement">{wi ? wi.musicAnnouncement : ''}</span>

			<div class="zkMixerContainer" >
				<div id="zkMixerImage" style="background-image: url({zkMixer})" alt="DJ Mixer">
					<audio bind:this={zkPlayer}
								 on:ended={updatePlayingState}
								 controls style="display: none;">
					</audio>
					{#if !samplePlaying}
						<div id="playButtonContainer" on:click={updatePlayingState}>
							<img id="zkPlayButton" src={zkPlayButton}  alt="Play Zed Kaido music sample"/>
						</div>
					{:else}
						<div id="pauseButtonContainer" on:click={updatePlayingState}>
							<img id="zkPauseButton" src={zkPauseButton} alt="Pause Zed Kaido music sample"/>
						</div>
					{/if}
				</div>
			</div>
			<span id="zkPlayDescription">click <span style="color: var(--accent-color); font-weight: 800;">play</span> and get a <span style="font-weight: 800;">sample</span></span>
		</div>

		<div id="zkDjSessions" class="zkSection">
			<div id="zkDjSessionsLink" class="zkLinkToScroll"></div>
			<div class="zkSectionTitleWrapper">
				<div class="zkSectionTitlePointer"/>
				<span class="zkSectionTitle">DJ EVENTS</span>
			</div>
			<div class="zkEvents">
				<div class="zkEvent zkNextEvent">
					<a href="{wi.nextEvent ? wi.nextEvent.url : ''}" target="_blank">
						<span class="zkEventTitle">{wi.nextEvent ? wi.nextEvent.title : ''}</span>
					</a>
					<span class="zkEventDescription">{wi.nextEvent ? wi.nextEvent.description : ''}</span>
				</div>
				{#if wi.events}
					{#each wi.events as event}
						<div class="zkEvent">
							<a href={event.url} target="_blank">
								<span class="zkEventTitle">{event.title}</span>
							</a>
							<span class="zkEventDescription">{event.description}</span>
						</div>
					{/each}
				{/if}
				<a href="https://twitter.com/zedkaido" class="zkGetNotified" target="_blank">** get notified</a>
			</div>
		</div>

		{#if wi.merch}
			<div id="zkMerch" class="zkSection">
				<div class="zkSectionTitleWrapper">
					<div class="zkSectionTitlePointer"/>
					<span class="zkSectionTitle">MERCH</span>
				</div>
				<div class="zkMerch">
					{#each wi.merch as merchItem}
						<a href={merchItem.url} target="_blank">
							<div class="zkMerchItem" style="background-image: url({merchItem.img});">
								<span class="zkButton zkMerchItemPrice">{merchItem.price}</span>
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/if}

		<div id="zkLinks" class="zkSection">
			<div class="zkSectionTitleWrapper">
				<div class="zkSectionTitlePointer"/>
				<span class="zkSectionTitle">LINKS</span>
			</div>
			<div class="zkLinksContainer">
				<a href="https://mixcloud.com/zedkaido" target="_blank">
					<div class="zkButton" style="background-color: #3A00FF; color: #FFFFFF;">
						MIXCLOUD
					</div>
				</a>
				<a href="https://www.youtube.com/channel/UCG7thlsan0rud5cEbUq7WGQ" target="_blank">
					<div class="zkButton" style="background-color: #FF0000;">
						YOUTUBE
					</div>
				</a>
				<a href="https://rumble.com/zedkaido" target="_blank">
					<div class="zkButton" style="background-color: #85C742;">
						RUMBLE
					</div>
				</a>
				<a href="https://spotify.com/zedkaido" target="_blank">
					<div class="zkButton" style="background-color: #1DB954;">
						SPOTIFY
					</div>
				</a>
				<a href="https://soundcloud.com/zedkaido" target="_blank">
					<div class="zkButton" style="background-color: #F26F23;">
						SOUNDCLOUD
					</div>
				</a>
				<a href="https://tidal.com/zedkaido" target="_blank">
					<div class="zkButton" style="background-color: #101010;">
						TIDAL
					</div>
				</a>
				<a href="https://itunes.com/zedkaido" target="_blank">
					<div class="zkButton" style="background-color: #fc3c44;">
						ITUNES
					</div>
				</a>
			</div>
		</div>

	</div>

	{#if wi.live}
		{#if wi.live.isLive}
			<a href={wi.live.url} id="liveButton" target="_blank">{@html wi.live.text}</a>
		{/if}
	{/if}

	<div id="zkNavigation">
		<ul>
		{#each menuItems as item (item)}
				<li>
					{#if item.url === selectedMenuItem}
						<a href={item.url}
							 on:click|preventDefault={(t) => {onSectionClicked(t, item);}}
							 class="selectedMenuItem">{item.title}</a>
					{:else}
						<a href={item.url}
							 on:click|preventDefault={(t) => {onSectionClicked(t, item); }}>
							{item.title}
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</div>

	<div id="zkContactMe" style="background-image: url({zkContactImage})">
		<a href="mailto:contact@zedkaido.com">
			send email
		</a>
	</div>
</section>


<style>
	section {
		--zFirstPercentage: 15%;
		--zSecondPercentage: 45%;
		--beginningTopSpacing: 3.8vw;
		--zkSectionPadding: 4.2vw;
		--defaultBorderRadius: 1vw;

		background-color: var(--primary-color);
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	#zkDescription {
		position: absolute;
		top: 9vw;
		width: var(--zFirstPercentage);
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		text-align: right;
		z-index: 1;
	}

	#zkDescription span {
		font-size: 1vw;
		font-weight: 300;
		margin-right: 2vw;
		cursor: text;
		color: var(--text-color);
		background-color: var(--primary-color);
	}

	#zkDescriptionArtist:hover:before {
		content: 'artist';
	}

	#zkDescriptionDj:hover:before {
		content: 'dj';
	}

	#zkDescriptionProducer:hover:before {
		content: 'producer';
	}

	#zkDescriptionCoder:hover:before {
		content: 'coder';
	}

	#zkScrollIndicator {
		position: absolute;
		left: 2.2vw;
		bottom: 12.5vw;
		font-size: 1.1vw;
		font-weight: 300;
		-webkit-transform: rotate(90deg);
		-moz-transform: rotate(90deg);
		-o-transform: rotate(90deg);
		-ms-transform: rotate(90deg);
		transform: rotate(90deg);
		z-index: 1;
		color: var(--text-color);
		background-color: var(--primary-color);
		border-radius: var(--defaultBorderRadius);
		padding: 0.2vw 1vw;
	}

 	#zkRectangle {
		width: 100%;
		position: absolute;
		left: 0;
		top: 40vw;
		z-index: 0;
	}

	#zkGoTop {
		display: none;
		position: fixed;
		font-size: 5vw;
		bottom: 4vw;
		right: 1.5vw;
		padding: 2vw;
		background-color: var(--accent-color);
		border-radius: var(--defaultBorderRadius);
	}

 	#zkGoTop a {
		color: var(--text-color);
	}

 	#zkGoTop:hover {
		cursor: pointer;
	}

	#zkContent {
		margin-left: var(--zFirstPercentage);
		width: var(--zSecondPercentage);
		height: 1;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		background-color: var(--secondary-color);
		z-index: 1;
		padding-bottom: 3vw;
		gap: 6vw;
	}

	.zkTitle {
		font-size: 7vw;
		font-weight: 800;
		margin-top: var(--beginningTopSpacing);
		margin-bottom: -3.8vw;
		margin-left: -0.15vw;
		color: var(--heading-color);
		z-index: 1;
	}

	#zkImageContainer {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-top: -6vw;
	}

	.zkImage {
		width: 100%;
		object-fit: contain;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-o-user-select: none;
		user-select: none;
	}

 	#liveButton {
		position: fixed;
		left: calc(var(--zFirstPercentage) + var(--zSecondPercentage));
		margin-left: 2vw;
		padding: 0.1vw 1vw;
		top: 9vw;
		font-size: 1.2vw;
		border-radius: var(--defaultBorderRadius);
		color: var(--accent-color);
		background-color: var(--text-color);
	}

	#zkNavigation {
		position: fixed;
		left: calc(var(--zFirstPercentage) + var(--zSecondPercentage));
		width: calc(100% - (var(--zFirstPercentage)) + var(--zSecondPercentage));
		bottom: 0;
		padding: 1vw;
	}

	ul {
		text-transform: uppercase;
		font-weight: 800;
		font-size: 1.8vw;
	}

	li {
		margin-bottom: 0.4vw;
		transition: color, font-size .1s ease-in-out;
	}

 	li a {
		padding: 0.1vw 1vw;
		margin-left: -1.1vw;
		border-radius: var(--defaultBorderRadius);
	}

	li .selectedMenuItem {
		color: var(--accent-color);
		font-size: 4.8vw;
		border-radius: var(--defaultBorderRadius);
		padding: 0.1vw 1vw;
		margin-left: -1.1vw;
	}

 	.zkLinkToScroll {
		position: relative;
		top: -15vw;
	}

 	.zkSection {
		display: flex;
		flex-direction: column;
	}

 	.zkSectionTitleWrapper {
		display: flex;
		flex-direction: row;
	}

 	.zkSectionTitlePointer {
		position: relative;
		margin-top: 1vw;
		width: 1vw;
		height: 4.5vw;
		background-color: var(--accent-color);
	}

 	.zkSectionTitle {
		font-size: 5vw;
		font-weight: 800;
		color: var(--heading-color);
		margin-left: calc(var(--zkSectionPadding) - 1vw);
		margin-bottom: 1vw;
	}

 	.zkHorizontalLinks {
		display: flex;
		flex-direction: row;
		gap: 0.5vw;
		margin-left: var(--zkSectionPadding);
		margin-top: -1vw;
	}

 	.zkHorizontalLinks a {
		text-decoration-color: var(--text-color);
	}

 	.zkButton {
		font-size: 1vw;
		color: var(--text-color);
		background-color: var(--accent-color);
		border-radius: var(--defaultBorderRadius);
		padding: 0.1vw 0.5vw;
		cursor: pointer;
		max-width: max-content;
	}

 	.zkButton:hover {
		background-color: var(--accented-color);
	}

 	#zkMusicAnnouncement {
		margin-top: 1vw;
		margin-left: 4.2vw;
		margin-right: 4vw;
		font-weight: 300;
		font-size: 1vw;
		color: var(--text-color);
	}

 	.zkMixerContainer {
		margin-left: var(--zkSectionPadding);
		margin-top: 1.3vw;
	}

 	#zkMixerImage {
		width: 30vw;
		height: 20vw;
		background-repeat: no-repeat;
		background-size: contain;
	}

	@-webkit-keyframes rotating /* Safari and Chrome */ {
		from {
			-webkit-transform: rotate(0deg);
			-o-transform: rotate(0deg);
			transform: rotate(0deg);
			transform-origin: center;
		}
		to {
			-webkit-transform: rotate(360deg);
			-o-transform: rotate(360deg);
			transform: rotate(360deg);
			transform-origin: center;
		}
	}

	@keyframes rotating {
		from {
			-ms-transform: rotate(0deg);
			-moz-transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
			-o-transform: rotate(0deg);
			transform: rotate(0deg);
			transform-origin: center;
		}
		to {
			-ms-transform: rotate(360deg);
			-moz-transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
			-o-transform: rotate(360deg);
			transform: rotate(360deg);
			transform-origin: center;
		}
	}

 	#playButtonContainer {
		position: relative;
		width: 3vw;
		height: 3vw;
		top: 8.7vw;
		left: 10vw;
		z-index: 2;
		cursor: pointer;
	}

 	#playButtonContainer:hover > #zkPlayButton {
		transform: scale(1.15);
	}

 	#zkPlayButton {
		width: 2.2vw;
	}

  #pauseButtonContainer {
		position: relative;
		top: 8.7vw;
		left: 9.7vw;
		z-index: 2;
		cursor: pointer;
	}

  #zkPauseButton {
		width: 2vw;
		-webkit-animation: rotating 2s linear infinite;
		-moz-animation: rotating 2s linear infinite;
		-ms-animation: rotating 2s linear infinite;
		-o-animation: rotating 2s linear infinite;
		animation: rotating 2s linear infinite;
	}

 	#zkPlayDescription {
		position: relative;
		top: 3vw;
		right: -10vw;
		font-size: 0.9vw;
		font-weight: 300;
		color: var(--text-color);
		-webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
	}

 	.zkEvents {
		display: flex;
		flex-direction: column;
		margin-left: var(--zkSectionPadding);
		margin-right: var(--zkSectionPadding);
		gap: 1vw;
	}

 	.zkEvent {
		display: flex;
		flex-direction: column;
		padding: 1vw;
		border-radius: var(--defaultBorderRadius);
		background-color: var(--tertiary-color);
		gap: 0.1vw;
	}

 	.zkEvent:hover {
		transform: scale(1.05);
	}

 	.zkNextEvent {
		background-color: var(--accent-color);
		color: var(--text-color) !important;
	}

 	.zkNextEvent a {
		color: var(--text-color) !important;
	}

 	.zkNextEvent:hover {
		background-color: var(--accented-color);
	}

 	.zkEventTitle {
		font-size: 1.2vw;
		font-weight: 800;
	}

 	.zkEventDescription {
		font-size: 0.8vw;
		font-weight: 300;
	}

 	.zkGetNotified {
		padding: 1vw;
		font-size: 1.2vw;
		font-weight: 800;
		color: var(--accent-color);
	}

 	.zkMerch{
		display: grid;
		margin-left: var(--zkSectionPadding);
		margin-right: var(--zkSectionPadding);
		grid-template-columns: repeat(2, 17vw [col-start]);
		gap: 2vw;
	}

 	.zkMerch a {
		text-decoration-color: var(--text-color);
	}

 	.zkMerchItem {
		width: 100%;
		background-color: var(--tertiary-color);
		background-size: cover;
		height: 20vw;
		border-radius: var(--defaultBorderRadius);
		overflow: hidden;
	}

 	.zkMerchItem:hover {
		transform: scale(1.05);
	}

 	.zkMerchItemPrice {
		position: relative;
		top: 90%;
		left: 4%;
	}

 	#zkLinks {
		display: flex;
		flex-direction: column;
	}

 	.zkLinksContainer {
		display: grid;
		grid-template-columns: repeat(4, 7vw [col-start]);
		margin-left: var(--zkSectionPadding);
		gap: 0.5vw;
	}

 	#zkContactMe {
		bottom: 0;
		width: 100%;
		height: 12.15vw;
		background-color: var(--tertiary-color);
		background-size: cover;
	}

 	#zkContactMe a {
		position: absolute;
	  margin-left: var(--zFirstPercentage);
		color: var(--text-color);
		margin-top: 3.141vw;
		font-size: 5vw;
	}

 	@media only screen and (max-width: 1200px) {
		section {
			--beginningTopSpacing: 5vw;
			--zFirstPercentage: 10%;
			--zSecondPercentage: 80%;
		}

		.zkTitle {
			font-size: 12vw;
			margin-left: -0.3vw;
		}

		#zkDescription {
			display: flex;
			flex-direction: column;
			position: absolute;
			top: unset;
			top: 65vh;
			right: 12vw;
			z-index: 2;
			width: 100%;
		}

		#zkDescription span {
			font-size: 6vw;
			text-align: right;
			background: unset;
			color: var(--text-color);
		}

		#zkScrollIndicator {
			left: -22vw;
			bottom: unset;
			top: 57vh;
			font-size: 4.5vw;
			color: var(--text-color);
			background: unset;
			z-index: 2;
		}

		#zkImageContainer {
			margin-top: -8.7vw;
			height: 100%;
		}

		.zkImage {
			height: 80vh;
			object-fit: cover;
		}

		#zkNavigation {
			display:none
		}

		#zkRectangle {
			top: 60vh;
		}

		#zkGoTop {
			display: none;
		}

		#liveButton {
			position: absolute;
			left: 14.7vw;
			top: 18.5vw;
			z-index: 1;
			background-color: unset;
			font-size: 2.2vw;
		}

		.zkSectionTitlePointer {
			height: 12vw;
		}

		.zkSectionTitle {
			font-size: 11vw;
			margin-bottom: 1vw;
		}

		.zkButton {
			font-size: 2.2vw;
			padding: 0.2vw 1vw;
		}

		.zkHorizontalLinks {
			margin-top: unset;
			gap: 2vw;
		}

		#zkMusicAnnouncement {
			margin-top: 2vw;
			margin-left: 4.2vw;
			margin-right: 4vw;
			font-size: 2vw;
		}

		.zkMixerContainer {
			margin-top: 2.5vw;
		}

		#zkMixerImage {
			width: 55vw;
			height: 40vw;
			background-repeat: no-repeat;
			background-size: contain;
		}

		#zkPlayDescription {
			top: 0vw;
			left: 21vw;
			font-size: 2.1vw;
		}

		#playButtonContainer {
			top: 17.7vw;
			left: 20vw;
		}

		#zkPlayButton {
			width: 4vw;
		}

		#pauseButtonContainer {
			top: 17.6vw;
			left: 19.6vw;
		}

		#zkPauseButton {
			width: 3.6vw;
		}

		.zkEvents {
			gap: 1.5vw;
		}

		.zkEvent {
			padding: 2vw;
			gap: 0.3vw;
		}

		.zkEventTitle {
			font-size: 2.2vw;
		}

		.zkEventDescription {
			font-size: 1.6vw;
		}

		.zkGetNotified {
			padding: 2vw;
			font-size: 2.2vw;
		}

		.zkMerch {
			grid-template-columns: repeat(2, 34vw [col-start]);
			gap: 3vw;
		}

		.zkMerchItem {
			height: 39vw;
		}

		.zkMerchItemPrice {
			top: 87%;
			left: 5%;
		}

		.zkLinksContainer {
			grid-template-columns: repeat(4, 17vw [col-start]);
			gap: 0.7vw;
		}


		#zkContactMe {
			height: 16vw;
		}

		#zkContactMe a {
			font-size: 7vw;
		}
	}

 	@media only screen and (max-width: 700px) {
		section {
			--beginningTopSpacing: 12vw;
			--zFirstPercentage: 8%;
			--zSecondPercentage: 83%;
			--zkSectionPadding: 5vw;
		}

		.zkTitle {
			font-size: 15.5vw;
			margin-left: -0.2vw;
		}

		#zkDescription {
			display: flex;
			flex-direction: column;
			position: absolute;
			top: 70vh;
			right: 12vw;
			z-index: 2;
			width: 100%;
		}

		#zkDescription span {
			font-size: 6vw;
			text-align: right;
			background: unset;
			color: var(--text-color);
		}

		#zkScrollIndicator {
			left: -36vw;
			bottom: unset;
			top: 55vh;
			font-size: 6vw;
			color: var(--text-color);
			background: unset;
			z-index: 2;
		}

		#zkImageContainer {
			margin-top: -7.8vh;
			height: 100%;
		}

		.zkImage {
			height: 80vh;
			object-fit: cover;
		}

		#zkContent {
			gap: 5vh;
		}

		#zkNavigation {
			display:none
		}

		#zkRectangle {
			top: 70vh;
		}

		#zkGoTop {
			display: none;
			width: 4vw;
			height: 8vw;
			font-size: 6vw;
			padding: 3vw;
			z-index: 2;
			opacity: 90%;
		}

		#liveButton {
			position: absolute;
			left: 14.7vw;
			top: 30vw;
			z-index: 1;
			background-color: unset;
			font-size: 4vw;
		}

		.zkSectionTitlePointer {
			height: 14vw;
		}

		.zkSectionTitle {
			font-size: 13vw;
			margin-bottom: 3vw;
		}

		.zkHorizontalLinks {
			flex-direction: column;
			gap: 2vw;
		}

		.zkButton {
			font-size: 6vw;
			padding: 0.2vw 1vw;
		}

		.zkHorizontalLinks {
			margin-top: unset;
		}

		.zkMixerContainer {
			margin-top: 3.5vw;
		}

		#zkMusicAnnouncement {
			margin-top: 3vw;
			margin-left: 4.4vw;
			margin-right: 4vw;
			font-size: 4vw;
		}

		#zkMixerImage {
			width: 80vw;
			height: 55vw;
			background-repeat: no-repeat;
			background-size: contain;
		}

		#zkPlayDescription {
			display: none;
		}

		#playButtonContainer {
			top: 15.8vw;
			left: 19vw;
			padding: 8vw;
		}

		#zkPlayButton {
			width: 7vw;
		}

		#pauseButtonContainer {
			top: 15.6vw;
			left: 18.5vw;
			padding: 8vw;
		}

		#zkPauseButton {
			width: 6vw;
		}

		.zkEvents {
			gap: 4vw;
		}

		.zkEvent {
			padding: 4vw;
			gap: 1vw;
		}

		.zkEvent:hover {
			transform: unset;
		}

		.zkEventTitle {
			font-size: 5vw;
		}

		.zkEventDescription {
			font-size: 3.5vw;
		}

		.zkGetNotified {
			padding: 2vw;
			font-size: 5vw;
		}

		.zkMerch {
			grid-template-columns: repeat(1, 100% [col-start]);
			gap: 3vw;
		}

		.zkMerchItem {
			height: 45vh;
		}

		.zkMerchItem:hover {
			transform: unset;
		}

		.zkMerchItemPrice {
			top: 87%;
			left: 5%;
		}

		.zkLinksContainer {
			grid-template-columns: repeat(1, 80% [col-start]);
			gap: 2.5vw;
			margin-bottom: 3vw;
		}

		#zkContactMe {
			height: 25vw;
		}

		#zkContactMe a {
			font-size: 13.5vw;
		}
	}



</style>
