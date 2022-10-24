<script>
  export let url
  export let label
  export let colour
  export let margin = "0 0 0 0"
  import IoIosAirplane from 'svelte-icons/io/IoIosAirplane.svelte'
  import { Link } from 'svelte-routing';


  const width = (label.length * 5) + 30 
</script>

<Link to={url} class="Button Button__{colour}" style="margin: {margin}">
  {label}
  <div class="icon"><IoIosAirplane /></div>
</Link>


<style lang="scss">
  @import './button.scss';
</style>