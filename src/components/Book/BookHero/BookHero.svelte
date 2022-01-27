<script>
  import { content } from './BookHero.js'
</script>

<section class="BookingHero">
  <div class="BookingHero__container">
    <p class="AboutHero__text">
      {content.title}
    </p>
  </div>
  <img src={content.image.url} alt={content.image} class="BookingHero__image">
</section>