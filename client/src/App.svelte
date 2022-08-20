<script lang="ts">
  import FetchCats from "./lib/FetchCats.svelte";
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
</script>

<Header />
<main>
  <div class="container">
    <FetchCats />
  </div>
</main>
<Footer />
