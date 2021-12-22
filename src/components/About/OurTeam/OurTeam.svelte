<script>
  import {content} from './OurTeam';
</script>

<section class="OurTeam">
  <div class="OurTeam__container">
    <h2 class="OurTeam__title">{content.title}</h2>
    <p class="OurTeam__subtitle">{content.subtitle}</p>

    <div class="OurTeam__teamMembers">
      {#each content.teamMembers as teamMember}
        <div class="OurTeam__teamMember">
          <img src={teamMember.image.url} alt={teamMember.image.url} class="OurTeam__memberImage">
          <h3 class="OurTeam__name">{teamMember.name}</h3>
          <p class="OurTeam__bio">{teamMember.bio}</p>
        </div>
      {/each}

    </div>
  </div>
</section>

<style type="text/scss">
  @import './our-team.scss';
</style>