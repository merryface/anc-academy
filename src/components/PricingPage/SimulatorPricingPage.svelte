<script>
  import { simulatorPage } from "./pricingPagesData/simulatorPage.js"
  import { simulatorRates } from './pricingPagesData/pricingData/simulatorRates';
  
  
  import Rates from "./pageComponents/Rates/Rates.svelte";
  import PricingPageHero from "./pageComponents/PricingPageHero/PricingPageHero.svelte";
  import MidPageBanner from "./pageComponents/MidPageBanner/MidPageBanner.svelte";  
  import PackageSection from "./pageComponents/PackageSection/PackageSection.svelte";
</script>

<PricingPageHero content= {simulatorPage.hero} />
<Rates content ={simulatorRates} />
<MidPageBanner content = {simulatorPage.midPageBanner} />
<PackageSection
  summary = {simulatorPage.trainingPackages.summary}
  accordionItems = {simulatorPage.trainingPackages.packages}
/>
