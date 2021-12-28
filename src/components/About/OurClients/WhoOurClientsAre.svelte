<script>
  import {content} from './WhoOurClientsAre';
</script>

<section class="WhoOurClientsAre">
  <div class="WhoOurClientsAre__container">
    <h2 class="WhoOurClientsAre__title">{content.title}</h2>
    <div class="WhoOurClientsAre__clients">
      {#each content.clients as client}
        <div class="WhoOurClientsAre__client">
          <h3 class="WhoOurClientsAre__clientName">{client.name}</h3>
          <p class="WhoOurClientsAre__clientSummary">{client.summary}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  @import './who-our-clients-are.scss';
</style>