<script>
import { Link } from "svelte-routing";
export let content;
</script>

<Link class="PricingPageLink" to={content.url}>
  <div class="PricingPageLink__container" style="background-image: url({content.imageUrl});">
    <div class="PricingPageLink__text">
      <h2 class="PricingPageLink__label">{content.label}</h2>
      <p class="PricingPageLink__sublabel">{content.sublabel}</p>
    </div>
  </div>
</Link>

<style lang="scss">
  @import './pricing-page-link';
</style>
