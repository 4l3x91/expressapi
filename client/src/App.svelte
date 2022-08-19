<script lang="ts">
  import catExpressLogo from "./assets/catexpress.png";
  import FetchCats from "./lib/FetchCats.svelte";
</script>

<main>
  <div
    style="display: flex; justify-content: center; align-items: center; gap: 1rem;"
  >
    <img src={catExpressLogo} class="logo" alt="CatExpress Logo" />
    <h1 style="align-self: center;">CatExpress</h1>
  </div>

  <div class="container">
    <FetchCats />
  </div>
  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank"
      >SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
  .logo {
    height: 6em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
