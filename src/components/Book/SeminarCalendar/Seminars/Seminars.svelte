<script>
  import {content} from './seminars'
  import Seminar from './Seminar/Seminar.svelte'
  import { onMount } from 'svelte';
  let seminars = []

  onMount(async () => {
    const res = await fetch(`https://anca-backend.vercel.app/`)
    seminars = await res.json()
  });

</script>

<section class="Seminars">
  <div class="Seminars__container">
    {#if seminars.length > 0}
      {#each seminars as sem}
        <Seminar sem={sem} />
      {/each}
    {/if}

    {#if seminars.length === 0}
      <Seminar sem={{
        seminar: "New Seminars Coming Soon",
        instructor: "",
        date: "",
      }} />
    {/if}
  </div>
  <a href={content.discord.url} target="_blank" class="Seminars__discord" rel="noreferrer">
    {content.discord.label}
  </a>
</section>

<style lang="scss">
  @import "./seminars.scss";
</style>