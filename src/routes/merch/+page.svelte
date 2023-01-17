<svelte:head>
    <title>Zed Kaido | Merch</title>
    <meta
         name="description"
         content="Shop for my official merchandise and take a piece of my music with you everywhere you go. From unique t-shirts, hoodies and accessories, you'll find everything you need to show off your love for my music and make your look stand out. Come and check it out!"
         />
    <meta name="keywords" content="merchandise, brand, official, t-shirts, hoodies, accessories, music, fashion">
</svelte:head>

<script type="text/javascript">
 import { onMount } from 'svelte';

 let loading = true;
 let error = false;
 let errorMessage = "Something went wrong. Try again, later!"
 let products;

 onMount(async () => {
     try {
        loadProducts();
     } catch (e) {
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
     console.log(products);
 };

 const buyProduct = (permalink) => {
     console.log(permalink)
     window.open("https://store.zedkaido.com/l/" + permalink, '_blank');
 }

</script>

<div class="header">
    <h4>Add some beats to that look! It's music to everyone's eyes!</h4>
</div>

<div class="spacer"></div>
<div id="products">
    {#if loading}
        <br/>
        <h5>█ Loading ... </h5>
    {:else}
        {#if error}
            <div>
                <h1>Oops ⚠️😵‍💫🙀</h1>
                <p>{errorMessage}</p>
            </div>
        {:else}
            {#each products as product}
                <div class="product" on:click={() => buyProduct(product?.custom_permalink)}>
                    <img class="productImage" alt={product?.name} src={product?.thumbnail_url} />
                    <div class="productHeader">
                        <div class="productName">
                            <h3>{product?.name}</h3>
                        </div>
                        <div class="productPrice">
                            <h4>{product?.formatted_price}</h4>
                        </div>
                    </div>
                    <div class="productSummary">
                        <p>{product?.custom_summary}</p>
                    </div>
                </div>
            {/each}
        {/if}
    {/if}
</div>

<style>
 #products {
     display: flex;
     flex-direction: column;
     gap: 25px;
     --dashed-border: dashed 1px #101010;
 }

 .product {
     display: flex;
     flex-direction: column;
     width: 100%;
     border: var(--dashed-border);
     border-radius: 10px;
     overflow: hidden;
 }

 .product:hover {
     cursor: pointer;
     transform: translate(-0.25rem, -0.25rem);
     box-shadow: var(--secondary-color) 0.25rem 0.25rem;
     background-color: var(--accent);
     color: var(--contrast-accent);
 }

 .productImage {
     width: 100%;
     min-height: 50px;
     border-bottom: var(--dashed-border);
 }

 .productHeader {
     min-height: 80px;
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
     border-bottom: var(--dashed-border);
 }

 .productName {
     height: 100%;
     width: 100%;
     padding: 20px 10px 20px 20px;
     border-right: var(--dashed-border);
 }

 .productName * {
     margin: 0;
 }

 .productPrice {
     align-self: center;
     transform: rotate(90deg);
     margin-right: 13px;
     padding: 5px;
     /* Legacy vendor prefixes that you probably don't need... */
     /* Safari */
     -webkit-transform: rotate(90deg);
     /* Firefox */
     -moz-transform: rotate(90deg);
     /* IE */
     -ms-transform: rotate(90deg);
     /* Opera */
     -o-transform: rotate(90deg);
 }

 .productSummary {
     padding: 20px;
 }
</style>
