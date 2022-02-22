<script>
import { Link } from "svelte-routing";
export let content;
</script>

<Link class="PricingPageLink" to={content.url}>
  <img src={content.image.url} alt={content.image.alt} class="PricingPageLink__image">
</Link>

<style lang="scss">
  @import './pricing-page-link';
</style>
