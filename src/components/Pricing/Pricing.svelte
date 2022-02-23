<script>
  import PricingHero from "./PricingHero/PricingHero.svelte";
  import Summary from "./Summary/Summary.svelte";
  import PricingPageLinks from "./PricingPageLinks/PricingPageLinks.svelte";
  import TextContent from "./TextContent/TextContent.svelte";
</script>

<div class="pricingBody">
  <PricingHero />
  <Summary />
  <PricingPageLinks />
  <TextContent />
</div>

<style>
.pricingBody {
  min-height: calc(100vh - 16.8rem);
}
</style>

