<script>
import PricingPageLink from "../PricingPageLink/PricingPageLink.svelte";
</script>

<PricingPageLink content = {{
  url: "pricing-simulator",
  imageUrl: './assets/bookNowHero.jpg',
  // imageAlt: "alt text",
  label: "Online Flight Simulator Training",
  sublabel: "Learn how to fly using your own flight simulator remotely"
}} />

<PricingPageLink content = {{
  url: "pricing-groundschool",
  imageUrl: './assets/chart.jpg',
  // imageAlt: "alt text",
  label: "Online Groundschool Training",
  sublabel: "Get realtime instruction remotely"
}} />