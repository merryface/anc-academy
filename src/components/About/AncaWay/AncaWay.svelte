<script>
import { content, teachingSteps } from "./AncaWay";

</script>

<section class="AncaWay">
  <div class="AncaWay__container">
    <div class="AncaWay__topText">
      <h1 class="AncaWay__titleOne">{content.titleOne}</h1>
      <h1 class="AncaWay__titleTwo">{content.titleTwo}</h1>
      <p class="AncaWay__mainText">{content.mainText}</p>
    </div>

    <div class="AncaWay__bottomText">
      <h2 class="AncaWay__colouredText">{content.colouredText}</h2>
      <h2 class="AncaWay__blackText">{content.blackText}</h2>
    </div>

    <img src={content.image.url} alt={content.image.alt} class="AncaWay__image" />
    <p class="AncaWay__infoText">{content.infoText}</p>

    <div class="AncaWay__teachingSteps">
      {#each teachingSteps as step}
        <div class="AncaWay__teachingStep">
          <h3 class="AncaWay__stepTitle">{step.stepTitle}</h3>
          <p class="AncaWay__stepDescription">{step.stepDescription}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style type="text/scss">
 @import './anca-way.scss';
</style>