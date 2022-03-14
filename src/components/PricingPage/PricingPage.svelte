<script>
  import PricingPageHero from "./pageComponents/PricingPageHero/PricingPageHero.svelte";
  import Rates from "./pageComponents/Rates/Rates.svelte";
  import MidPageBanner from "./pageComponents/MidPageBanner/MidPageBanner.svelte";  
  import { simulatorRates } from './pageComponents/Rates/simulatorRates';
  import Accordion from "./pageComponents/Accordion/Accordion.svelte";
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

<Accordion content = {{
  header: "Simulator Private Pilot Training",
  items: [{
    label: "PPL Phase 1",
    fileUrl: "/",
  }]
}} />