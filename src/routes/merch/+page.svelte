<script>
	import { onMount } from 'svelte';
	import { shuffle } from '$lib/utils';
	import ProductTemplate from './ProductTemplate.svelte';

	let loading = true;
	let error = false;
	let errorMessage = 'Something went wrong. Try again, later!';

	/** @type {any} */
	let products = [];

	onMount(async () => {
		try {
			loadProducts();
		} catch (e) {
			loading = false;
			error = true;
			errorMessage = 'Something went wrong: (' + e.statusCode + '). Try again, later';
			console.log(e);
		}
	});

	const loadProducts = async () => {
		const res = await fetch(
			`https://api.gumroad.com/v2/products?access_token=S-FKrBHKE9472KYZF8GYbnZAvyFAUBagVh1zXAuhkSc`
		);
		const response = await res?.json();
		error = !response?.success;
		products = response?.products;
		shuffle(products);
		loading = false;
	};
</script>

<svelte:head>
	<title>Zed Kaido: Merch</title>
	<meta
		name="description"
		content="Shop for my official merchandise and take a piece of my music with you everywhere you go. From unique t-shirts, hoodies and accessories, you'll find everything you need to show off your love for my music and make your look stand out. Come and check it out!"
	/>
	<meta
		name="keywords"
		content="zed kaido, merch, merchandise, brand, official, t-shirts, hoodies, accessories, music, fashion"
	/>
</svelte:head>

<blockquote>Add some beats to that look! It's music to everyone's eyes!</blockquote>

<div class="gap" />

{#if loading}
	<h2>█ Loading...</h2>
{:else if error}
	<div>
		<h1>Oops ⚠️😵‍💫🙀</h1>
		<p>{errorMessage}</p>
	</div>
{:else}
	<div class="products">
		{#each products as product}
			<ProductTemplate {product} />
		{/each}
	</div>
{/if}

<style>
	.products {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		grid-gap: var(--gap);
	}
</style>
