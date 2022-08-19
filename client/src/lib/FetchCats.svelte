<script lang="ts">
  async function fetchData() {
    const fetchResult = await fetch("http://localhost:3000/api/cats");
    const data = await fetchResult.json();
    if (data) console.log("Data fetched successfully!");
    return data;
  }
</script>

{#await fetchData()}
  <p>Loading kitties...</p>
{:then items}
  {#each items as item}
    <div class="cat-container">
      <div class="cat-image-container">
        <img src={item.image} alt="" style="width: 100%; height: 14rem;"/>
      </div>
      <div>{item.name}</div>
    </div>
  {/each}
{/await}
