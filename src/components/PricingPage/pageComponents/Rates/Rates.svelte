<script>
  export let content;
</script>

<section class="Rates">
  <div class="Rates__container">
    <p class="Rates__summary">{content.summary}</p>

    <div class="Rates__tableContainer">
      <table class="Rates__table">
        <tr class="Rates__headerRow">
          <th colspan="2"class="Rates__tableHeader">{content.table.title}</th>
        </tr>
        {#each content.table.rates as rate}
          <tr class="Rates__rate">
            <td class="Rates__label">{rate.label}</td>
            <td class="Rates__price">£{rate.price}.00</td>
          </tr>
        {/each}
      </table>
    </div>
  </div>
</section>

<style lang="scss">
  @import './rates.scss';
</style>