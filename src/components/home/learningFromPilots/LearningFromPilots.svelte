<script>
  import FaChevronRight from 'svelte-icons/fa/FaChevronRight.svelte'
  const text = "<p>A.N.C has one simple goal in mind, to provide high quality and affordable flight training in a convenient form. We are here to show you how to operate your simulator aircraft to the highest level of accuracy. We have two decades of flight experience to share with you, and we can’t wait to do so. <br><br> Using modern online tools and your personal simulator, we can accurately walk you through procedures, explain theory, and guide you through exercises to make you a better pilot.<p>"
</script>

<section class="LearningFromPilots">
  <div class="LearningFromPilots__container">
    <div class="LearningFromPilots__summary">
      <h2 class="LearningFromPilots__title">Learn From Professional Pilots</h2>
      <p class="LearningFromPilots__subtitle">Bringing Avgeeks closer to the Flight deck</p>
      <a href="/about" class="LearningFromPilots__link">Learn more about A.N.C Academy <div class="icon"><FaChevronRight /></div></a>
    </div>
    <div class="LearningFromPilots__text">
      <div class="LearningFromPilots__textContent">{@html text}</div> 
    </div>
  </div>
</section>

<style type="text/scss">
  @import './learning_from_pilots.scss';
</style>