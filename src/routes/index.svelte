<script>
  import { Router, Route } from 'svelte-routing';
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
  <Route path="/" component={Home} />
  <Route path="about" component={About} />
  <Route path="seminars" component={Seminars} />
  <Route path="book" component={Book} />
  
  <Route path="pricing" component={Pricing} />
  <Route path="pricing-simulator" component={PricingPage} />

  <Route path="emailSent" component={EmailSent} />
  <Route path="terms-and-conditions" component={Terms} />
  <Route path="join-us" component={JoinUs} />

  <Route component={NotFound} />
</Router>