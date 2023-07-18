<script>
	// @type {number}
	export let min = 0;

	// @type {number}
	export let max = 1;

	// @type {number}
	export let value = 0;

	// @type {number}
	export let step = 1;
</script>

<input bind:value {min} {max} {step} type="range" aria-label="Range Slider" />

<style>
	input {
		align-self: center;
		width: 100%;
		color: var(--secondary-color);
		background-color: #00000013;
		-webkit-appearance: none;
		appearance: none;
		margin: 0;
		padding: 0;
		height: 14px;
		float: left;
		outline: none;
		border-radius: 24px;
	}

	input[type='range']::-webkit-slider-runnable-track {
		width: 100%;
		cursor: pointer;
	}

	input[type='range']::-webkit-slider-thumb {
		position: relative;
		-webkit-appearance: none;
		box-sizing: content-box;
		height: 16px;
		width: 16px;
		border-radius: var(--radius-full);
		background: var(--color-1);
		border: 4px solid var(--color-2);
		cursor: pointer;
	}

	input[type='range']:active::-webkit-slider-thumb {
		transform: scale(1.2);
		background: var(--color-1);
		border: 4px solid var(--color-2);
	}
</style>
