<script>
  import { Router, Link } from 'svelte-routing';
  import { footerNav } from './footer.js';

</script>

<footer class="Footer">
  <div class="Footer__container">
    <p class="Footer__copyright">© {new Date().getFullYear() }, A.N.C Academy</p>
    <Router>
    <nav class="Footer__nav">
      {#each footerNav as {id, label, url}}
      <Link to="{url}" class="Footer__navItem">{label}</Link>
      {#if id !== footerNav.length - 1}
      <span class="Footer__navItem pipe">|</span>
      {/if}
      {/each}
    </nav>
  </Router>
  </div>
</footer>

<style type="text/scss">
  @import './footer.scss';
</style>