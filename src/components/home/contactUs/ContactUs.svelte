<script>
  import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte'
  import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte'
  import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte'

  const email= "admin@anc.co.uk";
  const youtube = "https://www.youtube.com/channel/UCjkotIU0LsTjMTkYap6cjvw";
  const facebook = "https://www.facebook.com/home.php";
  const instagram = "https://www.instagram.com/";
</script>

<section class="ContactUs">
  <div class="ContactUs__container">
    <h2 class="ContactUs__title">Contact</h2>
    <a href="mailto:{email}" class="ContactUs__email">Email: {email}</a>
    <div class="ContactUs__socialMedia">
      <a href="{youtube}" target="_blank"><div class="ContactUs__icon"><FaYoutube /></div></a>
      <a href="{facebook}" target="_blank"><div class="ContactUs__icon"><FaFacebook /></div></a>
      <a href="{instagram}" target="_blank"><div class="ContactUs__icon"><FaInstagram /></div></a>
    </div>
  </div>
</section>

<style type="text/scss">
  @import './contact_us.scss';
</style>