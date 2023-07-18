<script>
	/** @type {any} */
	export let product;
</script>

<a
	class="product"
	href={'https://store.zedkaido.com/l/' + product?.custom_permalink}
	target="_blank"
>
	<img loading="lazy" class="product-thumbnail" src={product?.thumbnail_url} alt={product?.name} />
	<div class="product-header">
		{#if product?.name}
			<div class="product-name no-margin">
				<h3>{@html product?.name}</h3>
			</div>
		{/if}
		{#if product?.formatted_price}
			<div class="product-price no-margin">
				<h4>{product?.formatted_price}</h4>
			</div>
		{/if}
	</div>
</a>

<style>
	.product {
		display: flex;
		flex-direction: column;
		width: 100%;
		border: var(--border-default);
		overflow: hidden;
	}

	.product:hover {
		cursor: pointer;
	}

	.product-thumbnail {
		width: 100%;
		height: auto;
		border-bottom: var(--border-default);
	}

	.product-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: var(--size-xl);
		box-sizing: border-box;
	}

	.product-name {
		display: flex;
		align-items: center;
		height: 100%;
		width: 100%;
		padding: var(--padding) var(--padding-sm);
		border-right: var(--border-default);
	}

	.product-price {
		display: flex;
		height: 100%;
		padding: var(--padding-sm);
		align-self: center;
		justify-self: center;
	}

	.product-price h4 {
		align-self: center;
	}
</style>
