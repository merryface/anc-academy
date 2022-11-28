<script>
  export let sem;
</script>

<h3 class="Seminar__seminarTitle">{sem.seminar}</h3>
<div class="Seminar__row">
  <p class="Seminar__label">Date & time:</p>
  <p class="Seminar__dateTime">{sem.date}</p>
</div>
<div class="Seminar__row">
  <p class="Seminar__label">Flight Instructor:</p>
  <p class="Seminar__instructor">{sem.instructor}</p>
</div>

<style lang="scss">
  @import "./seminar.scss";
</style>