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
    <div
      class="cat-container"
      style="background-image: url({item.image}); height: 200px;"
    >
      <div
        style="text-align: left; padding-left: 5px; font-size: 20px; text-shadow: 1px 1px #242424;"
      >
        {item.name}
      </div>
    </div>
  {/each}
{/await}
