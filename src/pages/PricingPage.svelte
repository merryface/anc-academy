<script>
export let content;
export let pricingInfo;  
  
  import Rates from "../components/PricingPage/pageComponents/Rates/Rates.svelte";
  import PricingPageHero from "../components/PricingPage/pageComponents/PricingPageHero/PricingPageHero.svelte";
  import MidPageBanner from "../components/PricingPage/pageComponents/MidPageBanner/MidPageBanner.svelte";  
  import PackageSection from "../components/PricingPage/pageComponents/PackageSection/PackageSection.svelte";
</script>

<PricingPageHero content= {content.hero} />
<Rates content ={pricingInfo} />
<MidPageBanner content = {content.midPageBanner} />
<PackageSection
  summary = {content.trainingPackages.summary}
  accordionItems = {content.trainingPackages.packages}
/>
