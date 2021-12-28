<script>
  import FaChevronRight from 'svelte-icons/fa/FaChevronRight.svelte'
  import { Link } from 'svelte-routing';
  import {content} from './LearningFromPilots';
</script>

<section class="LearningFromPilots">
  <div class="LearningFromPilots__container">
    <div class="LearningFromPilots__summary">
      <h2 class="LearningFromPilots__title">{content.title}</h2>
      <p class="LearningFromPilots__subtitle">{content.subtitle}</p>
      <Link to={content.linkUrl} class="LearningFromPilots__link">{content.linkLabel} <div class="icon"><FaChevronRight /></div></Link>
    </div>
    <div class="LearningFromPilots__text">
      <div class="LearningFromPilots__textContent">{@html content.mainText}</div> 
    </div>
  </div>
</section>

<style lang="scss">
  @import './learning_from_pilots.scss';
</style>