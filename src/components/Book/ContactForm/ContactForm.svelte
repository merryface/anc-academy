<script>
  import {content} from './ContactForm.js'
  import { onMount } from 'svelte';

  onMount(async () => {
    document.getElementById('sendTo').setAttribute("action", `https://formsubmit.co/${content.emailString}`);
    console.log(content.responseMessage);
  });
</script>

<section class="ContactForm">
  <div class="ContactForm__container">
    <h2 class="ContactForm__title">{content.title}</h2>
    <p class="ContactForm__text">{content.text}</p>

    <form class="ContactForm__form" id="sendTo" accept-charset="utf-8" method="POST">
      <label class="ContactForm__formLabel" for="email">Enter Your Email Address</label>
      <input class="ContactForm__formInput" type="email" name="email" placeholder="Email Address">

      <label class="ContactForm__formLabel" for="_subject">Subject</label>
      <input class="ContactForm__formInput" name="_subject" placeholder="I'd like to book a lesson">

      <label class="ContactForm__formLabel" for="message">Message</label>
      <textarea class="ContactForm__textArea" type="textarea" name="message" placeholder="Type your message here" required></textarea>

      <button class="ContactForm__submit" type="submit">Submit</button>

      <!-- hidden -->
      <input type="hidden" name="_next" value={content.root + content.redirect}>
      <input type="text" name="_honey" style="display:none">
      <input type="hidden" name="_template" value="table">
      <input type="hidden" name="_autoresponse" value={content.responseMessage}>
  </form>
  </div>
</section>

<style lang="scss">
  @import './contactForm';
</style>