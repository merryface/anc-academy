<script>
  import { Router, Route } from 'svelte-routing';
  import { simulatorPage } from "../components/PricingPage/pricingPagesData/simulatorPage"
  import { simulatorRates } from '../components/PricingPage/pricingPagesData/pricingData/simulatorRates';

  import Home from "../components/home/Home.svelte";
  import About from '../components/About/About.svelte';
  import NotFound from './404.svelte';
  import Seminars from '../components/Seminars/Seminars.svelte';
  
  import Pricing from '../components/Pricing/Pricing.svelte';
  import PricingPage from '../components/PricingPage/PricingPage.svelte';
  
  import Book from '../components/Book/Book.svelte';
  import EmailSent from '../components/Book/ContactForm/EmailSent.svelte';
  import Terms from '../components/Terms/Terms.svelte';
  import JoinUs from '../components/JoinUs/JoinUs.svelte';
  export let url = '';
</script>

<Router {url}>
  <Route path="/"><Home/></Route>
  <Route path="about"><About /></Route>
  <Route path="seminars"><Seminars /></Route>
  <Route path="book"><Book /></Route>
  
  <Route path="pricing"><Pricing /></Route>
  <Route path="pricing-simulator"><PricingPage content={simulatorPage} pricingInfo={simulatorRates} /></Route>

  <Route path="emailSent"><EmailSent /></Route>
  <Route path="terms-and-conditions"><Terms /></Route>
  <Route path="join-us"><JoinUs /></Route>

  <Route component={NotFound} />
</Router>