<script>
 import { onMount } from 'svelte';
 import { goto } from '$app/navigation';

 let redirected = false;
 onMount(() => {
     if (!redirected) {
         redirected = true;
         goto('/music');
     }
 })
</script>
