<script>
  let open = false;
  const toggleMenu = () => open = !open;
  const openClass = "HeaderMobile__navMenu-active";
  $: isOpen = open ? openClass : '';

  let src = "./assets/logo_white.png";
</script>

<section class="HeaderMobile">
  <div class="HeaderMobile__container">
    <img class="HeaderMobile__logo" {src} alt="white ANC logo">
    <div class="HeaderMobile__burgerMenu" on:click={toggleMenu}>
      <div class="HeaderMobile__burgerLine line1"></div>
      <div class="HeaderMobile__burgerLine line2"></div>
      <div class="HeaderMobile__burgerLine line3"></div>
    </div>
  </div>

  <div class="HeaderMobile__navMenu {isOpen}">
    <div class="HeaderMobile__navMenuTop">
      <img class="HeaderMobile__menuLogo" {src} alt="white ANC logo">
      <p class="HeaderMobile__closeButton REPLACEwithICON" on:click={toggleMenu}>X</p>
    </div>
    <ul class="HeaderMobile__navItems">
      <li class="HeaderMobile__navItem"><a href="/">Home</a></li>
      <li class="HeaderMobile__navItem"><a href="/about">About</a></li>
      <li class="HeaderMobile__navItem"><a href="/pricing">Pricing</a></li>
      <li class="HeaderMobile__navItem"><a href="/seminar">Seminar</a></li>
      <li class="HeaderMobile__navItem"><a href="/book">Book</a></li>
    </ul>
  </div>
</section>

<style type="text/scss">
  @import "./header-mobile.scss";
</style>