<script lang="ts">
  import Modal from "svelte-simple-modal";
  import { fade, fly } from "svelte/transition";
  import Cat from "./lib/Cat.svelte";
  import Header from "./lib/Header.svelte";
</script>

<Modal><Header /></Modal>
<main>
  <div
    class="grid"
    in:fly={{ y: 1000, duration: 250 }}
    out:fade={{ duration: 750 }}
  >
    <Modal>
      <Cat />
    </Modal>
  </div>
</main>
