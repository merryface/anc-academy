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
</style>