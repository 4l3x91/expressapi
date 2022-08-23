<script lang="ts">
  export let specificCat;
  console.log(specificCat);
  import { fly } from 'svelte/transition';
	let visible = true;

  let countryFlag;
  function checkFlag() {
    if (specificCat.origin === "Russia") countryFlag = "rus";
    else if (specificCat.origin === "Iran (Persia)") countryFlag = "Iran";
    else if (specificCat.origin === "Burma") countryFlag = "Myanmar";
    else countryFlag = specificCat.origin;
    return countryFlag;
  }
  const mapCatStats = {
    1: 5,
    2: 25,
    3: 50,
    4: 75,
    5: 100,
  };

  async function postKitty() {
    console.log(specificCat.name);
    console.log(specificCat.id);
    await fetch(`http://localhost:3000/api/cats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(specificCat),
    })
      .then((result) => {
        console.log("Completed with result:", result);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async function putKitty() {
    console.log(specificCat.name);
    console.log(specificCat.id);
    await fetch(`http://localhost:3000/api/cats/id/${specificCat.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(specificCat),
    })
      .then((result) => {
        console.log("Completed with result:", result);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async function delKitty() {
    console.log(specificCat.name);
    console.log(specificCat.id);
    await fetch(`http://localhost:3000/api/cats/id/${specificCat.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(specificCat),
    })
      .then((result) => {
        console.log("Completed with result:", result);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  import { getContext } from "svelte";
  let onCancel = () => {};

  const { close } = getContext("simple-modal");

  function _onCancel() {
    onCancel();
    close();
  }
  async function _onDelete() {
    await delKitty();
    delFromUI();
    console.log(`Cat breed ${specificCat.name} deleted.`);
    console.log("Deleting object from UI.");
    _onCancel();
    console.log("Closing modal.");
    alert("Breed has been deleted!")
  }

  function delFromUI() {
    // relaod parent component(?)
  }
</script>

<label>
	<input type="checkbox" bind:checked={visible}>
	visible
</label>

<!-- move to addPopup -->
<button on:click={postKitty}> Post this kitty </button>

<!-- move to submit -->
<button on:click={putKitty}> Put this kitty </button>

<!-- re-render  -->
<button on:click={_onDelete}> Delete this kitty </button>

{#if visible}
<div in:fly={{ y: 300, duration: 500, delay: 150 }}
out:fly={{ y: 300, duration: 500 }} class="modal-cat-container">
  <div class="modal-cat-container" style="display: flex;">
    <div class="modal-cat-container-left" style="width: 100%">
      <div style="padding: 10px; text-align: left;">
        The
        <div
          style="text-transform: uppercase; font-size: 32px; line-height: .9;"
        >
          {specificCat.name}
        </div>
        <div
          style="text-align: left;
          font-size: 14px;
          font-family: Arial;
          font-style: italic;
          width: 80%;"
        >
          "{specificCat.temperament}"
        </div>
        <img
          src="https://countryflagsapi.com/png/{checkFlag()}"
          alt=""
          style="width: 120px;margin-top: 10px;"
        />
      </div>
      <div class="breed-characteristics">
        <div
          style="padding: 10px;
        font-size: 24px;
        text-align: left;"
        >
          Characteristics
        </div>
        <!-- move to list and loop to create this part -->
        <div class="breed-trait-container">
          <div>Intelligence</div>
          <div class="progress-bar-wrapper">
            <div class="progress-bar">
              <span
                class="progress-bar-fill"
                style="width: {mapCatStats[specificCat.intelligence]}%;"
              />
            </div>
          </div>
        </div>
        <div class="breed-trait-container">
          <div>Health Issues</div>
          <div class="progress-bar-wrapper">
            <div class="progress-bar">
              <span
                class="progress-bar-fill"
                style="width: {mapCatStats[specificCat.health_issues]}%;"
              />
            </div>
          </div>
        </div>
        <div class="breed-trait-container">
          <div>Energy Level</div>
          <div class="progress-bar-wrapper">
            <div class="progress-bar">
              <span
                class="progress-bar-fill"
                style="width: {mapCatStats[specificCat.energy_level]}%;"
              />
            </div>
          </div>
        </div>
        <div class="breed-trait-container">
          <div>Child Friendly</div>
          <div class="progress-bar-wrapper">
            <div class="progress-bar">
              <span
                class="progress-bar-fill"
                style="width: {mapCatStats[specificCat.child_friendly]}%;"
              />
            </div>
          </div>
        </div>
        <div class="breed-trait-container">
          <div>Dog Friendly</div>
          <div class="progress-bar-wrapper">
            <div class="progress-bar">
              <span
                class="progress-bar-fill"
                style="width: {mapCatStats[specificCat.dog_friendly]}%;"
              />
            </div>
          </div>
        </div>
        <div class="breed-trait-container">
          <div>Cat Friendly</div>
          <div class="progress-bar-wrapper">
            <div class="progress-bar">
              <span
                class="progress-bar-fill"
                style="width: {mapCatStats[specificCat.cat_friendly]}%;"
              />
            </div>
          </div>
        </div>
        <div class="breed-trait-container">
          <div>Adaptability</div>
          <div class="progress-bar-wrapper">
            <div class="progress-bar">
              <span
                class="progress-bar-fill"
                style="width: {mapCatStats[specificCat.adaptability]}%;"
              />
            </div>
          </div>
        </div>
        <div class="breed-trait-container">
          <div>Grooming</div>
          <div class="progress-bar-wrapper">
            <div class="progress-bar">
              <span
                class="progress-bar-fill"
                style="width: {mapCatStats[specificCat.grooming]}%;"
              />
            </div>
          </div>
        </div>
        <div class="breed-trait-container">
          <div>Affection</div>
          <div class="progress-bar-wrapper">
            <div class="progress-bar">
              <span
                class="progress-bar-fill"
                style="width: {mapCatStats[specificCat.affection_level]}%;"
              />
            </div>
          </div>
        </div>
        <!-- move to list and loop to create this part -->
      </div>
    </div>
    <div class="modal-cat-container-right" style="width: 100%">
      <div
        style="
    background: #0c0c0c;
    background-image: url('{specificCat.image}');
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-size: cover;
    background-origin: padding-box;
  height: 100%;
  width: 100%;
  background-size: contain;
  background-position: center;
  background-origin: content-box;
  background-repeat: no-repeat;
  max-height: 400px;"
      />
      <div class="breed-details">
        <div style="padding: 10px;font-size: 24px;text-align: left;">
          Breed Details
        </div>
        <div
          style="display: flex;justify-content: space-between;text-align: right;padding: 10px;"
        >
          <div style="color: rgb(198, 198, 198);font-size: 14px;">WEIGHT</div>
          <div>{specificCat.weight}</div>
        </div>
        <div
          style="display: flex;justify-content: space-between;text-align: right;border-top: 1px solid #b5b5b5;border-bottom: 1px solid #b5b5b5;padding: 10px;"
        >
          <div style="font-size: 14px;color: rgb(198, 198, 198);">LIFESPAN</div>
          <div>{specificCat.life_span} years</div>
        </div>
        <div
          style="display: flex;justify-content: space-between;text-align: right;padding: 10px;"
        >
          <div style="color: rgb(198, 198, 198);font-size: 14px;">ORIGIN</div>
          <div>{specificCat.origin}</div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div
      style="padding: 10px;
    font-size: 24px;
    text-align: left;"
    >
      About
    </div>
    <div style="text-align: left; padding: 10px;">
      {specificCat.description}
    </div>
  </div>
</div>

{:else}
<div in:fly={{ y: 300, duration: 500, delay: 150 }}
out:fly={{ y: 300, duration: 500 }} class="modal-cat-container">
<h1>Form</h1>
<form class="content" on:submit|preventDefault={(e) => 
{
  console.log(specificCat);
  visible = true;
  }}>
  <div>Name</div>
  
  <input type="text" bind:value={specificCat.name} />
  <div>Description</div>
  <input type="text" bind:value={specificCat.description} />
	<button>
		Submit
	</button>
</form>
</div>
{/if}

<style>
  .breed-trait-container {
    text-align: left;
    padding: 10px;
    padding-bottom: 0px;
  }

  .progress-bar {
    width: 100%;
    background-color: #e0e0e0;
    /* padding: 3px; */
    border-radius: 0.3rem;
    /* box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2); */
  }

  .progress-bar-fill {
    display: block;
    height: 16px;
    background-color: #697a88;
    border-radius: 0.3rem;

    transition: width 500ms ease-in-out;
  }
</style>
