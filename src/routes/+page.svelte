<script>
	import zkMainImage from './zk_main.jpg';
 	import zkLinksImage from './zk_links.jpg';
 	import mouseSoundFollower from './mouseSoundFollower.svg';
 	import { spring } from 'svelte/motion';

 	let menuItems =
		[ "~"
		, "Links"
		, "My Music"
		, "Merch"
		, "DJ Sessions"
		, "Contact Me"];

 let selectedMenuItem = menuItems[2]

 let mouseFollower;
	let coords = spring({ x: 50, y: 50 }, {
		stiffness: 0.9,
		damping: 0.9
	});
</script>

<svelte:head>
	<title>Zed Kaidō (Artist, DJ, Producer, Coder)</title>
	<meta
		name="description"
		content="@zedkaido with music that makes your transcend this existance and jump into a state of dance. "
	/>
</svelte:head>

<svelte:window
	on:click={() => console.log('clicked')}
	on:mousemove={e => coords.set({ x: e.clientX - 35, y: e.clientY - 30 })}/>

<section>
	<img bind:this={mouseFollower} id="mouseFollower" src={mouseSoundFollower} style="position: fixed; left: {$coords.x + 'px'}; top: {$coords.y + 'px'};" />
	<div id="zkDescription">
		<span id="zkDescriptionArtist">/ˈɑːtɪst/</span>
		<span id="zkDescriptionDj">/ˈdiːdʒeɪ/</span>
		<span id="zkDescriptionProducer">/prəˈdjuːsə/</span>
		<span id="zkDescriptionCoder">/ˈkəʊdə/</span>
	</div>

	<div id="zkContent">
		<span class="zkTitle">@zedkaido</span>
		<div class="zkImageContainer">
			<img draggable="false" class="zkImage" src={zkMainImage} alt="Picture of DJ Zed Kaidō" />
		</div>
		<div style="margin-top: -6px;" class="zkImageContainer">
			<img draggable="false" class="zkImage" src={zkLinksImage} alt="Abstract picture of Zed Kaidō" />
		</div>
	</div>

	<div id="zkNavigation">
		<ul>
			{#each menuItems as item (item)}
				<li on:click={() => {selectedMenuItem = item;}}>
					{#if item === selectedMenuItem}
						<a class="selectedMenuItem">{item}</a>
					{:else}
						<a>{item}</a>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
 	#mouseFollower {
		position: absolute;
		width: 75px;
		height: 75px;
	}

	section {
		--zFirstPercentage: 15%;
		--zSecondPercentage: 45%;
		--beginningTopSpacing: 8%;

		height: 100vh;
		width: 100%;
		background-color: white;
		margin: 0;
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: start;
		flex: 1;
	}

	#zkDescription {
		position: fixed;
		top: calc(var(--beginningTopSpacing) + 3.5%);
		width: var(--zFirstPercentage);
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		text-align: right;
	}

	#zkDescription span {
		font-size: 1vw;
		padding-right: 2vw;
		cursor: not-allowed;
	}

 	#zkDescriptionArtist:hover:before {
		content: "artist";
	}

 	#zkDescriptionDj:hover:before {
		content: "dj";
	}

 	#zkDescriptionProducer:hover:before {
		content: "producer";
	}

 	#zkDescriptionCoder:hover:before {
		content: "coder";
	}

	#zkContent {
		margin-left: var(--zFirstPercentage);
		width: var(--zSecondPercentage);
		height: 1;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}

	.zkTitle {
		font-size: 7vw;
		font-weight: 900;
		margin-top: var(--beginningTopSpacing);
		margin-bottom: -3.5vw;
		margin-left: -0.3vw;
		z-index: 1;
	}

 	.zkImageContainer {
		width: 100%;
		min-height: 750px;
		background-color: #f1f1f1;
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

	#zkNavigation {
		position: fixed;
		left: calc(var(--zFirstPercentage) + var(--zSecondPercentage));
		width: calc(100% - (var(--zFirstPercentage)) + var(--zSecondPercentage));
		bottom: 0;
		padding: 1vw;
	}

	ul {
		text-transform: uppercase;
		font-weight: 900;
		font-size: 1.6vw;
		cursor: pointer;
	}

 	li {
		margin-bottom: 0.4vw;
		transition: color, font-size 1s ease-in-out;
	}

 	li:hover {
		text-decoration: underline;
	}

 	li .selectedMenuItem {
		font-size: 3vw;
	}
</style>
