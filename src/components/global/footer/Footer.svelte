<script>
  import { footerNav } from './footer.js';

</script>

<footer class="Footer">
  <div class="Footer__container">
    <p class="Footer__copyright">© 2021, A.N.C Academy</p>
    <nav class="Footer__nav">
      {#each footerNav as {id, label, url}}
      <a href="{url}" class="Footer__navItem">{label}</a>
      {/each}
    </nav>
  </div>
</footer>