<script>
  import { testimonials, content } from './testimonials';
  import FaQuoteLeft from 'svelte-icons/fa/FaQuoteLeft.svelte';
  import FaQuoteRight from 'svelte-icons/fa/FaQuoteRight.svelte';
  import FaChevronLeft from 'svelte-icons/fa/FaChevronLeft.svelte'
  import FaChevronRight from 'svelte-icons/fa/FaChevronRight.svelte'

  $: testimonialShowIndex = 0;
  $: left = id => (testimonialShowIndex - id) * 100;
  $: atEnd = testimonialShowIndex === testimonials.length - 1;
  $: atStart = testimonialShowIndex === 0;
  $: setHeight = index => {
    let calculatedHeight = (testimonials[index].text.length * 10)/(document.body.offsetWidth) * 40 + 60
    let minH = 200
    calculatedHeight = calculatedHeight < minH ? minH : calculatedHeight
    return calculatedHeight;
  } ;

  function resizeTestimonial() {
    setHeight(testimonialShowIndex)
  }

  const prevItem = () => {
    if(testimonialShowIndex > 0) testimonialShowIndex -= 1;
  }
  
  const nextItem = () => {
    if(testimonialShowIndex < testimonials.length - 1) testimonialShowIndex += 1;
  }
</script>
<svelte:window on:resize={resizeTestimonial}/>

<section class="Testimonials">
  <div class="Testimonials__container">
    <h2 class="Testimonials__title">{content.title}</h2>

    <div class="Testimonials__carousel" style="height: {setHeight(testimonialShowIndex)}px">
      {#each testimonials as {id, text, name, title}}
      <div class="Testimonials__carouselItem" style="left: {left(id)}vw" class:show={id === testimonialShowIndex}>
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
      </div>
      {/each}
    </div>

    <div class="Testimonials__navigation">
      <div class="icon left" class:disable={atStart} on:click={prevItem}><FaChevronLeft /></div>
      <div class="Testimonials__pagination">{testimonialShowIndex+1}/{testimonials.length}</div>
      <div class="icon right" class:disable={atEnd} on:click={nextItem}><FaChevronRight /></div>
    </div>
  </div>
</section>

<style lang="scss">
  @import './testimonials.scss';
</style>