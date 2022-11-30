<script>
  export let sem;
</script>

<div class="Seminar">
  <h3 class="Seminar__seminarTitle">{sem.seminar}</h3>
  <div class="Seminar__row">
    {#if sem.date !== ""}<p class="Seminar__label">Date & time:</p>{/if}
    <p class="Seminar__dateTime">{sem.date}</p>
  </div>
  <div class="Seminar__row">
    {#if sem.instructor !== ""}<p class="Seminar__label">Flight Instructor:</p>{/if}
    <p class="Seminar__instructor">{sem.instructor}</p>
  </div>
</div>


<style lang="scss">
  @import "./seminar.scss";
</style>