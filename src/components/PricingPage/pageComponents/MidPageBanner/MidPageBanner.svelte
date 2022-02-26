<script>
  export let content;
</script>

<section class="MidPageBanner">
  <img src={content.imageUrl} alt={content.imageAlt} class="MidPageBanner__banner">
  <div class="MidPageBanner__container">
    <h2 class="MidPageBanner__text">
      {@html content.text}
    </h2>
  </div>
</section>

<style lang="scss">
  @import './mid-page-banner'
</style>