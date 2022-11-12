<script>
  export let sem;
</script>

<h3 class="Seminar__seminarTitle">{sem.Seminar}</h3>
<div class="Seminar__row">
  <p class="Seminar__label">Date & time:</p>
  <p class="Seminar__dateTime">{sem.Date}</p>
</div>
<div class="Seminar__row">
  <p class="Seminar__label">Flight Instructor:</p>
  <p class="Seminar__instructor">{sem.Instructor}</p>
</div>

<style lang="scss">
  @import "./seminar.scss";
</style>