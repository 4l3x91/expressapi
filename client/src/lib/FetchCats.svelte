<script lang="ts">
  import { getContext } from 'svelte';
  import Popup from "./Popup.svelte";

  const { open } = getContext("simple-modal");
  let breedArray = [];
  
  async function fetchData() {
    const fetchResult = await fetch("http://localhost:3000/api/cats");
    const data = await fetchResult.json();
    if (data) console.log("Data fetched successfully!");
    breedArray = data;
    return data;
  }

  fetchData();
</script>

<div class="cat-container" style="background-image: url('/src/assets/randomCat.jpg')">
  <div class="cat-container-name">Test</div>
</div>

  {#each breedArray as item}
    <div
      on:click={() => {open(Popup, { specificCat: item, testArr: breedArray })}}
      class="cat-container"
      style="background-image: url({item.image});"
    >
      <div class="cat-container-name">
        {item.name}
      </div>
    </div>
  {/each}

<style>
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
