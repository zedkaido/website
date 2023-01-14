/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const res = await fetch(`https://zedkaido-fee92-default-rtdb.europe-west1.firebasedatabase.app/website/events.json`);
    const events = await res.json();
    return {events};
}
