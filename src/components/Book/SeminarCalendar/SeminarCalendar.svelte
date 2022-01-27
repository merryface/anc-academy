<script>
  import {content} from "./SeminarCalendar.js";
</script>

<section class="SeminarCalendar">
  <div class="SeminarCalendar__container">
    <div class="SeminarCalendar__text">
      <h2 class="title">{content.title}</h2>
      <p class="SeminarCalendar__textBody">{content.textBody}</p>
    </div>
    <iframe class="SeminarCalendar__calendar" title="ANC Academy Calendar" src="https://calendar.google.com/calendar/embed?src=uoof8pemte4fpo86v6vo67uqv8%40group.calendar.google.com&ctz=Europe%2FLondon" style="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
  </div>
</section>

<style lang="scss"></style>