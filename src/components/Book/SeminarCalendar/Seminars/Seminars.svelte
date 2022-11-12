<script>
  import {content} from './seminars'
  import {onMount} from 'svelte'
  import Airtable from 'Airtable'

  import Seminar from './Seminar/Seminar.svelte'

  const api_key = process.env.API_KEY
  const api_base = process.env.API_BASE
  const base = new Airtable({apiKey: api_key}).base(api_base)
  const table = base('Seminars')
  let sems = []

  onMount(async () => {
    const records = await table.select().all()
    console.log(records)
    sems = records
  })
</script>

<section class="Seminars">
  <div class="Seminars__container">
    {#each sems as sem}
      <Seminar sem={sem.fields} />
    {/each}
  </div>
  <a href={content.discord.url} target="_blank" class="Seminars__discord">
    {content.discord.label}
  </a>
</section>

<style lang="scss">
  @import "./seminars.scss";
</style>