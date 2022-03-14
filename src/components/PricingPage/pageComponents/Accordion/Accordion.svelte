<script>
  export let content;
  import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte'
  import FaFilePdf from 'svelte-icons/fa/FaFilePdf.svelte'

  let isOpen = false
  const toggle = () => isOpen = !isOpen
  $: isExpanded = isOpen ? " expanded" : ""
  $: indicateExpanded = isOpen ? " opened" : " closed"
</script>

<section class="Accordion">
  <div class="Accordion__container">
    <div class="Accordion__header">
      <div class="Accordion__headerContainer">
        <h3 class="Accordion__text">{content.header}</h3>
        <div class="Accordion__button icon{indicateExpanded}" on:click={toggle}><FaAngleDown/></div>
      </div>
    </div>

    <div class="Accordion__items{isExpanded}">
      {#each content.items as {label, fileUrl}}
      <div class="Accordion__item">
        <p class="Accordion__itemName">{label}</p>
        <a href={fileUrl} class="Accordion__download icon"><FaFilePdf /></a>
      </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
  @import "./accordion";
</style>