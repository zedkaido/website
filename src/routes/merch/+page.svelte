<svelte:head>
    <title>Zed Kaido | Merch</title>
    <meta
         name="description"
         content="Shop for my official merchandise and take a piece of my music with you everywhere you go. From unique t-shirts, hoodies and accessories, you'll find everything you need to show off your love for my music and make your look stand out. Come and check it out!"/>
    <meta name="keywords" content="merchandise, brand, official, t-shirts, hoodies, accessories, music, fashion">
</svelte:head>

<script type="text/javascript">
 import { onMount } from 'svelte';
 import ProductTemplate from './ProductTemplate.svelte';

 let loading = true;
 let error = false;
 let errorMessage = "Something went wrong. Try again, later!"
 let products;

 onMount(async () => {
     try {
        loadProducts();
     } catch (e) {
         loading = false;
         error = true;
         errorMessage = "Something went wrong: (" + e.statusCode + "). Try again, later"
         console.log(e);
     }
 });

 const loadProducts = async () => {
     const res = await fetch(
         `https://api.gumroad.com/v2/products?access_token=S-FKrBHKE9472KYZF8GYbnZAvyFAUBagVh1zXAuhkSc`
     );
     const response = await res?.json();
     loading = false;
     error = !response?.success;
     products = response?.products;
 };
</script>

<div class="header">
    <h5>
        Add some beats to that look! It's music to everyone's eyes!
    </h5>
</div>

<div class="spacer"></div>
<div id="products">
    {#if loading}
        <h5> █ Loading ... </h5>
    {:else}
        {#if error}
            <div>
                <h1>Oops ⚠️😵‍💫🙀</h1>
                <p>{errorMessage}</p>
            </div>
        {:else}
            {#each products as product}
                <ProductTemplate product={product} />
            {/each}
        {/if}
    {/if}
</div>

<style>
 #products {
     display: flex;
     flex-direction: column;
     gap: var(--default-list-gap);
 }
</style>
