<script>
  import {content} from './seminars'
</script>

<section class="Seminars">
  <div class="Seminars__container">
    {#each content.sems as sem}
    <h3 class="Seminars__seminarTitle">{sem.title}</h3>
    <div class="Seminars__row">
      <p class="Seminars__label">Date & time:</p>
      <p class="Seminars__dateTime">{sem.dateTime}</p>
    </div>
    <div class="Seminars__row">
      <p class="Seminars__label">Flight Instructor:</p>
      <p class="Seminars__instructor">{sem.instructor}</p>
    </div>
    {/each}
  </div>
  <a href={content.discord.url} target="_blank" class="Seminars__discord">
    {content.discord.label}
  </a>
</section>

<style lang="scss">
  @import "./seminars.scss";
</style>