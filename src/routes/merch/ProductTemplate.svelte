<script type="text/javascript">
 export let product;
</script>

<a class="product" href={"https://store.zedkaido.com/l/" + product?.custom_permalink} target="_blank">
    <img class="productThumbnail" alt={product?.name} src={product?.thumbnail_url} />
    <div class="productHeader">
        {#if product?.name}
            <div class="productName zeroMargin">
                <h3>{product?.name}</h3>
            </div>
        {/if}
        {#if product?.formatted_price}
            <div class="productPrice zeroMargin">
                <h4>{product?.formatted_price}</h4>
            </div>
        {/if}
    </div>
    {#if product?.custom_summary}
        <div class="productSummary zeroMargin">
            <p>{@html product?.custom_summary}</p>
        </div>
    {/if}
</a>

<style>
 .product {
     display: flex;
     flex-direction: column;
     width: 100%;
     border: var(--default-border);
     border-radius: var(--default-border-radius);
     overflow: hidden;
     text-decoration: none;
 }

 .product:hover {
     transform: translate(-0.25rem, -0.25rem);
     box-shadow: var(--secondary-color) 0.25rem 0.25rem;
     background-color: var(--accent);
     color: var(--contrast-accent);
 }

 .productThumbnail {
     width: 100%;
     height: var(--default-height);
     border-bottom: var(--default-border);
 }

 .productHeader {
     min-height: 80px;
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
     border-bottom: var(--default-border);
 }

 .productName {
     height: 100%;
     width: 100%;
     padding: var(--default-padding) 15px var(--default-padding) var(--default-padding);
     border-right: var(--default-border);
 }

 .productPrice {
     align-self: center;
     transform: rotate(90deg);
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
     padding: var(--default-padding);
 }

</style>
