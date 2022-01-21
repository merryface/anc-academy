<script>
  import { content } from './TextContent.js';
  import { Link } from 'svelte-routing';
  import IoIosAirplane from 'svelte-icons/io/IoIosAirplane.svelte'
</script>

<section class="TextContent">
  <div class="TextContent__container">
    <div class="TextContent__nextSeminar">
      <p class="TextContent__text">{content.seminar.text}</p>
      <Link to={content.seminar.url} class="TextContent__seminarButton">
        {content.seminar.label}
        <div class="icon"><IoIosAirplane /></div>
      </Link>
    </div>
    <div class="TextContent__lesson">
      <p class="TextContent__text">{content.lesson.text}</p>
      <Link to="{content.lesson.url}" class="TextContent__lessonButton">{content.lesson.label}</Link>
    </div>
  </div>
</section>

<style lang="scss">
  @import './textContent.scss';
</style>