<script>
  export let title;
  export let linkLabel;
  export let url;
  import { Link } from 'svelte-routing';
  import Button from '../../../global/Button/Buttton.svelte'
</script>

<div class="HeroCta__ctaItem">
  <p class="HeroCta__title">{title}</p>
  <Button
    url = {url}
    label = {linkLabel}
    colour = "primary"
    margin = "auto"
  />
</div>

<style lang="scss">
  @import "./hero_cta.scss";
</style>