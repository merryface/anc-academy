<script>
  let open = false;
  const toggleMenu = () => open = !open;
  const openClass = "HeaderMobile__navMenu-active";
  $: isOpen = open ? openClass : '';

  let src = "./assets/logo_white.png";
</script>

<section class="Header">
  <div class="Header__container">
    <a href="/"><img class="Header__logo" {src} alt="white ANC logo"></a>
    <ul class="Header__navItems">
      <li class="Header__navItem"><a href="/">Home</a></li>
      <li class="Header__navItem"><a href="/about">About</a></li>
      <li class="Header__navItem"><a href="/pricing">Pricing</a></li>
      <li class="Header__navItem"><a href="/seminar">Seminar</a></li>
      <li class="Header__navItem"><a href="/book">Book</a></li>
    </ul>
  </div>
</section>

<style type="text/scss">
  @import "./header.scss";
</style>