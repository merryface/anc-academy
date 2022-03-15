<script>
  import PricingPageHero from "./pageComponents/PricingPageHero/PricingPageHero.svelte";
  import Rates from "./pageComponents/Rates/Rates.svelte";
  import MidPageBanner from "./pageComponents/MidPageBanner/MidPageBanner.svelte";  
  import { simulatorRates } from './pageComponents/Rates/simulatorRates';
  import Accordion from "./pageComponents/Accordion/Accordion.svelte";
  import PackageSection from "./pageComponents/PackageSection/PackageSection.svelte";
</script>

<PricingPageHero content= {{
  heading: "Online Flight Simulator Instruction",
  subtitle: "Receive hands-on flight training from the comfort of your home",
  imageUrl: "./assets/bookNowHero.jpg",
  imageAlt: "Image Alt",
  linkLabel: "Book Now"
}} />

<Rates content ={simulatorRates} />

<MidPageBanner content = {{
  imageUrl: './assets/da62CockpitBanner.jpg',
  imageAlt: "Da62 Cockpit",
  text: `We also provide <span class="MidPageBanner__blueText">full courses</span>, not just one off experiences`
}} />


<PackageSection
  summary = "If you are ready to commit to a full training course, you can select one of the packages below to fully immerse yourself in a full training course experience."
  accordionItems = {[
    {
      header: "Simulator Private Pilot Training",
      items: [
        {
        label: "PPL Phase 1",
        fileUrl: "/",
      },
      {
        label: "PPL Phase 2",
        fileUrl: "/",
      },
      {
        label: "PPL Phase 3",
        fileUrl: "/",
      },
      {
        label: "PPL Phase 4",
        fileUrl: "/",
      },
      {
        label: "Full PPL Course",
        fileUrl: "/",
      },
    ]
    }
  ]}
/>