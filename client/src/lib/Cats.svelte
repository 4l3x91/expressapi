<script lang="ts">
  import { getContext, onMount } from "svelte";
  import AddPopup from "./AddPopup.svelte";
  import Popup from "./Popup.svelte";

  const { open } = getContext("simple-modal");
  import { searchInput, breedArray } from './stores.js';

  onMount(async () => {
      const fetchResult = await fetch("http://localhost:3000/api/cats");
      $breedArray = await fetchResult.json();
      if (breedArray) console.log("Data fetched successfully!");
    });
</script>

<div on:click={() => open(AddPopup, {})} class="plus cat-container add-breed">
  <div class="add-breed-text">Add breed</div>
</div>
{#each $breedArray.sort((a, b) => a.name.localeCompare(b.name)) as item (item.id)}

  {#if $searchInput.length < 1 || item.name
      .toLowerCase()
      .includes($searchInput.toLowerCase())}
    <div
      on:click={() => {
        open(Popup, { specificCat: item });
      }}
      class="cat-container"
      style="background-image: url({item.image});"
    >
      <div class="cat-container-name">
        {item.name}
      </div>
    </div>
  {/if}
  {/each}
<style>
  .plus {
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }

  .plus::before {
    content: "+";
    font-size: 185px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-family: courier;
    height: 80%;
    flex-direction: center;
  }
  .add-breed-text {
    font-size: 24px;
  }
  .cat-container {
    background-color: #1a1a1a;
    color: white;
    border-radius: 0.3rem;
    background-size: cover;
    background-position: center top;
    background-origin: content-box;
    box-shadow: 6px 6px 5px black;
    transition: 0.2s ease all;
    opacity: 0.75;
    user-select: none;
    cursor: pointer;
    z-index: 1;
    position: relative;
    height: 200px;
  }

  .cat-container:hover {
    scale: 1.2;
    opacity: 1;
    z-index: 2;
    box-shadow: 1px 1px 10px black;
    transition: 0.2s ease all;
  }
  .cat-container-name {
    text-align: left;
    padding-left: 5px;
    font-size: 20px;
    text-shadow: 1px 1px #242424;
  }
</style>
