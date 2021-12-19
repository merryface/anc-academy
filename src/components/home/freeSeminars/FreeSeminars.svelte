<script>
  import IoIosAirplane from 'svelte-icons/io/IoIosAirplane.svelte'
  import { Link } from 'svelte-routing';

  const selectImage = (image, size) => './assets/seminarImages/' + image + "_" + size + ".jpg";

  const setImage = (image, width) => {
    if (width < 970) return selectImage(image, "mobile");
    if (width > 970) return selectImage(image, "tablet");
    if (width > 1100) return selectImage(image, "mobile");
  }

  $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div class="FreeSeminars__triangleTop" />

<section class="FreeSeminars">
  <div class="FreeSeminars__container">
    <div class="FreeSeminars__text">
      <h1 class="FreeSeminars__title">Free Seminars</h1>
      <p class="FreeSeminars__summary">A.N.C Academy runs regular online seminars so that newcomers can experience what participating in sessions with us is like. Sign up below if you are interested in joining one of these sessions.</p>
    </div>

    <div class="FreeSeminars__cards">
      <div class="FreeSeminars__card">
        <h2 class="FreeSeminars__cardTitle">IFR Flying Introduction</h2>
        <div class="FreeSeminars__image">
          <img src="{setImage("G1000-closeup", innerWidth)}" alt="A320 FCU">
        </div>
      </div>
      <div class="FreeSeminars__card">
        <h2 class="FreeSeminars__cardTitle">A320 Flying Introduction</h2>
        <div class="FreeSeminars__image">
          <img src="{setImage("rainVFR", innerWidth)}" alt="A320 FCU">
        </div>
      </div>
      <div class="FreeSeminars__card">
        <h2 class="FreeSeminars__cardTitle">VFR Navigation Introduction</h2>
        <div class="FreeSeminars__image">
          <img src="{setImage("FCU-closeup", innerWidth)}" alt="A320 FCU">
        </div>
      </div>
    </div>

    <Link to="seminars" class="FreeSeminars__link">
      Find the Next Seminar
      <div class="icon"><IoIosAirplane /></div>
    </Link>
  </div>
</section>

<div class="FreeSeminars__triangleBottom" />

<style type="text/scss">
  @import './free_seminars.scss';
</style>