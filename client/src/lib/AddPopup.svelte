<script lang="ts">
  import Slider from "@bulatdashiev/svelte-slider";
  let breedName;

  function grabRandomCatMoji() {
    let catArray = ["🐱", "😻", "😽", "😿", "😸", "😾", "🙀", "😹", "😼", "😺"];
    let randomCatIndex = Math.floor(Math.random() * catArray.length);
    var randomCat = catArray[randomCatIndex];
    return randomCat;
  }

  let traitsArray = [
    { name: "Intelligence", propName: "intelligence", value: [1, 5] },
    { name: "Health Issues", propName: "health_issues", value: [1, 5] },
    { name: "Energy Level", propName: "energy_level", value: [1, 5] },
    { name: "Child Friendly", propName: "child_friendly", value: [1, 5] },
    { name: "Dog Friendly", propName: "dog_friendly", value: [1, 5] },
    { name: "Cat Friendly", propName: "cat_friendly", value: [1, 5] },
    { name: "Adaptability", propName: "adaptability", value: [1, 5] },
    { name: "Grooming", propName: "grooming", value: [1, 5] },
    { name: "Affection", propName: "affection_level", value: [1, 5] },
  ];

  function setValues() {
    const cat = {
      weight: "15 - 20",
      name: breedName,
      temperament: "string",
      origin: "Sweden",
      description: "The awesome cat is an awesome cat",
      life_span: "20 - 30",
      indoor: 1,
      lap: 0,
      adaptability: traitsArray[6].value[0] + 1,
      affection_level: traitsArray[8].value[0] + 1,
      child_friendly: traitsArray[3].value[0] + 1,
      cat_friendly: traitsArray[5].value[0] + 1,
      dog_friendly: traitsArray[4].value[0] + 1,
      energy_level: traitsArray[2].value[0] + 1,
      grooming: traitsArray[7].value[0] + 1,
      health_issues: traitsArray[1].value[0] + 1,
      intelligence: traitsArray[0].value[0] + 1,
      shedding_level: 3,
      social_needs: traitsArray[0].value[0] + 1,
      stranger_friendly: traitsArray[0].value[0] + 1,
      vocalisation: 3,
      experimental: 0,
      hairless: 0,
      natural: 1,
      rare: 0,
      rex: 0,
      suppressed_tail: 0,
      short_legs: 0,
      hypoallergenic: 0,
      image:
        "https://seniordeal.se/app/uploads/articleimages/katter-383607-unsplash.jpg",
    };
    return cat;
  }

  async function postKitty() {
    await fetch(`http://localhost:3000/api/cats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(setValues()),
    })
      .then((result) => {
        console.log("Completed with result:", result);
      })
      .catch((err) => {
        console.error(err);
      });
  }
</script>

<div class="modal-cat-container">
  <div class="modal-cat-container" style="display: flex;">
    <div class="modal-cat-container-left" style="width: 100%">
      <form on:submit|preventDefault={(e) => postKitty()}>
        <div style="padding: 10px; text-align: left;">
          The
          <div>
            <input
              style="font-size: 32px; line-height: .9;"
              bind:value={breedName}
            />
          </div>
          <div
            style="text-align: left;
            font-size: 14px;
            font-family: Arial;
            font-style: italic;
            width: 80%;"
          >
            Temperament
          </div>
          <img
            src="https://countryflagsapi.com/png/Sweden"
            alt=""
            style="width: 120px;margin-top: 10px;"
          />
        </div>

        {#each traitsArray as item}
          <div
            class="trait-container"
            style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;"
          >
            <div style="text-align: left;">
              <div>
                {item.name}
              </div>
              <Slider
                bind:value={item.value}
                min="0"
                max="4"
                step="1"
                name={item.propName}
              >
                <span style="font-size: 1.5rem">{grabRandomCatMoji()}</span>
              </Slider>
            </div>
            <div style="align-self: center; display: flex;">
              <input
                type="number"
                style="border: 1px solid white;
                  padding: 10px;
                  text-align: center;
                  border-radius: 0.3rem;
                  font-size: 24px;
                  width: 60px;"
                bind:value={item.value[0]}
                min="0"
                max="4"
                step="1"
              />
            </div>
          </div>
        {/each}
        <button>Submit</button>
      </form>
    </div>
  </div>
</div>

<style>
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
</style>
