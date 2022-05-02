<script>
  import { Link } from "svelte-routing";
  export let content;
</script>

<section class="PricingPageHero">
  <div class="PricingPageHero__container">
    <div class="PricingPageHero__text">
      <h1 class="PricingPageHero__heading">{content.heading}</h1>
      <p class="PricingPageHero__subtitle">{content.subtitle}</p>
      <Link class="PricingPageHero__link" to="book">{content.linkLabel}</Link>
    </div>
    <img src={content.imageUrl} alt={content.imageAlt} class="PricingPageHero__image">
  </div>
</section>

<style lang="scss">
  @import 'pricing-page-hero.scss'
</style>