<script>
  import IoIosAirplane from 'svelte-icons/io/IoIosAirplane.svelte'
  import { Link } from 'svelte-routing';
  import { setImage, content, cards } from './FreeSeminars.js';

  $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div class="FreeSeminars__triangleTop" />

<section class="FreeSeminars">
  <div class="FreeSeminars__container">
    <div class="FreeSeminars__text">
      <h1 class="FreeSeminars__title">{content.title}</h1>
      <p class="FreeSeminars__summary">{content.summary}</p>
    </div>

    <div class="FreeSeminars__cards">
      {#each cards as {cardTitle, imageSrc, alt}}
      <div class="FreeSeminars__card">
        <h2 class="FreeSeminars__cardTitle">{cardTitle}</h2>
        <div class="FreeSeminars__image">
          <img src="{setImage(imageSrc, innerWidth)}" {alt}>
        </div>
      </div>
      {/each}
    </div>

    <Link to={content.link.url} class="FreeSeminars__link">
      {content.link.linkLabel}
      <div class="icon"><IoIosAirplane /></div>
    </Link>
  </div>
</section>

<div class="FreeSeminars__triangleBottom" />

<style lang="scss">
  @import './free_seminars.scss';
</style>