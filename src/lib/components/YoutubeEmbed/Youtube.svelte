<script>
	import Button from './Button.svelte';
	import Iframe from './Iframe.svelte';
	import Image from './Image.svelte';
	import CustomImage from './CustomImage.svelte';

	/** @type {string} */
	export let id = '';

	/** @type {boolean} */
	export let altThumb = false;

	/** @type {string} */
	export let customThumb = '';

	let videoInfo = {};
	if (!customThumb) {
		videoInfo = fetch(
			`//www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
		).then((res) => res.json());
	} else {
		videoInfo = {};
	}

	let play = false;
</script>

{#await videoInfo then { title, width, height }}
	<div class="youtube" style="--aspect-ratio:{width / height || '16/9'}">
		{#if play}
			<Iframe {id} {title} />
		{:else if customThumb}
			<CustomImage image={customThumb} {title} />
			<div
				role="button"
				class="overlay"
				on:click={() => (play = true)}
				on:keydown={() => (play = true)}
				tabindex="0"
			/>
		{:else}
			<Image {id} {title} {altThumb} {play} />
			<div
				role="button"
				class="overlay"
				on:click={() => (play = true)}
				on:keydown={() => (play = true)}
				tabindex="0"
			/>
		{/if}
		{#if !play}
			<Button on:click={() => (play = true)} />
		{/if}
	</div>
{/await}

<style>
	.youtube {
		position: relative;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		aspect-ratio: 16/9;
		cursor: pointer;
		transition: var(--overlay-transition, all 250ms ease-in-out);
	}

	.youtube:hover .overlay {
		background: var(--overlay-bg-color, #00000050);
	}
</style>
