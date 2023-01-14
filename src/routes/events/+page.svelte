<script>
 /** @type {import('./$types').PageData} */
 export let data;
 const events = data.events;
</script>

<div class="zkEvents">
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
