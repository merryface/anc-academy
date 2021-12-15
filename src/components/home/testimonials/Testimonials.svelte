<script>
  import { testimonials } from './testimonials';
  let testimonialShowIndex = 0;
  $: console.log(testimonialShowIndex);
  
</script>

<section class="Testimonials">
  <div class="Testimonials__container">
    <h2 class="Testimonials__title">Testimonials</h2>

    <div class="Testimoials__carousel">
      {#each testimonials as {text, name, title}}
      <figure class="Testimonials__testimonial">
        <blockquote class="Testimonials__text">{text}</blockquote>
        <figcaption class="Testimonials__authorName">{name}</figcaption>
        <cite class="Testimonials__authortitle">{title}</cite>
      </figure>
      {/each}
    </div>
  </div>
</section>

<style type="text/scss">
  @import './testimonials.scss';
</style>