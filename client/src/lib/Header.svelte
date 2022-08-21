<script lang="ts">
  import { getContext } from "svelte";

  import catExpressLogo from "../assets/catexpress.png";
  import AddPopup from "./AddPopup.svelte";
  const { open } = getContext("simple-modal");
</script>

<header>
  <img src={catExpressLogo} class="logo" alt="CatExpress Logo" />
  <h1>CatExpress</h1>
  <button on:click={() => open(AddPopup, {})} class="add-breed"
    >+ Add breed</button
  >
</header>

<style>
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background: #1c1c1c;
    width: 100%;
    padding: 1.5rem;
    box-shadow: 0px 0px 30px 0px black;
  }
  h1 {
    align-self: center;
  }
  .add-breed {
    position: absolute;
    right: 10rem;
  }
</style>
