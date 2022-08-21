<script lang="ts">
  import Modal from "svelte-simple-modal";
  import { default as FetchCats } from "./lib/FetchCats.svelte";
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
</script>

<Modal><Header /></Modal>
<main>
  <div class="container">
    <Modal><FetchCats /></Modal>
  </div>
</main>
<Footer />
