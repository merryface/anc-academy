<script>
  import { Router, Link } from 'svelte-routing';
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
      <li class="Header__navItem"><a href="/">Home</a></li>
      <Link class="Header__navItem" to="about">About</Link>
      <li class="Header__navItem"><a href="/pricing">Pricing</a></li>
      <li class="Header__navItem"><a href="/seminar">Seminar</a></li>
      <li class="Header__navItem"><a href="/book">Book</a></li>
    </nav>
    </Router>
  </div>
</header>

<style type="text/scss">
  @import "./header.scss";
</style>