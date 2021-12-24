<script>
  import { Router, Route } from 'svelte-routing';
  import Home from "../components/home/Home.svelte";
  import About from '../components/About/About.svelte';
  import NotFound from './404.svelte';
  import Seminars from '../components/Seminars/Seminars.svelte';
  
  export let url = '';
</script>

<Router {url}>
  <div>
    <Route path="/" component={Home} />
    <Route path="about" component={About} />
    <Route path="seminars" component={Seminars} />
    <Route component={NotFound} />
  </div>
</Router>