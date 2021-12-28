<script>
  import {content} from './AboutHero';
</script>

<section class="AboutHero">
  <div class="AboutHero__container">
    <div class="AboutHero__text">
      <h1 class="AboutHero__title">{content.title}</h1>
      <p class="AboutHero__subtitle">{content.subtitle}</p>
    </div>
    <img src={content.image.url} alt={content.image.alt} class="AboutHero__image">
  </div>
</section>

<style lang="scss">
  @import './about_hero.scss';
</style>