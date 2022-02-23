<script>
import PricingPageLink from "../PricingPageLink/PricingPageLink.svelte";
</script>

<section class="PricingPageLinks">
  <div class="PricingPageLinks__container">
    <div class="PricingPageLinks__links">
      <PricingPageLink content = {{
        url: "pricing-simulator",
        imageUrl: './assets/bookNowHero.jpg',
        label: "Online Flight Simulator Training",
        sublabel: "Learn how to fly using your own flight simulator remotely"
      }} />

      <PricingPageLink content = {{
        url: "pricing-groundschool",
        imageUrl: './assets/chart.jpg',
        label: "Online Groundschool Training",
        sublabel: "Get realtime instruction remotely"
      }} />
    </div>

  </div>
</section>

<style lang="scss">
  @import './pricing-page-links';
</style>