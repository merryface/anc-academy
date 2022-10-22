<script>
  export let title;
  export let linkLabel;
  export let url;
  import { Link } from 'svelte-routing';
</script>

<div class="HeroCta__ctaItem">
  <p class="HeroCta__title">{title}</p>
  <Link to={url} class="HeroCta__link">
    {linkLabel}
  </Link>
</div>

<style lang="scss">
  @import "./hero_cta.scss";
</style>