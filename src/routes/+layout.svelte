<script>
 import '../app.css';
 import '../styles/fonts.css'
 import { onMount } from 'svelte';
 import zkLogo from '$lib/images/zk_logo.svg';
 import zkHeader from '$lib/images/zk_header.svg';
 import zkPicture from '$lib/images/zk_picture.jpg';
import { page } from '$app/stores';

 let navBar;
 let sticky;
 let stickyHeader = false;

 let route = $page.url.pathname
 let routes = [
     { url: '/', title: 'Music' },
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
        <div id="navBar" class={stickyHeader ? "sticky" : ""} bind:this={navBar}>
            {#each routes as item (item)}
                {#if (item.url.includes("/blog"))}
                    <li class={route.includes("blog") && item.url.includes("/blog") ? "currentRoute" : ""}><a href={item.url} on:click={() => updateRoute(item.url)}>{item.title}</a></li>
                {:else}
                    <li class={route === item.url ? "currentRoute" : ""}><a href={item.url} on:click={() => updateRoute(item.url)}>{item.title}</a></li>
                {/if}
            {/each}
        </div>
        <div class="content">
            <slot />
        </div>
        <div id="emailWrapper">
            <a id="email" href="mailto:contact@zedkaido.com">contact@zedkaido.com</a>
        </div>
        <div id="footer">
            <h2 id="thanks">Thank you for your support!</h2>
            <a id="address" target="_blank" href="https://www.buymeacoffee.com/zedkaido"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=zedkaido&button_colour=840716&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00" /></a>
            <p id="address" target="_blank"><span style="font-family: 'hk-semi-bold';">bitcoin:</span>bc1qlkcrnqlhphreh3efqd8mpdq9hjp04agcnqhvj5 <a href="bitcoin:bc1qlkcrnqlhphreh3efqd8mpdq9hjp04agcnqhvj5">(Link)</a></p>
            <p id="address" target="_blank"><span style="font-family: 'hk-semi-bold';">monero:</span>44UgnirYY4cM6yhJYHpqb6HTiPbeyJQmviaQLvuvN6MkJEShpDmBCoe26kWvYhcCTECHGoUrTHYoefNGtpW4G12kQC7x3vY <a href="monero:44UgnirYY4cM6yhJYHpqb6HTiPbeyJQmviaQLvuvN6MkJEShpDmBCoe26kWvYhcCTECHGoUrTHYoefNGtpW4G12kQC7x3vY">(Link)</a></p>
        </div>
    </main>
</div>


<style>

 main {
     --zkLeftPadding: 15px;
     --zkRightPadding: 15px;
     font-family: 'hk-light';
 }

 .zedkaido-website {
     height: 100vh;
     padding: 0;
     margin: 0 auto;
     max-width: 350px;
 }

 #header {
     width: 100%;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     margin-bottom: 25px;
 }

 #headerBranding {
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     padding-top: 30px;
 }

 #description {
     font-family: "hk-light";
     font-size: 17px;
     color: var(--text-color);
     margin-bottom: 10px;
     padding-right: 8px;
 }

 #navBar {
     display: flex;
     width: 350px;
     background: #ffffff99;
     backdrop-filter: blur(4.4px);
     color: var(--text-color);
     padding: 15px 0 15px 0;
     margin-bottom: 15px;
 }

 li {
     display: inline;
     padding : 0 15px 0 0;
     font-family: 'hk-semi-bold';
     font-size: 16px;
 }

 a:hover {
     color: var(--accent-color);
     text-underline-offset: 5px;
     text-decoration-line: underline;
     text-decoration-style: wavy;
 }

 .currentRoute {
     color: var(--acent-color);
     text-underline-offset: 5px;
     text-decoration-line: underline;
     text-decoration-style: wavy;
 }

 .sticky {
     position: fixed;
     top: 0;
     padding-left: 15px !important;
 }

 .sticky + .content {
     padding-top: 102px;
 }

 .content {
     margin-bottom: 15px;
 }

 #emailWrapper {
     display: flex;
     flex-direction: column;
     word-wrap: break-word;
     border-width: 4px;
     border-style: dotted none dotted none;
     border-color: var(--secondary-color);
     margin: 30px 0 30px 0;
     padding: 24px 0 24px 0;
 }

 #footer {
     display: flex;
     flex-direction: column;
     word-wrap: break-word;
     padding-bottom: 25px;
 }

 #thanks {
     margin-bottom: 20px;
 }

 #address {
     font-family: 'hk-extra-light';
     margin-bottom: 15px;
 }

 #address:hover {
     text-underline-offset: 1px;
 }
</style>
