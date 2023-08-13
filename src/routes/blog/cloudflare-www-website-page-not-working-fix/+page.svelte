<script>
	import PostContent from '../PostContent.svelte';
</script>

<svelte:head>
	<title>How to Redirect www.example.com to example.com | Zed Kaido</title>
	<meta name="keywords" content="fix, solution, redirect" />
</svelte:head>

<PostContent>
	<h4>2023-05-23</h4>
	<h2>
		How to Redirect <span class="variable">www.example.com</span> to
		<span class="variable">example.com</span> in Cloudflare Pages
	</h2>

	<p>
		If you use <b>Cloudflare Pages</b> and, like me, tried visiting the
		<span class="variable">www.website.com</span> version of your website only to find out that it was
		not available, you are in the right place.
	</p>

	<div class="gap-xs" />

	<h3>
		Redirecting <span class="variable">www.example.com</span> to
		<span class="variable">example.com</span>
	</h3>
	<ol>
		<li>
			Open your Cloudflare Dashboard: <a href="https://dash.cloudflare.com"
				>https://dash.cloudflare.com</a
			>
		</li>
		<li>Go to: Websites &gt; <span class="variable">example.com</span> &gt; DNS</li>
		<li>
			Add a DNS record for <span class="variable">www</span> to
			<span class="variable">example.com</span>:
		</li>
		<ul>
			<li><b>Type</b>: A</li>
			<li><b>Name</b>: <span class="variable">www</span></li>
			<li><b>IPv4</b>: 192.0.2.1</li>
		</ul>
		<li>Go to: Rules &gt; Create Page Rule</li>
		<ul>
			<li><b>URL</b>: <span class="variable">www.example.com/*</span></li>
			<li><b>Setting</b>: Forwarding URL</li>
			<li><b>Status Code: 302</b> - Temporary Redirect (to start with)</li>
			<li><b>Destination URL</b>: <span class="variable">https://example.com/$1</span></li>
		</ul>
		<li>Voila! <span class="variable">www.example.com</span> is now accessible!</li>
		<li>
			If this is the desired effect you want, change the <span class="variable">Status Code</span>
			from "302 - Temporary Redirect" to <b>"301 - Permanent Redirect"</b>
		</li>
	</ol>

	<p>
		<b>Note</b>: The asterisk (*) means it will forward all pages, and the $1 will keep the path
		intact (<span class="variable">www.example.com/page</span>
		&rarr; <span class="variable">example.com/page</span>).
	</p>

	<div class="gap" />
	<hr />
	<div class="gap" />

	<h3>
		Redirecting <span class="variable">example.com</span> to
		<span class="variable">www.example.com</span>
	</h3>
	<ol>
		<li>
			Open your Cloudflare Dashboard: <a href="https://dash.cloudflare.com"
				>https://dash.cloudflare.com</a
			>
		</li>
		<li>Go to: Websites &gt; <span class="variable">example.com</span> &gt; DNS</li>
		<li>Add a DNS record for @ to <span class="variable">example.com</span>:</li>
		<ul>
			<li><b>Type</b>: A</li>
			<li><b>Name</b>: @</li>
			<li><b>IPv4</b>: 192.0.2.1</li>
		</ul>
		<li>Go to: Rules &gt; Create Page Rule</li>
		<ul>
			<li><b>URL</b>: <span class="variable">example.com/*</span></li>
			<li><b>Setting</b>: Forwarding URL</li>
			<li><b>Status Code</b>: 302 - Temporary Redirect</li>
			<li><b>Destination URL</b>: <span class="variable">https://www.example.com/$1</span></li>
		</ul>
		<li>
			Voila! <span class="variable">example.com</span> will redirect you to
			<span class="variable">www.example.com</span>!
		</li>
		<li>
			If this is the desired effect you want, change the <span class="variable">Status Code</span>
			from "302 - Temporary Redirect" to <b>"301 - Permanent Redirect"</b>
		</li>
	</ol>

	<p>
		<b>Note</b>: The asterisk (*) means it will forward all pages, and the $1 will keep the path
		intact (<span class="variable">www.example.com/page</span>
		&rarr; <span class="variable">example.com/page</span>).
	</p>
</PostContent>
