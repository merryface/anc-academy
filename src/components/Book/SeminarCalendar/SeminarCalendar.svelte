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
    <iframe SameSite=None class="SeminarCalendar__calendar" title="ANC Academy Calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FLondon&hl=en_GB&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=dW9vZjhwZW10ZTRmcG84NnY2dm82N3VxdjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB" scrolling="yes"></iframe>
  </div>
</section>

<style lang="scss">
  @import "./seminarCalendar.scss";
</style>