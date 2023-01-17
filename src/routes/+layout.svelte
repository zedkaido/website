<script>
 import '../app.css';
 import '../styles/fonts.css'
 import { onMount } from 'svelte';
 import zkLogo from '$lib/images/zk_logo.svg';
 import zkHeader from '$lib/images/zk_header.svg';
 import zkPicture from '$lib/images/zk_picture.webp';
import { page } from '$app/stores';

 let navBar;
 let sticky;
 let stickyHeader = false;

 let route = $page.url.pathname === "/" ? "/music" : $page.url.pathname;
 let routes = [
     { url: '/music', title: 'Music' },
     { url: '/events', title: 'Events' },
     { url: '/blog', title: 'Blog' },
     { url: '/merch', title: 'Merch' },
     { url: '/socials', title: 'Socials' },
 ];

 const updateRoute = (newRoute) => {
     route = newRoute;
 };

 const onScroll = () => {
     sticky = navBar.offsetTop + 314;
     if (window.pageYOffset > sticky) {
         stickyHeader = true;
     } else {
         stickyHeader = false;
     }
 };
</script>

<svelte:window on:scroll={onScroll} />

<div class="zedkaido-website">
    <main>
        <div id="header">
            <div id="headerBranding">
                <img style="width: 75px;" alt="Zed Kaido Logo" src={zkLogo}/>
                <img style="width: 142px;" alt="Zed Kaido Title"src={zkHeader}/>
            </div>
            <img style="width: 154px;" alt="Zed Kaido Dancing" src={zkPicture}/>
        </div>
        <div id="description">
            Join me on a quest to sonic bliss where we dance and groove to the beat, inspire!
        </div>
        <nav id="navBar" class={stickyHeader ? "sticky" : ""} bind:this={navBar}>
            {#each routes as item (item)}
                {#if (item.url.includes("/blog"))}
                    <li class={route.includes("blog") && item.url.includes("/blog") ? "currentRoute" : ""}><a href={item.url} on:click={() => updateRoute(item.url)}>{item.title}</a></li>
                {:else}
                    <li class={route === item.url ? "currentRoute" : ""}><a href={item.url} on:click={() => updateRoute(item.url)}>{item.title}</a></li>
                {/if}
            {/each}
        </nav>
        <div class="content">
            <slot />
        </div>
        <div id="emailSubscriptionWrapper">
            <p>Join my email list to get a front-row seat at all things Zed Kaido. From blog posts and music releases to special promotions, you won't miss a single beat. Stay updated!</p>
            <form id="follow-form" class="input-with-button" action="https://app.gumroad.com/follow_from_embed_form" method="post" style="--accent:var(--accent);--contrast-accent:var(--contrast-accent)">
                <input type="hidden" name="seller_id" value="1078182701802"/>
                <input id="input" type="email" placeholder="Your email address" name="email" value=""/>
                <button id="button" class="primary" type="submit">
                    Join Now
                </button>
            </form>
            <!-- <br/>
                 <a href="https://t.me/+KDaW-JQMhCNhZDNk" target="_blank">
                 <div class="zkLink" style="background-color: #0088CC; color: #FFFFFF; margin-bottom: 15px;">
                 TELEGRAM CHANNEL
                 </div>
                 </a> -->
        </div>
        <div id="emailWrapper">
            <a id="email" href="mailto:contact@zedkaido.com">contact@zedkaido.com</a>
        </div>
        <div id="footer">
            <!-- <h2 id="thanks">Thank you for your support!</h2> -->
            <p id="address" target="_blank"><span style="font-family: 'hk-semi-bold';">bitcoin:</span>bc1qlkcrnqlhphreh3efqd8mpdq9hjp04agcnqhvj5 <a href="bitcoin:bc1qlkcrnqlhphreh3efqd8mpdq9hjp04agcnqhvj5">[ Link ]</a></p>
            <p id="address" target="_blank"><span style="font-family: 'hk-semi-bold';">monero:</span>44UgnirYY4cM6yhJYHpqb6HTiPbeyJQmviaQLvuvN6MkJEShpDmBCoe26kWvYhcCTECHGoUrTHYoefNGtpW4G12kQC7x3vY <a href="monero:44UgnirYY4cM6yhJYHpqb6HTiPbeyJQmviaQLvuvN6MkJEShpDmBCoe26kWvYhcCTECHGoUrTHYoefNGtpW4G12kQC7x3vY">[ Link ]</a></p>
            <a id="address" target="_blank" href="https://www.buymeacoffee.com/zedkaido">
                <span style="font-family: 'hk-semi-bold';">buymeacoffee.com/zedkaido</span>
            </a>
        </div>
        <div class="separator"/>
        <div class="spacer"/>
        <p>Designed & Developed with ♥️ by Zed Kaido.
        Licenced under <a href="/license.txt" target="_blank">GPLv3</a> [ <a href="https://gitlab.com/zedkaido/website" target="_blank">Gitlab</a> | <a href="https://github.com/zedkaido/website" target="_blank">Github</a> ]
        </p>
        <div class="spacer"/>
    </main>
</div>


<style>

 main {
     --zkLeftPadding: 15px;
     --zkRightPadding: 15px;
     font-family: var(--light-font);
 }

 .zedkaido-website {
     height: 100vh;
     padding: 0;
     margin: 0 auto;
     width: var(--default-width);
     max-width: var(--default-width);
 }

 #header {
     width: 100%;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     margin-bottom: 10px;
 }

 #headerBranding {
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     padding-top: 30px;
 }

 #description {
     font-family: var(--medium-font);
     font-size: 17px;
     color: var(--text-color);
     padding: var(--default-spacing) 8px var(--default-spacing) 0;
 }

 #navBar {
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     gap: 16px 16px;
     width: var(--default-width);
     background: #ffffff99;
     backdrop-filter: blur(4.4px);
     color: var(--text-color);
     padding: 15px 0 16px 0;
     border-top: 1px solid var(--text-color);
     border-bottom: 1px solid var(--text-color);
 }

 li {
     display: inline;
     font-family: 'hk-semi-bold';
     font-size: 16px;
 }

 .currentRoute {
     color: var(--acent-color);
     text-underline-offset: 4px;
     text-decoration-line: underline;
     text-decoration-style: wavy;
 }

 .sticky {
     z-index: 5;
     position: fixed;
     top: 0;
     left: 0;
     justify-content: center;
     border-top: 0px !important;
     width: 100vw !important;
     padding-right: 50px;
 }

 .sticky + .content {
     padding-top: 102px;
 }

 .content {
     margin-bottom: var(--defaultSpacing);
 }

 #emailSubscriptionWrapper {
     word-wrap: break-word;
     border-width: 1px;
     border-style: solid none none none;
     border-color: var(--secondary-color);
     margin: 30px 0 0 0;
     padding: var(--bigger-spacing) 0 0 0;
 }

 #emailWrapper {
     display: flex;
     flex-direction: column;
     word-wrap: break-word;
     border-width: 1px;
     border-style: solid none solid none;
     border-color: var(--secondary-color);
     margin: var(--bigger-spacing) 0 var(--default-spacing) 0;
     padding: var(--bigger-spacing) 0 var(--bigger-spacing) 0;
 }

 #footer {
     display: flex;
     flex-direction: column;
     word-wrap: break-word;
 }

 #thanks {
     margin-bottom: var(--default-spacing);
 }

 #address {
     font-family: 'hk-extra-light';
     margin-bottom: var(--default-spacing);
 }

 #address:hover {
     text-underline-offset: 1px;
 }
</style>
