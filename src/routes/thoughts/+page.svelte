<script>
	import { onMount } from 'svelte';
	import { shuffle } from '$lib/utils';
	import thoughts from '$lib/data/thoughts.json';

	/** @type {any} */
	let sts = [];

	function shuffleThoughts() {
		sts = [...thoughts];
		shuffle(sts);
	}

	onMount(() => {
		shuffleThoughts();
	});
</script>

<button on:click={shuffleThoughts}>%</button>

{#each sts as thought}
	<p id={thought.id?.toString()}>{@html thought.content}</p>
{/each}

<style>
	button {
		padding: var(--padding-xs);
	}

	p {
		font-weight: 200;
	}
</style>
