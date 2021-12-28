<script>
  import { Router, Link } from 'svelte-routing';
  import { headerNavItems } from '../headerNavItems';

  let open = false;
  const toggleMenu = () => open = !open;
  const openClass = "HeaderMobile__navMenu-active";
  $: isOpen = open ? openClass : '';
  $: menuOpen = open ? "open" : '';

  let src = "./assets/logo_white.png";
  import MdClose from 'svelte-icons/md/MdClose.svelte'
</script>

<svelte:head>
  {#if open}
    <style>
      body {
      overflow: hidden;
      }
    </style>
  {/if}
</svelte:head>

<header class="HeaderMobile">
  <div class="HeaderMobile__container">
    <img class="HeaderMobile__logo" {src} alt="white ANC logo">
    <div class="HeaderMobile__burgerMenu {menuOpen}" on:click={toggleMenu}>
      <div class="HeaderMobile__burgerLine line1"></div>
      <div class="HeaderMobile__burgerLine line2"></div>
      <div class="HeaderMobile__burgerLine line3"></div>
    </div>
  </div>

  <div class="HeaderMobile__navMenu {isOpen}">
    <div class="HeaderMobile__navMenuTop">
      <img class="HeaderMobile__menuLogo" {src} alt="white ANC logo">
      <div class="HeaderMobile__closeButton" on:click={toggleMenu}>
        <MdClose />
      </div>
    </div>
    <Router>
    <nav class="HeaderMobile__navItems">
      {#each headerNavItems as {label, url}}
      <Link class="HeaderMobile__navItem" to={url} on:click={toggleMenu}>{label}</Link>
      {/each}
    </nav>
    </Router>
  </div>
</header>

<style lang="scss">
  @import "./header-mobile.scss";
</style>