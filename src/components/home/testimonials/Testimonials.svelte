<script>
  import { testimonials } from './testimonials';
  import FaQuoteLeft from 'svelte-icons/fa/FaQuoteLeft.svelte';
  import FaQuoteRight from 'svelte-icons/fa/FaQuoteRight.svelte';
  import FaChevronLeft from 'svelte-icons/fa/FaChevronLeft.svelte'
  import FaChevronRight from 'svelte-icons/fa/FaChevronRight.svelte'

  let testimonialShowIndex = 0;
  
  let left = id => (id - testimonialShowIndex) * 100;

  let prevItem = () => {
    if (testimonialShowIndex === 0) testimonialShowIndex = testimonials.length - 1;
    else testimonialShowIndex -= 1;
  }
  
  let nextItem = () => {
    if (testimonialShowIndex === testimonials.length - 1) testimonialShowIndex = 0;
    else testimonialShowIndex += 1;
  }
</script>

<section class="Testimonials">
  <div class="Testimonials__container">
    <h2 class="Testimonials__title">Testimonials</h2>

    <div class="Testimoials__carousel">
      {#each testimonials as {id, text, name, title}}
      <div class="carouselItem" style="left: {left(id)}">
        <figure class="Testimonials__testimonial" class:show={id === testimonialShowIndex}>
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
      </div>
      {/each}
    </div>

    <div class="Testimonials__navigation">
      <div class="icon left" on:click={prevItem}><FaChevronLeft /></div>
      <div class="Testimonials__pagination">{testimonialShowIndex+1}/{testimonials.length}</div>
      <div class="icon right" on:click={nextItem}><FaChevronRight /></div>
    </div>
  </div>
</section>

<style type="text/scss">
  @import './testimonials.scss';
</style>