<script>
  import {content} from './seminars'
</script>

<section class="Seminars">
  <div class="Seminars__container">
    <h3 class="Seminars__seminarTitle">VFR Flying Introduction</h3>
    <div class="Seminars__row">
      <p class="Seminars__label">Date & time:</p>
      <p class="Seminars__dateTime">19th November 2022 at 20:00 UTC</p>
    </div>
    <div class="Seminars__row">
      <p class="Seminars__label">Flight Instructor:</p>
      <p class="Seminars__instructor">Puffmac</p>
    </div>
  </div>
  <a href={content.discord.url} target="_blank" class="Seminars__discord">
    {content.discord.label}
  </a>
</section>

<style lang="scss">
  @import "./seminars.scss";
</style>