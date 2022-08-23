<script lang="ts">
  import Modal from "svelte-simple-modal";
  import { fade, fly } from "svelte/transition";
  import FetchCats from "./lib/FetchCats.svelte";
  import Header from "./lib/Header.svelte";
  let unique = {};
  function restart() {
    console.log("Closed modal");
    unique = {};
  }
</script>


<Modal><Header /></Modal>
<main>
  <div
    in:fly={{ y: 1000, duration: 250 }}
    out:fade={{ duration: 750 }}
  >
    <Modal on:closed={restart}>
      {#key unique}
        <FetchCats />
      {/key}
    </Modal>
  </div>
</main>
