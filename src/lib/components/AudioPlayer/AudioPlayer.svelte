<script>
	import { onMount } from 'svelte';
	import { setAudioContext } from './context';
	import { derived, writable } from 'svelte/store';

	/** @type {string} */
	export let src;

	/** @type {string} */
	export let preload = 'auto';

	/** @type {any} */
	let prevSrc = undefined;

	let duration = writable(0);
	let currentTime = writable(0);
	let volume = writable(1);
	let muted = writable(false);
	let ended = writable(false);
	let repeat = writable(false);
	let playbackRate = writable(1);
	let paused = writable(true);
	let playing = derived(paused, ($paused) => !$paused);

	/** @type {any} */
	let audio;

	$: {
		if (prevSrc !== src) {
			// fix $paused store not sync with audio.paused on src props change
			setTimeout(() => {
				if ($paused) {
					audio?.pause();
				} else {
					audio?.play();
				}
			}, 0);
		}

		prevSrc = src;
	}

	onMount(() => {
		$duration = audio?.duration;
	});

	/** @param {number} t */
	const seekBy = (t) => {
		$currentTime += t;
	};

	/** @param {number} t */
	const seekTo = (t) => {
		$currentTime = t;
	};

	setAudioContext({
		currentTime,
		repeat,
		duration,
		playing,
		volume,
		muted,
		ended,
		paused,
		playbackRate,
		seekBy,
		seekTo
	});
</script>

<div>
	<audio
		bind:volume={$volume}
		bind:duration={$duration}
		bind:currentTime={$currentTime}
		bind:muted={$muted}
		bind:paused={$paused}
		bind:ended={$ended}
		bind:playbackRate={$playbackRate}
		loop={$repeat}
		bind:this={audio}
		{preload}
		style="display: none;"
	>
		<source {src} > 
    HTML5 audio not supported
	</audio>
	<slot />
</div>
