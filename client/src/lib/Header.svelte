<script lang="ts">
  import catExpressLogo from "../assets/catexpress.png";
  import { searchInput } from './stores.js';
</script>

<header>
  <div class="search-container">
    <span>
      🔍
    </span>
    <input bind:value={$searchInput} class="search-input" placeholder=" Search breed">
  </div>
  <img src={catExpressLogo} class="logo" alt="CatExpress Logo" />
  <h1>CatExpress</h1>
</header>

<style>
  header {
    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 85%);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    padding: 1.5rem;
  }
  h1 {
    align-self: center;
  }

  header input {
    color: white;
  }

  header ::placeholder {
    color: white;
    opacity: 1;
  }

  .search-container {
    display: flex; gap: .1rem;
    border-radius: .3rem;
    padding: 10px;
    background: rgba(0,0,0,0.5);
    box-shadow: 2px 2px rgba(0,0,0,.75);
  }

  .search-input {
    border: none;
    outline: none;
    background: transparent;
  }
</style>
