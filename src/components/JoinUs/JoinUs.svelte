<script>
  import {content} from './JoinUs.js';
</script>

<section class="JoinUs">
<div class="JoinUs__container">
  <h1 class="JoinUs__title">{content.title}</h1>
  <p class="JoinUs__intro">{content.intro}</p>

  <div class="JoinUs__requirements">
    {#each content.requirements as requirement}
      <div class="JoinUs__requirement">
        <h2 class="JoinUs__header">{requirement.header}</h2>
        <ul class="JoinUs__list">
          {#each requirement.points as point}
          <li class="JoinUs__listItem">{point}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>

  <p class="JoinUs__outro">{content.nonPilots}</p>
  <p class="JoinUs__contact">{content.contactUs}</p>
</div>
</section>

<style lang="scss">
  @import './joinUs';
</style>