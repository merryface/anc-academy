<script>
  import {content} from './SeminarsHero';
</script>

<section class="FreeSeminars" style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url({content.imageUrl})">
  <div class="FreeSeminars__container">
    <div class="FreeSeminars__text">
      <h1 class="FreeSeminars__title">{content.title}</h1>
      <p class="FreeSeminars__subtitle">{content.subtitle}</p>
    </div>
  </div>
</section>

<style lang="scss">
  @import './seminars-hero.scss';
</style>