<script>
  import { testimonials } from './testimonials';
  import FaQuoteLeft from 'svelte-icons/fa/FaQuoteLeft.svelte';
  import FaQuoteRight from 'svelte-icons/fa/FaQuoteRight.svelte';

  let testimonialShowIndex = 0;
  $: console.log(testimonialShowIndex);
  
</script>

<section class="Testimonials">
  <div class="Testimonials__container">
    <h2 class="Testimonials__title">Testimonials</h2>

    <div class="Testimoials__carousel">
      {#each testimonials as {text, name, title}}
      <figure class="Testimonials__testimonial">
        <div class="icon icon-top">
          <FaQuoteLeft />
        </div>

        <blockquote class="Testimonials__text">
          {text}
        </blockquote>

        <div class="icon icon-bottom">
          <FaQuoteRight />
        </div>
        <figcaption class="Testimonials__authorName">{name}</figcaption>
        <cite class="Testimonials__authorTitle">{title}</cite>
      </figure>
      {/each}
    </div>
  </div>
</section>

<style type="text/scss">
  @import './testimonials.scss';
</style>