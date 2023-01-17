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

<div class="spacer"></div>
<div class="zkEvents">
    {#if loading}
        <br/>
        <h5>█ Loading ... </h5>
    {:else}
        {#if error}
            <br/>
            <h1>Oops ⚠️😵‍💫🙀</h1>
        {:else}
            {#if events}
                {#each events as event}
                    <div class="zkEvent">
                        <a href={event.url} target="_blank">
                            {#if event.date}
                                <h1>{event.date}</h1>
                            {/if}
                            <h2 class="zkEventTitle">{event.title}</h2>
                        </a>
                        <p class="zkEventDescription">{event.description}</p>
                    </div>
                {/each}
            {/if}
        {/if}
    {/if}
    <a href="https://t.me/+KDaW-JQMhCNhZDNk" class="zkGetNotified" target="_blank">** stay up to date</a>
</div>


<style>
 .zkEvents {
     display: flex;
     flex-direction: column;
     gap: 44px;
 }

 .zkEvent {
     display: flex;
     flex-direction: column;
     background-color: var(--primary-color);
 }

 .zkEvent a {
     text-decoration: none;
 }

 .zkGetNotified {
     font-family: 'hk-bold';
     color: var(--accent-color);
 }

</style>
