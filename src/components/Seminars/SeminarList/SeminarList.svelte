<script>
  import { content } from './SeminarList';
  import { Link } from 'svelte-routing';
  import IoIosAirplane from 'svelte-icons/io/IoIosAirplane.svelte'
  import Button from '../../global/Button/Buttton.svelte'
</script>

<section class="SeminarList">
  <div class="SeminarList__container">
    <div class="SeminarList__text">
      <h2 class="SeminarList__title">{content.title}</h2>
      <p class="SeminarList__summary">{content.summary}</p>
    </div>

    <div class="SeminarList__seminars">
      {#each content.seminars as seminar}
      <div class="SeminarList__seminar">
        <h3 class="SeminarList__seminarTitle">{seminar.title}</h3>
        <div class="SeminarList__seminarContent">
          <p class="SeminarList__seminarSummary">{seminar.summary}</p>
          <img src={seminar.imageSrc} alt={seminar.imageAlt} class="SeminarList__seminarImage">
        </div>
      </div>
      {/each}
    </div>

    <Button
      url={content.linkUrl}
      label={content.linkLabel}
      colour="white"
      margin="3rem auto"
    />
  </div>
</section>

<style lang="scss">
  @import './seminar-list.scss';
</style>