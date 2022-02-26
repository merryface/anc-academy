<script>
  export let content;
</script>

<section class="MidPageBanner">
  <img src={content.imageUrl} alt={content.imageAlt} class="MidPageBanner__banner">
  <div class="MidPageBanner__container">
    <p class="MidPageBanner__text">
      {@html content.text}
    </p>
  </div>
</section>