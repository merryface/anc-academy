<script>
  import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte'
  import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte'
  import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte'

  const email= "admin@anc.co.uk";
</script>

<section class="ContactUs">
  <div class="ContactUs__container">
    <h2 class="ContactUs__title">Contact</h2>
    <a href="mailto:{email}" class="ContactUs__email">{email}</a>
    <div class="ContactUs__socialMedia">
      <div class="ContactUs__icon"><FaYoutube /></div>
      <div class="ContactUs__icon"><FaFacebook /></div>
      <div class="ContactUs__icon"><FaInstagram /></div>
    </div>
  </div>
</section>

<style type="text/scss">
  @import './contact_us.scss';
</style>