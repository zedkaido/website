<script>
	import zkMainImage from './zk_main.jpg';
	import zkLinksImage from './zk_links.jpg';
	import { spring } from 'svelte/motion';

	let menuItems = [
		{ url: '#zkContent', title: '~' },
		{ url: '#zkLinks', title: 'Links' },
		{ url: '#zkMusic', title: 'My Music' },
		{ url: '#zkMerch', title: 'Merch' },
		{ url: '#zkDjSessions', title: 'DJ Sessions' },
		{ url: '#zkContactMe', title: 'Contact Me' }
	];

	let selectedMenuItem = menuItems[0].url;

	function onSectionClicked(target, menuItem) {
		selectedMenuItem = menuItem.url;
		scrollIntoView(target);
	}

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<svelte:head>
	<title>Zed Kaidō (Artist, DJ, Producer, Coder)</title>
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
		<span>dance within your spirit &gt; &gt;</span>
	</div>

	<div id="zkContent">
		<span class="zkTitle">@zedkaido</span>

		<div class="zkImageContainer">
			<img draggable="false" class="zkImage" src={zkMainImage} alt="Picture of DJ Zed Kaidō" />
		</div>

		<div id="zkLinks" style="margin-top: -8px;" class="zkImageContainer">
			<div style="background-image: url({zkLinksImage});" class="zkImageContent">
				<a href="">patreon.com</a>
				<a href="">patreon.com</a>
				<a href="">patreon.com</a>
				<a href="">patreon.com</a>
				<a href="">patreon.com</a>
				<a href="">patreon..com</a>
				<a href="">patreon.com</a>
				<a href="">patreon.com</a>
				<a href="">patreon.com</a>
				<a href="">patreon.com</a>
				<a href="">patreon.com</a>
				<a href="">patreon.com</a>
				<a href="">patreon.com</a>
				<a href="">patreon.com</a>
				<a href="">patreon.com</a>
				<a href="">patreon.com</a>
				<a href="">patreon.com</a>
				<a href="">patreon.com</a>
				<a href="">patreon.com</a>
				<a href="">patreon.com</a>
			</div>
		</div>

		<div id="zkMusic" style="margin-top: -6px;" class="zkImageContainer">
			<div style="background-image: url({zkLinksImage});" class="zkImageContent" />
		</div>

		<div id="zkMerch" style="margin-top: -6px;" class="zkImageContainer">
			<div style="background-image: url({zkLinksImage});" class="zkImageContent" />
		</div>

		<div id="zkDjSessions" style="margin-top: -6px;" class="zkImageContainer">
			<div style="background-image: url({zkLinksImage});" class="zkImageContent" />
		</div>

		<div id="zkContactMe" style="margin-top: -6px;" class="zkImageContainer">
			<div style="background-image: url({zkLinksImage});" class="zkImageContent" />
		</div>
	</div>

	<div id="zkNavigation">
		<ul>
			{#each menuItems as item (item)}
				<li>
					{#if item.url === selectedMenuItem}
						<a
							href={item.url}
							on:click|preventDefault={(t) => {
								onSectionClicked(t, item);
							}}
							class="selectedMenuItem">{item.title}</a
						>
					{:else}
						<a
							href={item.url}
							on:click|preventDefault={(t) => {
								onSectionClicked(t, item);
							}}>{item.title}</a
						>
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
		--beginningTopSpacing: 3.3vw;

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
		padding-right: 2vw;
		cursor: not-allowed;
		background-color: #ffffff;
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
		left: 4vw;
		bottom: 10vw;
		-webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
		z-index: 0;
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
		margin-bottom: -3.4vw;
		margin-left: -0.3vw;
		z-index: 1;
	}

	.zkImageContainer {
		width: 100%;
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

	.zkImageContent {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 40vw;
		padding: 4vw;
		background-size: contain;
		background-repeat: no-repeat;
	}

 	.zkImageContent a {
		font-size: 1.5vw;
		color: var(--primary-color);
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
	}

	li {
		margin-bottom: 0.4vw;
		transition: color, font-size 1s ease-in-out;
	}

	li.a:hover {
		text-decoration: underline;
		cursor: pointer;
	}

	li .selectedMenuItem {
		font-size: 3vw;
	}
</style>
