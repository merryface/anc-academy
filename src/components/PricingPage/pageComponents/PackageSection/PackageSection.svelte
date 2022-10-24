<script>
  import Accordion from "../Accordion/Accordion.svelte";
  export let summary;
  export let accordionItems;
</script>

<section class="PackageSection">
  <div class="PackageSection__container">
    <p class="PackageSection__text">{ summary }</p>

    {#each accordionItems as accordion}
      <Accordion content = {accordion} />
    {/each}
  </div>
</section>

<style lang="scss">
  @import "./package-section.scss"
</style>