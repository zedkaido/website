<svelte:head>
    <title>Zed Kaido | Events</title>
    <meta
        name="description"
        content="Get ready to party like there's no tomorrow! From Twitch live streams to club nights out, to big festivals, you are sure to enjoy it. Check out my events page for the hottest upcoming shows and snag your ticket before they're gone."/>
    <meta name="keywords" content="events, concerts, festivals, club nights, tickets, live streams, shows, party">
</svelte:head>

<script>
 import { onMount } from 'svelte'

 let loading = true;
 let error = false;
 let events;

 onMount(async () => {
     try {
        loadEvents();
     } catch (e) {
         error = true;
         console.log(e);
     }
 });

 const loadEvents = async () => {
     const res = await fetch(`https://zedkaido-fee92-default-rtdb.europe-west1.firebasedatabase.app/website/events.json`);
     events = await res.json();
     loading = false;
     console.log(events);
 };
</script>

<section>
    <div class="header">
        <h4>Get ready to dance your socks off at my upcoming events!</h4>
    </div>
    <div class="spacer">
    </div>
    <div class="events">
        {#if loading}
            <br/>
            <h5> █ Loading ... </h5>
        {:else}
            {#if error}
                <br/>
                <h1>Oops ⚠️😵‍💫🙀</h1>
            {:else}
                {#if events}
                    {#each events as event}
                        <a class="event" href="{event.url}" target="_blank">
                            {#if event?.thumbnail_url}
                                {#if event?.thumbnail_size}
                                    <div class="eventThumbnail" style="height: {event?.thumbnail_size};">
                                        <img class="eventImage" style="height: {event?.thumbnail_size};" alt={"A picture depiction of " + event?.title} src={event?.thumbnail_url} />
                                    </div>
                                {:else}
                                    <div class="eventThumbnail">
                                        <img class="eventImage" alt={"A picture depiction of " + event?.title} src={event?.thumbnail_url} />
                                    </div>
                                {/if}
                            {/if}
                            {#if event?.date}
                                <div class="eventDate">
                                    <h2>{event.date}</h2>
                                </div>
                            {/if}
                            {#if event?.title}
                                <div class="eventTitle">
                                    <h3>{event.title}</h3>
                                </div>
                            {/if}
                            {#if event?.description}
                                <div class="eventDescription">
                                    <p>{event.description}</p>
                                </div>
                            {/if}
                        </a>
                    {/each}
                {/if}
            {/if}
        {/if}
        <a href="https://t.me/+KDaW-JQMhCNhZDNk" class="zkGetNotified" target="_blank">** stay up to date</a>
    </div>
</section>

<style>
 .events {
     display: flex;
     flex-direction: column;
     gap: 25px;
 }

 .event {
     display: flex;
     flex-direction: column;
     width: 100%;
     border: var(--default-border);
     background-color: var(--primary-color);
     border-radius: 10px;
     overflow: hidden;
     cursor: pointer;
     text-decoration: none;
 }

 .event:hover {
     curosr: pointer;
     transform: translate(-0.25rem, -0.25rem);
     box-shadow: var(--secondary-color) 0.25rem 0.25rem;
     background-color: var(--accent);
     color: var(--contrast-accent);
 }

 .eventThumbnail {
     width: 100%;
     height: 244px;
     border-bottom: var(--default-border);
 }

 .eventImage {
     height: 100%;
 }

 .eventDate {
     width: 100%;
     padding: var(--default-padding);
     border-bottom: var(--default-border);
 }

 .eventDate * {
     margin: 0;
 }

 .eventTitle {
     padding: var(--default-padding);
     border-bottom: var(--default-border);
 }

 .eventTitle * {
     margin: 0;
 }

 .eventDescription {
     padding: var(--default-padding);
 }

 .zkGetNotified {
     font-family: 'hk-bold';
     color: var(--accent-color);
 }

</style>
