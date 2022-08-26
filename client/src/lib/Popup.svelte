<script lang="ts">
  import Slider from "@bulatdashiev/svelte-slider";
  import { toast } from "@zerodevx/svelte-toast";
  import { getContext } from "svelte";
  import { breedArray } from "./stores";
  import { fly } from "svelte/transition";
  export let specificCat;
  let countryFlag;

  let life_span = [5, 40];
  let weight = [3, 35];
  let onCancel = () => {};
  let visible = true;
  const { close } = getContext("simple-modal");
  const mapCatStats = {
    1: 5,
    2: 25,
    3: 50,
    4: 75,
    5: 100,
  };


  function grabRandomCatMoji() {
    let catArray = ["🐱", "😻", "😽", "😿", "😸", "😾", "🙀", "😹", "😼", "😺"];
    let randomCatIndex = Math.floor(Math.random() * catArray.length);
    var randomCat = catArray[randomCatIndex];
    return randomCat;
  }

  let traitsArray = [
    { name: "Intelligence", propName: "intelligence", value: [specificCat.intelligence, 5] },
    { name: "Health Issues", propName: "health_issues", value: [specificCat.health_issues, 5] },
    { name: "Energy Level", propName: "energy_level", value: [specificCat.energy_level, 5] },
    { name: "Adaptability", propName: "adaptability", value: [specificCat.adaptability, 5] },
    { name: "Grooming", propName: "grooming", value: [specificCat.grooming, 5] },
    { name: "Affection", propName: "affection_level", value: [specificCat.affection_level, 5] },
  ];

  let flags = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "The Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "The Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "The Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "North Korea",
    "Southe Korea",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic Of North Macedonia ",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "South Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic ",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "The Holy See ",
    "The Marshall Islands",
    "Timor-Leste ",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];


  async function getBreedById() {
    const modalCat = await fetch(
      `http://localhost:3000/api/cats/id/${specificCat.id}`
    );
    specificCat = await modalCat.json();
  }
  getBreedById();

  function checkFlag() {
    if (specificCat.origin === "Russia") countryFlag = "rus";
    else if (specificCat.origin === "Iran (Persia)") countryFlag = "Iran";
    else if (specificCat.origin === "Burma") countryFlag = "Myanmar";
    else countryFlag = specificCat.origin;
    return countryFlag;
  }

  async function editBreed() {
    const cat = $breedArray.find((x) => x.id === specificCat.id);
    const catIndex = $breedArray.indexOf(cat);
    let newWeight = parsedWeight[0] + " - " + parsedWeight[1];
    let newLifeSpan = parsedLifeSpan[0] + " - " + parsedLifeSpan[1];
    specificCat.weight = newWeight;
    specificCat.life_span = newLifeSpan;
    specificCat.intelligence = traitsArray[0].value[0] + 1;
    specificCat.health_issues = traitsArray[1].value[0] + 1;
    specificCat.energy_level = traitsArray[2].value[0] + 1;
    specificCat.adaptability = traitsArray[3].value[0] + 1;
    specificCat.grooming = traitsArray[4].value[0] + 1;
    specificCat.affection_level = traitsArray[5].value[0] + 1;

    $breedArray[catIndex] = specificCat;
    $breedArray = $breedArray;

    await fetch(`http://localhost:3000/api/cats/${specificCat.id}`, {
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

  async function deleteBreed() {
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

  function _onCancel() {
    onCancel();
    close();
  }
  async function _onDelete() {
    const cat = $breedArray.find((x) => x.id === specificCat.id);
    const catIndex = $breedArray.indexOf(cat);
    $breedArray.splice(catIndex, 1);
    $breedArray = $breedArray;
    await deleteBreed();
    toast.push(
            "Breed has been deleted! 😿",
            { classes: ['custom', 'success'] }
          );
    _onCancel();
  }

  function setVisible() {
    if (visible) visible = false;
    else visible = true;
  }


let oldWeight = specificCat.weight;
let oldLifeSpan = specificCat.life_span;
let parsedWeight = oldWeight.split(" ");
let parsedLifeSpan = oldLifeSpan.split(" ");

parsedWeight.splice(1, 1);
parsedLifeSpan.splice(1, 1);

</script>

<div style="display: flex;">
  <div class="icons" on:click={setVisible}>📝</div>
  <div class="icons" on:click={_onDelete}>🗑️</div>
</div>

{#if visible}
  <div
    in:fly={{ y: 300, duration: 500, delay: 150 }}
    out:fly={{ y: 300, duration: 500 }}
    class="modal-cat-container"
  >
    <div class="modal-cat-container" style="display: flex;">
      <div class="modal-cat-container-left" style="width: 100%">
        <div style="padding: 10px; text-align: left;">
          The
          <div
            style="text-transform: uppercase; font-size: 32px; line-height: .9;"
          >
            {specificCat.name}
          </div>
          <img
            src="https://countryflagsapi.com/png/{checkFlag()}"
            alt=""
            style="height: 40px;margin-top: 10px;"
          />
        </div>
        <div class="breed-characteristics">
          <div class="breed-label">Characteristics</div>
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
          <div class="breed-label">Breed Details</div>
          <div
            style="display: flex;justify-content: space-between;text-align: right;padding: 10px;"
          >
            <div
              class="weight-label"
              style="color: rgb(198, 198, 198);font-size: 14px;"
            >
              WEIGHT
            </div>
            
              <div>
                {specificCat.weight} kg</div>
          </div>
          <div
            style="display: flex;justify-content: space-between;text-align: right;border-top: 1px solid #b5b5b5;border-bottom: 1px solid #b5b5b5;padding: 10px;"
          >
            <div
              class="lifespan-label"
              style="font-size: 14px;color: rgb(198, 198, 198);"
            >
              LIFESPAN
            </div>
            <div>{specificCat.life_span} years</div>
          </div>
          <div
            style="display: flex;justify-content: space-between;text-align: right;padding: 10px;"
          >
            <div
              class="origin-label"
              style="color: rgb(198, 198, 198);font-size: 14px;"
            >
              ORIGIN
            </div>
            <div>{specificCat.origin}</div>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 70px;" />
    <div class="breed-label">About</div>
    <div class="" style="text-align: left; padding: 10px;">
      {specificCat.description}
    </div>
  </div>
{:else}
  <div class="modal-cat-container"
    in:fly={{ y: 300, duration: 500, delay: 150 }}
    out:fly={{ y: 300, duration: 500 }}
    >
    <form
      class="content"
      on:submit|preventDefault={() => {
        setVisible();
        editBreed();
        toast.push(
                  "Breed has been updated! 😻", { classes: ['custom', 'success'] });
      }}>
      <div class="modal-cat-container">
        <div class="modal-cat-container d-flex">
          <div class="modal-cat-container-left w-100">
              <div class="breed-name-container">
                <div class="breed-name-text">Breed name</div>
                <div class="breed-input-container">
                  <input
                    class="breed-input"
                    minlength="4"
                    placeholder="Enter breed name"
                    required
                    bind:value={specificCat.name}
                  />
                </div>
              </div>
      
              <div class="breed-origin-container">
                <div class="breed-origin-text">Breed origin</div>
                <div class="breed-origin-flag-container">
                  <div class="breed-origin-flag-box">
                    <img
                      class="breed-origin-flag"
                      src="https://countryflagsapi.com/png/{specificCat.origin}"
                      alt={specificCat.origin}
                    />
                  </div>
                  <div>
                    <div>Select a country</div>
                    <select bind:value={specificCat.origin}>
                      {#each flags as flag}
                        <option placeholder={flag} value={flag}>{flag}</option>
                      {/each}
                    </select>
                  </div>
                </div>
              </div>
      
              <div class="breed-traits-text">Breed traits</div>
              <div class="traits-container">
                {#each traitsArray as item}
                  <div class="trait-container">
                    <div class="trait-box">
                      <div class="trait-text">
                        {item.name}
                      </div>
                      <Slider
                        bind:value={item.value}
                        min="0"
                        max="4"
                        step="1"
                        name={item.propName}
                      >
                        <span>{grabRandomCatMoji()}</span>
                        <div class="slider-text">
                          {item.value[0] + 1}
                        </div>
                      </Slider>
                    </div>
                  </div>
                {/each}
              </div>
      
              <div class="weight-container">
                <div class="breed-title">Weight</div>
                <div>
                  <Slider
                    bind:value={parsedWeight}
                    max="40"
                    range
                    on:input={(e) => {
                      if (parsedWeight[0] > parsedWeight[1]) parsedWeight.sort();
                      if (parsedWeight[1] < parsedWeight[0]) parsedWeight.sort();
                    }}
                  >
                    <div slot="left">
                      <span>{grabRandomCatMoji()}</span>
                      <div class="slider-text">
                        {parsedWeight[0]}
                      </div>
                    </div>
                    <div slot="right">
                      <span>{grabRandomCatMoji()}</span>
                      <div class="slider-text">
                        {parsedWeight[1]}
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
      
              <div class="life-span-container">
                <div class="breed-title">Life Span</div>
                <div>
                  <Slider
                    bind:value={parsedLifeSpan}
                    max="40"
                    range
                    on:input={(e) => {
                      if (parsedLifeSpan[0] > parsedLifeSpan[1]) parsedLifeSpan.sort();
                      if (parsedLifeSpan[1] < parsedLifeSpan[0]) parsedLifeSpan.sort();
                      console.log(e.detail);
                    }}
                  >
                    <div slot="left">
                      <span>{grabRandomCatMoji()}</span>
                      <div class="slider-text">
                        {parsedLifeSpan[0]}
                      </div>
                    </div>
                    <div slot="right">
                      <span>{grabRandomCatMoji()}</span>
                      <div class="slider-text">
                        {parsedLifeSpan[1]}
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
      
              <div class="breed-image-container">
                <div class="breed-image-text">
                  Image link
                  <div style="font-size: 10px; align-self: center; display: inline;">
                    Leave blank for default image
                  </div>
                </div>
                <div class="breed-input-container">
                  <input
                    type="url"
                    class="image-input w-100"
                    placeholder="Enter image link"
                    bind:value={specificCat.image}
                  />
                </div>
              </div>
      
              <div class="breed-description-container">
                <div class="breed-description-text">Breed description</div>
                <div class="breed-input-container">
                  <textarea
                    required
                    class="breed-input breed-description-input"
                    placeholder="Enter breed description"
                    bind:value={specificCat.description}
                  />
                </div>
              </div>
      

              <button>
              Submit
            </button>
          </div>
    </form>
  </div>
{/if}

<style>
    :global(.custom) {
      --toastBarBackground: rgba(0,0,0,.2);
      --toastWidth: 20rem;
      --toastBorderRadius: .3rem;
      --toastBarHeight: 100%;
    }
    :global(.success) {
      --toastBackground: #00791e;
    }

  .breed-trait-container {
    text-align: left;
    padding: 10px;
    padding-bottom: 0px;
  }

  .breed-label {
    padding: 10px;
    font-size: 24px;
    text-align: left;
  }

  .progress-bar {
    width: 100%;
    background-color: #e0e0e0;
    border-radius: 0.3rem;
  }

  .progress-bar-fill {
    display: block;
    height: 16px;
    background-color: #697a88;
    cursor:default !important;
    border-radius: 0.3rem;

    transition: width 500ms ease-in-out;
  }

  .icons {
    font-size: 32px;
    line-height: 32px;
    cursor: pointer;
  }


  input:focus:invalid,
        textarea:invalid {
          border: 1px solid red;
        }
      
        textarea:valid {
          border: 1px solid green;
        }
      
        .breed-image-container {
          padding: 20px 0;
        }
        form {
          padding: 10px;
          margin-bottom: 10px;
        }
        .weight-container,
        .life-span-container {
          padding: 10px 0;
        }
        .slider-text {
          position: absolute;
          left: 0;
          right: 0;
        }
        .d-flex {
          display: flex;
        }
      
        .w-100 {
          width: 100%;
        }
      
        .breed-description-input {
          resize: none;
          height: 200px;
          width: 100%;
        }
      
        .breed-name-container,
        .breed-origin-container,
        .breed-description-container,
        .breed-traits-text,
        .breed-image-text {
          text-align: left;
        }
      
        .breed-description-container textarea {
          font-size: 16px;
          margin-bottom: 20px;
        }
        .breed-description-container textarea,
        .breed-input,
        .image-input {
          border-radius: 0.3rem;
          outline: none;
          border: 1px solid #8f8f9d;
          padding: 10px;
        }
      
        .breed-name-text,
        .breed-origin-text,
        .breed-traits-text,
        .breed-description-text,
        .breed-image-text {
          padding: 10px 0;
          font-size: 22px;
        }
      
        .breed-origin-container {
          padding: 10px 0;
        }
      
        .breed-input {
          font-size: 20px;
        }
      
        .breed-origin-text {
          padding: 10px 0;
        }
      
        .breed-image-text {
          align-items: center;
          display: flex;
          gap: 1rem;
        }
      
        .breed-origin-flag-container {
          display: flex;
          gap: 1rem;
          height: 85px;
          align-items: center;
        }
      
        .breed-origin-flag-box {
          display: flex;
          align-items: center;
        }
      
        .breed-origin-flag {
          width: 80px;
          align-content: center;
          display: flex;
        }
      
        .traits-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
      
        .trait-container {
          display: flex;
          justify-content: space-around;
        }
      
        .trait-box {
          text-align: center;
          width: 100%;
        }
      
        .trait-text,
        .breed-title {
          font-size: 18px;
        }
      
        .traits-container {
          cursor: default;
          user-select: none;
          margin-bottom: 30px;
        }
      
        span {
          cursor: pointer;
          font-size: 1.75rem;
        }  
</style>
