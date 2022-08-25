<script lang="ts">
  import Modal from "svelte-simple-modal";
  import { fade, fly } from "svelte/transition";
  import Cats from "./lib/Cats.svelte";
  import Header from "./lib/Header.svelte";
  import { SvelteToast } from '@zerodevx/svelte-toast'
</script>

<Modal><Header /></Modal>
<main>
  <div
    class="grid"
    in:fly={{ y: 1000, duration: 250 }}
    out:fade={{ duration: 750 }}
  >
    <Modal>
      <SvelteToast />
      <Cats />
    </Modal>
  </div>
</main>
