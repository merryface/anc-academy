<script>
  import { content } from './BookHero.js'
</script>

<section class="BookingHero">
  <div class="BookingHero__container">
    <h1 class="BookingHero__text">
      {content.title}
    </h1>
  </div>
  <img src={content.image.url} alt={content.image} class="BookingHero__image">
</section>

<style lang="scss">
  @import "./bookHero";
</style>