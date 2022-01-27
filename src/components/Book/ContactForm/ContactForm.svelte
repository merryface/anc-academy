<script>
  import {content} from './ContactForm.js'
</script>

<section class="ContactForm">
  <div class="ContactForm__container">
    <h2 class="ContactForm__title">{content.title}</h2>
  </div>

  <form action="https://formsubmit.co/tarikmerrylees@gmail.com" method="POST">
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <button type="submit">Send</button>
</form>
</section>