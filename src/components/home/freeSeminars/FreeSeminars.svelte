<script>
  import IoIosAirplane from 'svelte-icons/io/IoIosAirplane.svelte'

  const selectBackgroundImage = (image, size) => {
    return './assets/seminarImages/' + image + "_" + size + ".jpg";
  }

  const setBackgroundImage = (image, width) => {
    if (width < 970) return selectBackgroundImage(image, "mobile");
    if (width > 970) return selectBackgroundImage(image, "tablet");
    if (width > 1100) return selectBackgroundImage(image, "mobile");
  }

  $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<section class="FreeSeminars">
  <div class="FreeSeminars__container">
    <div class="FreeSeminars__text">
      <h1 class="FreeSeminars__title">Free Seminars</h1>
      <p class="FreeSeminars__summary">A.N.C Academy runs regular online seminars so that newcomers can experience what participating in sessions with us is like. Sign up below if you are interested in joining one of these sessions.</p>
    </div>

    <div class="FreeSeminars__cards">
      <div class="FreeSeminars__card">
        <h2 class="FreeSeminars__cardTitle">IFR Flying Introduction</h2>
        <div class="FreeSeminars__image" style="background-image: url({setBackgroundImage("G1000-closeup", innerWidth)});"/>
      </div>
      <div class="FreeSeminars__card">
        <h2 class="FreeSeminars__cardTitle">A320 Flying Introduction</h2>
        <div class="FreeSeminars__image" style="background-image: url({setBackgroundImage("G1000-closeup", innerWidth)});"/>
      </div>
      <div class="FreeSeminars__card">
        <h2 class="FreeSeminars__cardTitle">VFR Navigation Introduction</h2>
        <div class="FreeSeminars__image" style="background-image: url({setBackgroundImage("FCU-closeup", innerWidth)});"/>
      </div>
    </div>

    <a href="/seminars" class="FreeSeminars__link">
      Find the Next Seminar
      <div class="icon"><IoIosAirplane /></div>
    </a>
  </div>
</section>

<style type="text/scss">
  @import './free_seminars.scss';
</style>