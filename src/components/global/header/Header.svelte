<script>
  import { Router, Link } from 'svelte-routing';
  import { headerNavItems } from '../headerNavItems';

  let open = false;
  const toggleMenu = () => open = !open;
  const openClass = "HeaderMobile__navMenu-active";
  $: isOpen = open ? openClass : '';

  let src = "./assets/logo_white.png";
</script>

<header class="Header">
  <div class="Header__container">
    <a href="/"><img class="Header__logo" {src} alt="white ANC logo"></a>
    <Router>
    <nav class="Header__navItems">
      {#each headerNavItems as {label, url}}
      <Link class="Header__navItem" to={url}>{label}</Link>
      {/each}
    </nav>
    </Router>
  </div>
</header>

<style type="text/scss">
  @import "./header.scss";
</style>