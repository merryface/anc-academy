<script>
  import Footer from "./components/global/footer/Footer.svelte";
  import Header from "./components/global/HeaderGlobal.svelte";
  import Router from "./routes/index.svelte";
</script>

<main>
  <Header />
  <Router />
  <div class="footer-outer">
    <Footer />
  </div>
</main>

<style lang="scss">
  /* main {
    position: relative;
    min-height: 100vh;
    padding-bottom: 10rem;

    .footer-outer {
      position: absolute;
      bottom: 0;
      width: 100vw;
    }
  } */
</style>