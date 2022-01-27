<script>
  import {content} from "./SeminarCalendar.js";
</script>

<section class="SeminarCalendar">
  <div class="SeminarCalendar__container">
    <div class="SeminarCalendar__text">
      <h2 class="SeminarCalendar__title">{content.title}</h2>
      <p class="SeminarCalendar__textBody">{content.textBody}</p>
    </div>
    <iframe SameSite=None class="SeminarCalendar__calendar" title="ANC Academy Calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FLondon&&showTz=0showCalendars=0&showPrint=0&showDate=1&showTitle=0&title&showTabs=0&src=dW9vZjhwZW10ZTRmcG84NnY2dm82N3VxdjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB" scrolling="yes"></iframe>
  </div>
</section>

<style lang="scss">
  @import "./SeminarCalendar.scss";
</style>