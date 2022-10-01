<script>
  import { page } from '$app/stores';
  import zkMainImage from './zk_main.jpg'
</script>

<div>
  <a href="https://zedkaido.com">
      <img src={zkMainImage} alt="Zed Kaido" />
  </a>
  <h1>{$page.status}: {$page.error.message}</h1>
</div>

<style>
 div {
     padding-top: 7.5vw;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
 }

 h1 {
     color: var(--accent-color);
 }

 img {
     width: 20vw;
     cursor: pointer;
 }
</style>
