<script>
export let content;
export let pricingInfo;  
  
  import Rates from "./pageComponents/Rates/Rates.svelte";
  import PricingPageHero from "./pageComponents/PricingPageHero/PricingPageHero.svelte";
  import MidPageBanner from "./pageComponents/MidPageBanner/MidPageBanner.svelte";  
  import PackageSection from "./pageComponents/PackageSection/PackageSection.svelte";
</script>

<PricingPageHero content= {content.hero} />
<Rates content ={pricingInfo} />
<MidPageBanner content = {content.midPageBanner} />
<PackageSection
  summary = {content.trainingPackages.summary}
  accordionItems = {content.trainingPackages.packages}
/>
