<script>
  import {content} from './OurServices';
</script>

<section class="OurServices">
  <div class="OurServices__container">
    <h2 class="OurServices__title">{content.title}</h2>
    <p class="OurServices__subtitle">{content.subtitle}</p>
    <img src={content.image.url} alt={content.image.alt} class="OurServices__image">

    <div class="OurServices__services">
      {#each content.services as service}
      <div class="OurServices__service">
        <h3 class="OurServices__serviceTitle">{service.title}</h3>
        <p class="OurServices__serviceText">{service.text}</p>
      </div>
      {/each}
    </div>
    <p class="OurServices__bottomNote">{content.bottomNote}</p>
  </div>
</section>

<style type="text/scss">
  @import './our-services.scss';
</style>