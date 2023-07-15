<script>
	import { page } from '$app/stores';
</script>

<a href="/">
	<img src="/images/error.webp" alt="Zed Kaido Surprised" />
</a>
<h1 class="no-margin">{$page.status}:</h1>
<p class="no-margin">{$page ? $page.error?.message : ''}</p>

<style>
	img {
		width: 4.2rem;
	}
</style>
