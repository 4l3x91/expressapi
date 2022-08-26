<script lang="ts">
  import catExpressLogo from "../assets/catexpress.png";
  import { searchInput } from './stores.js';
</script>

<header>
  <div style="display: flex; gap: .1rem; border: 1px solid #8f8f9d; border-radius: .3rem; padding: 10px;">
    <span>
      🔍
    </span>
    <input bind:value={$searchInput} style="border: none; outline: none; background: transparent;" placeholder=" Search breed">
  </div>
  <img src={catExpressLogo} class="logo" alt="CatExpress Logo" />
  <h1>CatExpress</h1>
</header>

<style>
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background: #1c1c1c;
    width: 100%;
    padding: 1.5rem;
    box-shadow: 0px 0px 30px 0px black;
  }
  h1 {
    align-self: center;
  }
</style>
