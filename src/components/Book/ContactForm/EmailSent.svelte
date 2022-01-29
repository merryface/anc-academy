<script>
import { Link } from "svelte-routing";
</script>

<section class="EmailSent">
  <div class="EmailSent__container">
    <h1 class="EmailSent__title">Your Email has been Successfully sent</h1>
    <p class="EmailSent__message">One of our instructors will get in touch with you soon.</p>
    <Link class="EmailSent__link" to="book">Back to the Booking Page</Link>
    <Link class="EmailSent__link" to="/">Home</Link>
  </div>
</section>

<style lang="scss">
  @import './emailSent';
</style>