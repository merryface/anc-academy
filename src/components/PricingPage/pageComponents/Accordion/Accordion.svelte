<script>
  export let content;
  import { slide } from "svelte/transition";
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

    <ul class="Accordion__items{isExpanded}">
      {#if isOpen}
      {#each content.items as {label, fileUrl}}
        <li class="Accordion__item" transition:slide={{ duration: 300 }}>
          <p class="Accordion__itemName">{label}</p>
          {#if fileUrl != '/'}
          <a href={fileUrl} class="Accordion__download icon" download><FaFilePdf /></a>
          {:else}
          <p class="Accordion__download-disabled">Coming Soon</p>
          {/if}
        </li>
        {/each}
      {/if}
    </ul>
  </div>
</section>

<style lang="scss">
  @import "./accordion";
</style>