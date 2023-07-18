<script>
	import PostContent from '../PostContent.svelte';
	import Code from '$lib/components/Code.svelte';
</script>

<svelte:head>
	<title>I Decided to Go Offline | Zed Kaido</title>
</svelte:head>

<PostContent>
	<h2>I Decided to Go Offline</h2>

	<p>
		Having access to the internet is a blessing and a curse! In a way you have everything you ever
		need at your fingertips. But, it can also keep you from actually achieving the things you want
		to achieve.
	</p>

	<p>
		What's the point of learning new stuff if you never apply the knowledge and are continually
		tempted to consume more "learning"? What's the point of watching entertaining videos if you
		never get to the state of fullfillness and new entertaining content keeps growing exponentially
		every day? Do you think there will be a point in your life where you will say: "You know what? I
		think I've had enough entertainment for the rest of my life". No! The next day, you will be
		tempted into watching new stuff, either because of FOMO or to avoid the hard work you have in
		front of you! The only way is to cut it off!
	</p>

	<p>
		I noticed that every time I came upon something hard, my brain got into easy mode. You are a
		CMD+Tab away from "Easy Land". The Land where you have infinitesimal amounts of things you can
		do and feel good about it without having to apply any effort.
	</p>

	<p>Do yourself a favor! Get out of your comfort zone! Turn it off!</p>

	<Code lang="bash" code={`networksetup -setnetworkserviceenabled "Ethernet off`} />

	<div class="spacer" />
	<p>
		If you need to do something that requires internet, like sending an already written email or
		researching something you can't advance your work with - go ahead, I give you permission:
	</p>

	<Code lang="bash" code={`networksetup -setnetworkserviceenabled "Ethernet" on`} />

	<div class="spacer" />

	<p>Resolve it and turn it back off!</p>

	<p>Take the time you have to get comfortable with discomfort.</p>

	<p>Be bored. Reflect. Act!</p>

	<p>Thank me later!</p>
</PostContent>
