<script>
  import IoIosAirplane from 'svelte-icons/io/IoIosAirplane.svelte'
  import { Link } from 'svelte-routing';
  const src = "./assets/homeHeroVideo.mp4"
</script>

<section class="HeroHome">
  <div class="HeroHome__video">
    <video class="HeroHome__videoContent" autoplay muted loop id="myVideo">
      <source {src} type="video/mp4">
    </video>
  </div>

  <div class="HeroHome__container">
    <div class="HeroHome__cta">
      <div class="HeroHome__ctaItem">
        <h2 class="HeroHome__title">Passionate flight simmers wanting Simulator instruction</h2>
        <Link to="pricing-sim" class="HeroHome__link">Simulator Instruction
          <div class="HeroHome__icon">
            <IoIosAirplane />
          </div>
        </Link>
      </div>

      <div class="HeroHome__ctaItem">
        <h2 class="HeroHome__title">Pilots in training wanting supplemental online instruction</h2>
        <Link to="pricing-sim" class="HeroHome__link">Online Tuition
          <div class="HeroHome__icon">
            <IoIosAirplane />
          </div>
        </Link>
      </div>
    </div>
  </div>  
</section>

<style type="text/scss">
  @import "./hero_home.scss";
</style>