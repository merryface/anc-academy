<script>
  import {content} from "./SeminarCalendar.js";
  import Seminars from "./Seminars/Seminars.svelte"
</script>

<section class="SeminarCalendar">
  <div class="SeminarCalendar__container">
    <div class="SeminarCalendar__text">
      <h2 class="SeminarCalendar__title">{content.title}</h2>
      <p class="SeminarCalendar__textBody">{content.textBody}</p>
    </div>
    <Seminars />
  </div>
</section>

<style lang="scss">
  @import "./seminarCalendar.scss";
</style>