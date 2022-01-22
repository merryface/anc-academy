<script>
import { Link } from "svelte-routing";
</script>

<section class="FourOhFour">
  <div class="FourOhFour__container">
    <h1 class="FourOhFour__title">Page Not Found</h1>
    <h2 class="FourOhFour__subtitle">Looks like you got a little lost.</h2>
    <p class="FourOhFour__description">See if you can navigate your way back on track:</p>
    <div class="FourOhFour__nav">
      <Link class="FourOhFour__link" to="home">Home</Link>
      <Link class="FourOhFour__link" to="About">About</Link>
      <Link class="FourOhFour__link" to="seminars">Free Seminars</Link>
      <Link class="FourOhFour__link" to="pricing">Pricing</Link>
    </div>

    <img class="FourOhFour__image" src="./assets/chart.jpg" alt="Navigation Chart">
  </div>
</section>

<style lang="scss">
  @import './404.scss';
</style>