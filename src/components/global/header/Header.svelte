<script>
  import { Router, Link } from 'svelte-routing';
  import { headerNavItems } from '../headerNavItems';

  let src = "./assets/logo_white.png";
</script>

<header class="Header">
  <div class="Header__container">
    <a href="/"><img class="Header__logo" {src} alt="white ANC logo"></a>
    <Router>
    <nav class="Header__navItems">
      {#each headerNavItems as {label, url}}
      {#if url==="blog"}
      <a class="Header__navItem" href="https://anc-academy-blog.blogspot.com/">{label}</a>
      {:else}
      <Link class="Header__navItem" to={url}>{label}</Link>
      {/if}
      {/each}
    </nav>
    </Router>
  </div>
</header>

<style lang="scss">
  @import "./header.scss";
</style>