<script>
  import IoIosAirplane from 'svelte-icons/io/IoIosAirplane.svelte'
  import { Link } from 'svelte-routing';
  import { videoUrl, ctaItems } from './Hero_home';
</script>

<section class="HeroHome">
  <div class="HeroHome__video">
    <video class="HeroHome__videoContent" autoplay muted loop>
      <source src={videoUrl} type="video/mp4">
    </video>
  </div>

  <div class="HeroHome__container">
    <div class="HeroHome__cta">
      {#each ctaItems as {title, url, linkLabel}}
        <div class="HeroHome__ctaItem">
          <h2 class="HeroHome__title">{title}</h2>
          <Link to={url} class="HeroHome__link">{linkLabel}
            <div class="HeroHome__icon">
              <IoIosAirplane />
            </div>
          </Link>
        </div>
      {/each}
    </div>
  </div>  
</section>

<style type="text/scss">
  @import "./hero_home.scss";
</style>