<script>
  import {content} from './seminars'
  import Seminar from './Seminar/Seminar.svelte'


</script>

<section class="Seminars">
  <div class="Seminars__container">
    {#each content.sems as sem}
      <Seminar sem={sem} />
    {/each}
  </div>
  <a href={content.discord.url} target="_blank" class="Seminars__discord">
    {content.discord.label}
  </a>
</section>

<style lang="scss">
  @import "./seminars.scss";
</style>