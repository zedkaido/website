<script>
	import { getAudioContext } from '$lib/components/AudioPlayer';
	import { toggle, toHHMMSS } from '$lib/components/AudioPlayer/utils';
	import RangeSlider from '$lib/components/RangeSlider.svelte';

	/** @type {string} */
	export let cover = '';

	/** @type {string} */
	export let title = '';

	/** @type {string} */
	export let link = '';

	/** @type {boolean} */
	export let hideTopBorder = false;

	const { currentTime, duration, paused } = getAudioContext();

	function toggleAudio() {
		const mediaElements = document.querySelectorAll('video, audio');
		mediaElements.forEach((element) => {
			// @ts-ignore
			element.pause();
		});
		toggle(paused);
	}
</script>

<div class="player" style="border-top: {hideTopBorder ? 'none' : 'var(--border-default);'}">
	{#if cover}
		<a class="imgLink" href={link} style="border-right: var(--border-default);">
			<img src={cover} {title} alt={title} />
		</a>
	{/if}
	<button on:click={toggleAudio} aria-label={$paused ? 'play' : 'pause'}>
		{#if $paused}
			<svg
				width="22"
				height="22"
				viewBox="0 0 62 73"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0.5 0.492188V36.4992V72.5062L62 36.4992L0.5 0.492188Z" fill="var(--color-1)" />
			</svg>
		{:else}
			<svg
				width="22"
				height="22"
				viewBox="0 0 60 72"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0 0V36V72H22V0H0Z" fill="var(--color-1)" />
				<path d="M38 0V36V72H60V0H38Z" fill="var(--color-1)" />
			</svg>
		{/if}
	</button>
	{#if title && $paused}
		<div class="title-wrap">
			{#if link}
				<a href={link}>{title}</a>
			{:else}
				<p>{title}</p>
			{/if}
		</div>
	{:else}
		<div class="audio-player">
			<span class="timestamp-left">{toHHMMSS($currentTime)}</span>
			<RangeSlider max={$duration} bind:value={$currentTime} />
			<span class="timestamp-right">{toHHMMSS($duration)}</span>
		</div>
	{/if}
</div>

<style>
	.player {
		display: flex;
		flex-direction: row;
		align-items: center;
		max-width: 100%;
		height: var(--size-lg);
		border: var(--border-default);
		overflow: hidden;
		text-decoration: none;
		text-underline-offset: 0px;
		box-sizing: border-box;
	}

	img,
	.imgLink {
		height: 100%;
	}

	button {
		width: 50px;
		height: 50px;
		padding: 14px 14px;
		background-color: var(--color-2);
		border: none;
		border-right: var(--border-default);
		cursor: pointer;
	}

	button:hover {
		filter: brightness(96%);
		box-shadow: var(--secondary-color) 0.16rem 0;
	}

	.title-wrap {
		padding: var(--padding);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.title-wrap p,
	.title-wrap a {
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: 400;
	}

	.audio-player {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: var(--padding);
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
