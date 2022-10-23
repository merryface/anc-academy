<script>
  import { videoUrl, ctaItems, mobileHeroUrl, logo } from './Hero_home';
  import HeroCta from './HeroCta/HeroCta.svelte';
</script>

<section class="HeroHome">
  <div class="HeroHome__video">
    <div class="HeroHome__mobileHeroContainer">
      <img src={mobileHeroUrl} alt="Da42 on the runway at susnet" class="HeroHome__mobileHeroImage">
      <img src={logo} alt="ANC Academy Logo" class="HeroHome__logo">
    </div>

    <video class="HeroHome__videoContent" autoplay muted loop>
      <source src={videoUrl} type="video/mp4">
    </video>
  </div>

  <div class="HeroHome__container">
    <div class="HeroHome__cta">
      {#each ctaItems as {title, url, linkLabel}}
      <HeroCta title={title} url={url} linkLabel={linkLabel} />
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  @import "./hero_home.scss";
</style>