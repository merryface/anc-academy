<script>
  import PricingPageHero from "./pageComponents/PricingPageHero/PricingPageHero.svelte";
  import Rates from "./pageComponents/Rates/Rates.svelte";
  import { simulatorRates } from './pageComponents/Rates/simulatorRates';
</script>

<PricingPageHero content= {{
  heading: "Online Flight Simulator Instruction",
  subtitle: "Receive hands-on flight training from the comfort of your home",
  imageUrl: "./assets/bookNowHero.jpg",
  imageAlt: "Image Alt",
  linkLabel: "Book Now"
}} />

<Rates content={simulatorRates} />
