<script>
  import { Router, Route } from 'svelte-routing';
  import Home from "../components/home/Home.svelte";
  import About from '../components/About/About.svelte';
  import NotFound from './404.svelte';
  import Seminars from '../components/Seminars/Seminars.svelte';
  import Pricing from '../components/Pricing/Pricing.svelte';
  export let url = '';
</script>

<Router {url}>
  <Route path="/" component={Home} />
  <Route path="about" component={About} />
  <Route path="pricing" component={Pricing} />
  <Route path="seminars" component={Seminars} />
  <Route component={NotFound} />
</Router>