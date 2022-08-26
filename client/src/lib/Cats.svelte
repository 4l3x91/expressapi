<script lang="ts">
  import { getContext, onMount } from "svelte";
  import AddPopup from "./AddPopup.svelte";
  import Popup from "./Popup.svelte";
  import { searchInput, breedArray } from "./stores.js";

  const { open } = getContext("simple-modal");

  onMount(async () => {
    const fetchResult = await fetch("http://localhost:3000/api/cats");
    $breedArray = await fetchResult.json();
    if (breedArray) console.log("Data fetched successfully!");
  });
</script>


<div on:click={() => open(AddPopup, {})} class="cat-container add-breed">
  <div class="plus"></div>
  <div class="add-breed-text">Add breed</div>
</div>
{#each $breedArray.sort( (a, b) => a.name.localeCompare(b.name) ) as item (item.id)}
{#if $searchInput.length < 1 || item.name.toLowerCase().includes($searchInput.toLowerCase())}
  <div class="cat-container" on:click={() => { open(Popup, { specificCat: item })}}>
    
    <div class="cat-container-image" style="background-image: url({item.image});">
    </div>
    <div class="cat-container-name">{item.name}</div>
  </div>  
  {/if}
{/each}

<style>
  .plus {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    align-items: center;
    display: flex;
    justify-content: center;
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
    transition: 0.2s ease all;
    opacity: 0.75;
    user-select: none;
    cursor: pointer;
    z-index: 1;
    position: relative;
    border-radius: 0.3rem;
    overflow:hidden;
    box-shadow: 6px 6px 5px black;
    background-color: #1a1a1a;
    overflow: hidden;
  }

  .cat-container:hover {
    scale: 1.2;
    opacity: 1;
    z-index: 2;
    box-shadow: 1px 1px 10px black;
    transition: 0.2s ease all;
  }

  .cat-container-image {
    background-size: cover;
    background-position: center top;
    background-origin: content-box;
    height: 200px;
    width: 100%;
  }
  .cat-container-name {
    text-align: center;
    text-transform: capitalize;    
    font-size: 20px;
    padding: 15px 0;
    text-shadow: 1px 1px #242424;
  }
</style>
