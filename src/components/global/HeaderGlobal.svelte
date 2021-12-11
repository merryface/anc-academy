<script>
import HeaderMobile from "./Header-mobile/HeaderMobile.svelte";
import Header from "./header/Header.svelte";

  $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth > 970}
  <Header />
{:else}
  <HeaderMobile />
{/if}