<script>
	import { getAudioContext } from '$lib/components/AudioPlayer/';
	import { toggle, toHHMMSS } from '$lib/components/AudioPlayer/utils';
	import RangeSlider from './RangeSlider.svelte';

	/** @type {string} */
	export let cover = '';

	/** @type {string} */
	export let title = '';

	/** @type {string} */
	export let link = '';

	const { currentTime, duration, playing, paused } = getAudioContext();

	function toggleAudio() {
		const mediaElements = document.querySelectorAll('video, audio');
		mediaElements.forEach((element) => {
			// @ts-ignore
			element.pause();
		});
		toggle(paused);
	}
</script>

{#if cover}
	<div class="player">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="cover" on:click={toggleAudio}>
			<img src={cover} alt="blue" />
			<button aria-label={$paused ? 'play' : 'pause'}>
				{#if $paused}
					<svg
						width="24"
						height="24"
						viewBox="0 0 62 73"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0.5 0.492188V36.4992V72.5062L62 36.4992L0.5 0.492188Z" fill="#ffffff" />
					</svg>
				{:else}
					<svg
						width="24"
						height="24"
						viewBox="0 0 60 72"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 0V36V72H22V0H0Z" fill="#ffffff" />
						<path d="M38 0V36V72H60V0H38Z" fill="#ffffff" />
					</svg>
				{/if}
			</button>
		</div>
		{#if title}
			<div class="title-wrap">
				{#if link}
					<a href={link}>{title}</a>
				{:else}
					<p>{title}</p>
				{/if}
			</div>
		{/if}
		{#if $duration}
			<div class="slider borderTop">
				{#if $playing}
					<span class="timestamp-left">{toHHMMSS($currentTime)}</span>
					<RangeSlider max={$duration} bind:value={$currentTime} />
					<span class="timestamp-right">{toHHMMSS($duration)}</span>
				{:else}
					<span>{toHHMMSS($currentTime)}</span>
					:
					<span>{toHHMMSS($duration)}</span>
				{/if}
			</div>
		{/if}
	</div>
{/if}

<style>
	.player {
		display: flex;
		flex-direction: column;
		max-width: 100%;
		border: var(--border-default);
		overflow: hidden;
		text-decoration: none;
		text-underline-offset: 0px;
		box-sizing: border-box;
	}

	.cover {
		position: relative;
		display: inline-block;
	}

	.cover img {
		display: block;
		max-width: 100%;
		cursor: pointer;
	}

	@media (min-width: 600px) {
		.cover img {
			min-height: var(--size-6xl);
		}
	}

	button {
		position: absolute;
		bottom: 5%;
		left: 5%;
		width: 60px;
		height: 60px;
		align-items: center;
		background-color: #00000090;
		border: none;
		cursor: pointer;
	}

	button:hover {
		background-color: #000000;
		box-shadow: none;
	}

	.title-wrap {
		padding: var(--padding);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.title-wrap p,
	.title-wrap a {
		margin: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: var(--weight-regular);
	}

	.slider {
		display: flex;
		flex-direction: row;
		gap: 10px;
		padding: var(--padding);
		border-top: var(--border-default);
	}

	.timestamp-left {
		margin-right: var(--padding);
	}

	.timestamp-right {
		margin-left: var(--padding);
	}

	@media (max-width: 600px) {
		.timestamp-left {
			display: none;
		}
		.timestamp-right {
			display: none;
		}
	}
</style>
