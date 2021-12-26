<script>
  import { content } from './SeminarList';
</script>

<section class="SeminarList">
  <div class="SeminarList__container">
    <div class="SeminarList__text">
      <h2 class="SeminarList__title">{content.title}</h2>
      <p class="SeminarList__summary">content.summary</p>
    </div>

    <div class="SeminarList__seminars">
      {#each content.seminars as seminar}
      <div class="SeminarList__seminar">
        <div class="SeminarList__seminarText">
          <h3 class="SeminarList__seminarTitle">{seminar.title}</h3>
          <p class="SeminarList__seminarSummary">{seminar.summary}</p>
        </div>
        <img src={seminar.imageSrc} alt={seminar.imageAlt} class="SeminarList__seminarImage">
      </div>
      {/each}
    </div>
  </div>
</section>