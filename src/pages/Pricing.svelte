<script>
  import PricingHero from "../components/Pricing/PricingHero/PricingHero.svelte";
  import Summary from "../components/Pricing/Summary/Summary.svelte";
  import PricingPageLinks from "../components/Pricing/PricingPageLinks/PricingPageLinks.svelte";
  import TextContent from "../components/Pricing/TextContent/TextContent.svelte";
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

