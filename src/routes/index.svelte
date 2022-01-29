<script>
  import { Router, Route } from 'svelte-routing';
  import Home from "../components/home/Home.svelte";
  import About from '../components/About/About.svelte';
  import NotFound from './404.svelte';
  import Seminars from '../components/Seminars/Seminars.svelte';
  import Pricing from '../components/Pricing/Pricing.svelte';
  import Book from '../components/Book/Book.svelte';
  import EmailSent from '../components/Book/ContactForm/EmailSent.svelte';
  export let url = '';
</script>

<Router {url}>
  <Route path="/" component={Home} />
  <Route path="about" component={About} />
  <Route path="pricing" component={Pricing} />
  <Route path="seminars" component={Seminars} />
  <Route path="book" component={Book} />

  <Route path="emailSent" component={EmailSent} />
  <Route component={NotFound} />
</Router>