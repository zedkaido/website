<script>
  import { page } from '$app/stores';
  import zkErrorPicture from '$lib/images/zk_error_picture.webp'
</script>

<div>
    <div class="spacer"/>
    <a href="/">
        <img src={zkErrorPicture} alt="Zed Kaido Surprised" />
    </a>
    <h1>{$page.status} ⚠️😵‍💫🙀:</h1>
    <h2>{$page.error.message}</h2>
</div>

<style>
 div {
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: flex-start;
 }

 h1 {
     color: var(--accent-color);
     font-family: 'hk-bold';
     font-size: 24px;
     margin-bottom: 0px;
 }

 h2 {
     font-family: 'hk-light';
     font-size: 20px;
     margin-top: 0px;
     margin-bottom: 0px;
 }

 img {
     cursor: pointer;
 }
</style>
