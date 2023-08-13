<script>
	/** @type {string} */
	export let lang = 'plaintext';

	/** @type {string} */
	export let path = '';

	/** @type {boolean} */
	export let showCopyButton = true;

	/** @type {string} */
	export let code = '';

	function copyText() {
		if (code) {
			navigator.clipboard.writeText(code);
		}
	}	
</script>

<div class="code-wrapper">
	{#if path || showCopyButton}
		<div class="code-header">
			<span>{path || lang}</span>
			<button class="button-no-style" on:click={copyText}>copy</button>
		</div>
	{/if}
	<pre class={'language-' + lang}><code>{code}</code></pre>
</div>

<style>
	.code-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: var(--color-code-header-bg);
		color: var(--color-code-header-fg);
		width: 100%;
		box-sizing: border-box;
		font-size: var(--text-sm);
		overflow: auto;
	}

	.code-header > span {
		padding: var(--padding);
	}

	button {
		margin-left: 1rem;
		padding: var(--padding);
	}

	code {
		white-space: pre !important;
	}
</style>
