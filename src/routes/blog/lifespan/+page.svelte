<script>
	import PostContent from '../PostContent.svelte';

	let currentAge = 18;
	let estimatedLifespan = 69;
	let plannedSleepDuration = 8;
	let plannedWorkDuration = 8;
	let screenTime = 4;

	$: if (estimatedLifespan < currentAge) {
		estimatedLifespan = currentAge;
	}

	$: if (currentAge >= 142) {
		currentAge = 142;
	}

	$: if (estimatedLifespan >= 142) {
		estimatedLifespan = 142;
	}

	$: weeksLeft = (estimatedLifespan - currentAge) * 52;
	$: weeksSpentSleeping = (plannedSleepDuration * 7 * weeksLeft) / 168;
	$: weeksSpentWorking = (plannedWorkDuration * 7 * weeksLeft) / 168;
	$: weeksSpentLookingAtScreens = (screenTime * 7 * weeksLeft) / 168;

	$: totalTimeLeft = Math.round(
		weeksLeft - weeksSpentSleeping - weeksSpentWorking - weeksSpentLookingAtScreens
	);

	const quote = {
		summary:
			"Every moment of your life is a 'last time'! It arrives; you'll never get it again - and once it's passed, your remaining supply of moments will be one smaller than before. To treat all these moments solely as stepping stones to some future moment is to demonstrate a level of obliviousness to our real situation that would be jaw-droppping if it weren't for the fact that we all do it, all the time.",
		author: 'Oliver Burkmen',
		showAuthor: true
	};
</script>

<PostContent>
	<img src="/images/blog/lifespan/thumbnail.webp" alt="how a person looks throught his life" />

	<div id="title">
		<h2>How Many Weeks Do You Have Left? A Reminder to Seize the Day</h2>
	</div>

	<div>
		<blockquote>
			{quote.summary}
			<br /><br />
			--- {quote.author}
		</blockquote>

		<div class="gap-xl" />

		<div class="input-container">
			<label for="currentAge">How old are you?</label>
			<button
				on:click={() => {
					if (currentAge > 0) {
						currentAge -= 1;
					}
				}}>-</button
			>
			<input type="number" id="currentAge" bind:value={currentAge} min="0" max="142" />
			<button
				on:click={() => {
					if (currentAge < 142) {
						currentAge += 1;
					}
				}}>+</button
			>
		</div>
		<div class="input-container">
			<label for="estimatedLifespan">What's your desired lifespan?</label>
			<button
				on:click={() => {
					if (estimatedLifespan > 0) {
						estimatedLifespan -= 1;
					}
				}}>-</button
			>
			<input
				type="number"
				id="estimatedLifespan"
				bind:value={estimatedLifespan}
				min="0"
				max="142"
			/>
			<button
				on:click={() => {
					if (estimatedLifespan < 142) {
						estimatedLifespan += 1;
					}
				}}>+</button
			>
		</div>
		<div class="input-container">
			<label for="plannedSleepDuration">How much do you sleep? (hours/day):</label>
			<button
				on:click={() => {
					if (plannedSleepDuration > 0) {
						plannedSleepDuration -= 1;
					}
				}}>-</button
			>
			<input
				type="number"
				id="plannedSleepDuration"
				bind:value={plannedSleepDuration}
				min="0"
				max={24 - plannedWorkDuration - screenTime}
			/>
			<button
				on:click={() => {
					if (plannedSleepDuration < 24 - plannedWorkDuration - screenTime) {
						plannedSleepDuration += 1;
					}
				}}>+</button
			>
		</div>
		<div class="input-container">
			<label for="plannedWorkDuration">How much do you work? (hours/day):</label>
			<button
				on:click={() => {
					if (plannedWorkDuration > 0) {
						plannedWorkDuration -= 1;
					}
				}}>-</button
			>
			<input
				type="number"
				id="plannedWorkDuration"
				bind:value={plannedWorkDuration}
				min="0"
				max={24 - plannedSleepDuration - screenTime}
			/>
			<button
				on:click={() => {
					if (plannedWorkDuration < 24 - plannedSleepDuration - screenTime) {
						plannedWorkDuration += 1;
					}
				}}>+</button
			>
		</div>
		<div class="input-container">
			<label for="screenTime">What's your screen time? (hours/day):</label>
			<button
				on:click={() => {
					if (screenTime > 0) {
						screenTime -= 1;
					}
				}}>-</button
			>
			<input
				type="number"
				id="screenTime"
				bind:value={screenTime}
				min="0"
				max={24 - plannedWorkDuration - plannedSleepDuration}
			/>
			<button
				on:click={() => {
					if (screenTime < 24 - plannedWorkDuration - plannedSleepDuration) {
						screenTime += 1;
					}
				}}>+</button
			>
		</div>

		<div class="gap-sm" />

		<h2>Free Time Left: ({totalTimeLeft} weeks)</h2>
		{#if totalTimeLeft > 0}
			<div class="grid-of-weeks">
				{#each Array(totalTimeLeft) as _, index (index)}
					<div class="week" id="ageWeek{index}" />
				{/each}
			</div>
		{:else}
			<p>Damn! I mean, if you spend all that time, you literally won't have any free time left.</p>
		{/if}

		<div class="gap-lg" />

		<p>
			If you would like to challenge the way you think about time and your life, I highly recommend <a
				href="https://www.amazon.com/Four-Thousand-Weeks-Management-Mortals/dp/0374159122"
				target="_blank">Four Thousand Weeks: Time Management for Mortals by Oliver Burkeman</a
			>.
		</p>
		<p>
			This book is not your typical time management or productivity book that tells you how to do
			more with less. Instead, it helps you face the reality of your limited and precious life and
			shows you how to live more fully and meaningfully in the face of scarcity.
		</p>
		<p>
			It will help you embrace your finitude, prioritize your values, cultivate gratitude, and find
			joy in the present moment. A must-read for anyone who wants to live well in their {totalTimeLeft}
			weeks left.
		</p>
	</div>
</PostContent>

<style>
	img {
		max-width: 100%;
		width: 100%;
	}

	.input-container > button {
		display: inline-grid;
		align-items: center;
		align-content: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.input-container > button:hover {
		text-decoration: none;
	}

	.input-container {
		width: 100%;
		margin-bottom: var(--gap);
	}

	label {
		display: block;
		font-weight: 400;
		margin-bottom: var(--gap-sm);
	}

	button {
		width: 2.4rem;
		height: 2.4rem;
		text-align: center;
		border: var(--border-default);
	}

	input {
		padding: var(--padding-xs);
		border: var(--border-default);
		font-size: 16px;
	}

	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		opacity: 1;
	}

	.grid-of-weeks {
		width: 100%;
		height: auto;
		display: grid;
		gap: 2px;
		grid-template-columns: repeat(24, 1fr);
	}

	.week {
		width: 100%;
		min-height: 0.5rem;
		height: 1.4rem;
		background-color: var(--color-1);
	}

	@media (max-width: 640px) {
		.week {
			height: 1rem;
		}
	}

	@media (max-width: 500px) {
		.week {
			height: 0.5rem;
		}
	}

	@media (max-width: 342px) {
		.week {
			height: 0.3rem;
		}
	}
</style>
