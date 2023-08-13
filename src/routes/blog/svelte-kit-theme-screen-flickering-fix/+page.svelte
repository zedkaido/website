<script>
	import PostContent from "../PostContent.svelte";
	import Code from "$lib/components/Code.svelte";

	// simplify next line;
	export let data;
	const { c1, c2, c3, c4, c5 } = data.props;
</script>

<svelte:head>
	<title>Implement svelte-kit theme switching without screen flickering on page reload/load | Zed Kaido</title>
</svelte:head>

<PostContent>
	<h4>2023-08-01</h4>
	<h2>
		Implement <span class="variable">svelte-kit</span> theme switching without screen
		flickering on page reload/load
	</h2>
	<p>
		<b>Step 1:</b> Create a svelte <span class="variable">store</span> for managing
		theme state:
	</p>
	<Code code={c1} lang="javascript" path="src/lib/stores/theme.js" />

	<p>
		<b>Step 2:</b> In <span class="variable">+layout.svelte</span> subscribe to
		the theme store created in the previous step and update the
		<span class="variable">document.body</span>
		class list to the current value of the <span class="variable">store</span>.
	</p>
	<Code code={c2} lang="javascript" path="src/routes/+layout.svelte" />

	<p>
		<b>Step 3:</b> Add your preffered method for theme switching:
	</p>
	<Code code={c3} lang="javascript" path="src/routes/+layout.svelte" />

	<p>
		<b>Step 4:</b> Create a <span class="variable">stylesheet.css</span> file
		and define <span class="variable">CSS variables</span> for light and dark
		themes using the <span class="variable">prefers-color-scheme</span> media query.
	</p>
	<Code code={c4} lang="css" path="src/lib/styles/stylesheet.css" />

	<p>
		<b>Step 5:</b> In <span class="variable">app.html</span>, set the initial
		theme class on <span class="variable">document.body</span> based on the stored
		theme or user's color scheme preference.
	</p>
	<Code code={c5} lang="css" path="app.html" />

	<p>
		For reference, checkout the source code for this website:
		<a href="https://github.com/zedkaido/website" target="_blank">
			https://github.com/zedkaido/website
		</a>
	</p>
</PostContent>
