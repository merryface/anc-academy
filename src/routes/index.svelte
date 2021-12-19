<script>
  import { Router, Route } from 'svelte-routing';
  import Home from "../components/home/Home.svelte";
  import About from '../components/About/About.svelte';
  
  export let url = '';
</script>

<Router {url}>
  <div>
    <Route path="/" component={Home} />
    <Route path="about" component={About} />
  </div>
</Router>