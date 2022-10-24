<script>
  import { content } from './TextContent.js';
  import Button from '../../global/Button/Buttton.svelte'
</script>

<section class="TextContent">
  <div class="TextContent__container">
    <div class="TextContent__nextSeminar">
      <p class="TextContent__text">{content.seminar.text}</p>
      <Button 
        url={content.seminar.url}
        label={content.seminar.label}
        colour="primary"
      />
    </div>
    <div class="TextContent__lesson">
      <p class="TextContent__text">{content.lesson.text}</p>
      <Button 
        url={content.lesson.url}
        label={content.lesson.label}
        colour="primary"
      />
    </div>
  </div>
</section>

<style lang="scss">
  @import './textContent.scss';
</style>