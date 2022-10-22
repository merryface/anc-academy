<script>
  export let title;
  export let linkLabel;
  export let url;
  import IoIosAirplane from 'svelte-icons/io/IoIosAirplane.svelte'
  import { Link } from 'svelte-routing';
</script>

<div class="HeroCta__ctaItem">
  <p class="HeroCta__title">{title}</p>
  <Link to={url} class="HeroCta__link">{linkLabel}
    <div class="HeroCta__icon">
      <IoIosAirplane />
    </div>
  </Link>
</div>

<style lang="scss">
  @import "./hero_cta.scss";
</style>