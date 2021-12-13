<script>

  import IoIosAirplane from 'svelte-icons/io/IoIosAirplane.svelte'
</script>

<section class="HeroHome">
  <div class="HerHome__container">
    <div class="HeroHome__cta">
      <div class="HerHome__ctaItem">
        <h2 class="HeroHome__title">Passionate flight simmers wanting Simulator instruction</h2>
        <a href="/pricing-sim" class="HeroHome__link">Simulator Instruction
          <div class="HeroHome__icon">
            <IoIosAirplane />
          </div>
        </a>
      </div>

      <div class="HerHome__ctaItem">
        <h2 class="HeroHome__title">Pilots in training wanting supplemental online instruction</h2>
        <a href="/pricing-sim" class="HeroHome__link">Online Tuition
          <div class="HeroHome__icon">
            <IoIosAirplane />
          </div>
        </a>
      </div>
    </div>
  </div>  
</section>

<style type="text/scss">
  @import "./hero_home.scss";
</style>