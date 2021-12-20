<script>
  import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte'
  import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte'
  import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte'
  import { title, email, socialMediaUrl } from './ContactUs.js';
</script>

<section class="ContactUs">
  <div class="ContactUs__container">
    <h2 class="ContactUs__title">{title}</h2>
    <a href="mailto:{email}" class="ContactUs__email">Email: {email}</a>
    <div class="ContactUs__socialMedia">
      {#each socialMediaUrl as {url, name}}
      <a href="{url}" target="_blank"><div class="ContactUs__icon">
        {#if name === "facebook"} <FaFacebook />
        {:else if name === "youtube"} <FaYoutube />
        {:else if name === "instagram"} <FaInstagram />
        {/if}
      </div></a>
      {/each}
    </div>
  </div>
</section>

<style type="text/scss">
  @import './contact_us.scss';
</style>